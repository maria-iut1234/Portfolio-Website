"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "I build responsive and interactive web applications using React, Next.js, Tailwind CSS, Node.js, PHP, Express, and MongoDB. I also optimize websites for performance and SEO.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Data Analysis and Machine Learning Models",
    description:
      "I use Python, Pandas, NumPy, and Scikit-learn to analyze data, build machine learning models, and make predictions based on data.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Game Development",
    description:
      "Using Unity, C#, and Blender assets, I build 2D and 3D games that are fun, engaging, and visually appealing. I also optimize games for performance and user experience.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Illustration and Graphic Design",
    description:
      "I create custom illustrations, logos, and graphics for websites, games, and social media. I also design user interfaces and user experiences for web and mobile applications.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          intial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
