'use client';

import { CATEGORY } from "@/interface/category.interface";
import React from "react";

const categories = {
  data: [
    {
      id: 1,
      name: "React",
      slug: "react",
      createdAt: "2021-10-01T04:00:00.000Z",
      updatedAt: "2021-10-01T04:00:00.000Z",
      documentId: "1",
    },
    {
      id: 2,
      name: "Vue",
      slug: "vue",
      createdAt: "2021-10-01T04:00:00.000Z",
      updatedAt: "2021-10-01T04:00:00.000Z",
      documentId: "2",
    },
    {
      id: 3,
      name: "Angular",
      slug: "angular",
      createdAt: "2021-10-01T04:00:00.000Z",
      updatedAt: "2021-10-01T04:00:00.000Z",
      documentId: "3",
    },
  ],
};

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const onChangeCategory = (slug: string) => {
    setActiveCategory(slug);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        className="rounded-xl px-3 py-1.5 text-sm font-medium text-base-200 bg-base-700"
        onClick={() => onChangeCategory('all')}
        aria-pressed={activeCategory === 'all'}
      >
        All
      </button>
      {categories.data.map((category: CATEGORY) => {
        return (
          <button
            key={category.id}
            className="rounded-xl px-3 py-1.5 text-sm font-medium text-base-200 bg-base-700"
            onClick={() => onChangeCategory(category.slug)}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default BlogCategories;
