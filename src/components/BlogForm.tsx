import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/Blogs";
import type { CreateBlogInput } from "../types/Blog";

interface BlogFormProps {
  onClose: () => void;
  onCreated: (id: number) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onClose, onCreated  }) => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<CreateBlogInput>({
    title: "",
    description: "",
    content: "",
    category: [],
    coverImage:
      "https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=1200",
    date: "",
  });

  const [categoryInput, setCategoryInput] = useState("");

const mutation = useMutation({
mutationFn: createBlog,
onSuccess: (createdBlog) => {
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
    onCreated(createdBlog.id);
    onClose();
},
});

  const addCategory = () => {
    const value = categoryInput.trim();
    if (!value || formData.category.includes(value)) return;

    setFormData((prev) => ({
      ...prev,
      category: [...prev.category, value],
    }));
    setCategoryInput("");
  };

  const removeCategory = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      category: prev.category.filter((c) => c !== cat),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content || formData.category.length === 0) {
      alert("Title, at least one category, and content are required.");
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl">
      <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-10 border-b flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">Draft New Blog</h2>
            <p className="text-slate-400 text-sm mt-1">
              Create a new article
            </p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500">
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-10 space-y-8 overflow-y-auto"
        >
          {/* Title */}
          <input
            type="text"
            placeholder="Blog title"
            className="w-full px-6 py-4 bg-slate-50 rounded-xl font-semibold"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          {/* Categories */}
          <div>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Add category"
                className="flex-1 px-4 py-3 bg-slate-50 rounded-xl"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCategory();
                  }
                }}
              />
              <button
                type="button"
                onClick={addCategory}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.category.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-violet-100 text-violet-700 rounded-lg text-sm font-bold"
                >
                  {cat}
                  <button
                    type="button"
                    onClick={() => removeCategory(cat)}
                    className="ml-2 text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <textarea
            rows={2}
            placeholder="Short description"
            className="w-full px-6 py-4 bg-slate-50 rounded-xl"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          {/* Content */}
          <textarea
            rows={10}
            placeholder="Full blog content"
            className="w-full px-6 py-4 bg-slate-50 rounded-xl"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-slate-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="px-8 py-3 bg-violet-600 text-white rounded-xl font-bold"
            >
              {mutation.isPending ? "Publishing..." : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;