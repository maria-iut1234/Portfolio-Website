"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Backend Development",
    title: "Innuo - A Sign Language Learning Website",
    description: " SL learning platform with MCQ evaluations, achievements, and user-created lessons approved by admins.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, {name: "Express"}, {name: "MongoDB"}, {name: "Node.js"}, {name: "JavaScript"}],
    image: "/assets/work/ss1.png",
    live: "https://innuo.netlify.app/",
    github: "https://github.com/maria-iut1234/Innuo",
  },
  {
    num: "02",
    category: "Machine Learning",
    title: "Burnout Sentinel - A Website for User Stress Prediction",
    description: "Website generates a stress score and a stress class from physiological data using Random Forest models.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, {name: "Python"}, {name: "Scikit-learn"}, {name: "OpenCV"}, {name: "Matplotlib"}, {name: "Numpy"}, {name: "Pandas"}, {name: "MongoDB"}, {name: "Express"},],
    image: "/assets/work/ss2.png",
    live: "https://burnout-sentinels.netlify.app/",
    github: "https://github.com/maria-iut1234/Stress-Prediction-Using-Physiological-Data",
  },
  {
    num: "03",
    category: "Machine Learning",
    title: "Word-Level ASL Recognition Model",
    description: "An LSTM model which predicts English word from ASL gesture videos.",
    stack: [{name: "Python"}, {name: "Scikit-learn"}, {name: "OpenCV"}, {name: "Matplotlib"}, {name: "Numpy"}, {name: "FastText"}, {name: "Tensorflow"}, {name: "MediaPipe"},],
    image: "/assets/work/ss3.png",
    live: "https://word-level-asl-recognition.netlify.app/",
    github: "https://github.com/maria-iut1234/Word-Level-ASL-Gesture-Recognition",
  },
  {
    num: "04",
    category: "Machine Learning",
    title: "CO2-Emissions-Prediction",
    description: "A time-series LSTM model which predicts CO2 emissions for a number of future years from 10 years of previous data with varying factors affecting it.",
    stack: [{name: "Python"}, {name: "Scikit-learn"}, {name: "Matplotlib"}, {name: "Numpy"}, {name: "Tensorflow"}, {name: "Pandas"}, {name: "Seaborn"},],
    image: "/assets/work/ss4.png",
    live: "https://word-level-asl-recognition.netlify.app/",
    github: "https://github.com/maria-iut1234/Word-Level-ASL-Gesture-Recognition",
  },
  {
    num: "05",
    category: "Full-Stack Development",
    title: "QuizzyPedia - A website to create and give quizzes on any topics",
    description: "A website where users can create quizzes on any topic and give quizzes created by others and also see their evaluation of the given quiz using the result details page.",
    stack: [{name: "Next.js"}, {name: "React"}, {name: "Tailwind CSS"}, {name: "MongoDB"}, {name: "JavaScript"},],
    image: "/assets/work/ss5.png",
    live: "",
    github: "https://github.com/maria-iut1234/QuizzyPedia",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
