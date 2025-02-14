import React from "react";
import { formatTimestamp } from "@/utils/date";
const BlogPostsData = [
  {
    id: 1,
    documentId: "1",
    title: "Showing comments using Bluesky",
    description: "React",
    slug: "react",
    createdAt: "2021-10-01T04:00:00.000Z",
    updatedAt: "2021-10-01T04:00:00.000Z",
    publishedAt: "2021-10-01T04:00:00.000Z",
    type: "React",
    readTime: "1 min",
    cover: {
      url: "https://source.unsplash.com/random",
    },
  },
  {
    id: 2,
    documentId: "2",
    title: "Showing Likes using Bluesky",
    description: "Vue",
    slug: "vue",
    createdAt: "2021-10-01T04:00:00.000Z",
    updatedAt: "2021-10-01T04:00:00.000Z",
    publishedAt: "2021-10-01T04:00:00.000Z",
    type: "Vue",
    readTime: "1 min",
    cover: {
      url: "https://source.unsplash.com/random",
    },
  },
];

const BlogPosts = () => {
  return (
    <div className="flex flex-col gap-2">
      {BlogPostsData.map((post) => {
        return (
          <div
            className="grid grid-cols-4 hover:text-accent-400 cursor-pointer transition-colors duration-200 ease-in-out"
            key={post.id}
          >
            <p className="col-span-3 font-medium text-lg">{post.title}</p>
            <p className="text-base-400 text-sm text-right">
              {formatTimestamp(post.updatedAt)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
