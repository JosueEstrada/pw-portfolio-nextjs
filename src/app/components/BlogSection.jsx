"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const BlogSection = () => {
  // Placeholder data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Título del Post 1",
      content: "Contenido del Post 1. Descripción breve del contenido.",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Título del Post 2",
      content: "Contenido del Post 2. Descripción breve del contenido.",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Título del Post 3",
      content: "Contenido del Post 3. Descripción breve del contenido.",
      image: "/images/blog3.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-white" id="blog">
      <div className="py-16 px-4 xl:px-16">
        <h2 className="text-4xl font-bold mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="mb-8">
              <Image
                src={post.image}
                width={400}
                height={300}
                alt=""
                className="rounded-3xl"
              />
              <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-400">{post.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
          >
            Ver Todos los Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
