"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextDotJs,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Phone",
      fieldValue: "123456789",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "luke.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Email",
      fieldValue: "luke@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, German, Bengali",
    },
  ],
};

// experience data
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Studio.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "E-commerce.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Academy.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Digital",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Software",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items: [
    {
      institution: "Institute of Technology",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "School of Design",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "School of Design2",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "School of Design3",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "School of Design4",
      degree: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[78vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
