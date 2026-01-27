"use client";

import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function CategoryCard({ title, description, href }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer bg-white h-full"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-700">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}