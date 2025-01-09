import React from "react";
import { Card, CardContent, CardTitle } from "../Components/ui/Card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageurl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-600 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageurl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-green-500" : "text-green-200"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/post/${post.id}`}
          className={`w-full px-6 text-white rounded hover:bg-green-700 ${
            isDarkBackground
              ? "bg-black hover:bg-red-600"
              : "bg-black hover:bg-red-600"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
