"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import Title from "./Title";
const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "NETAŞ - Bilgi ve İletişim Teknolojileri , Ankara",
    description:
      "Internship : I worked as a full stack developer under the Fatih project. Our job was developing a web application and interface for MEB.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Graduated University",
    location: "Ankara",
    description:
      "I graduated from ATILIM University as a Information Systems Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Innova Bilişim Çözümleri , Ankara",
    description:
      "I work as a Full-Stack Developer for Innova Service Delivery Unit. I create full-stack web apps for this particular unit.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40 text-white h-screen md:mt-0 mt-16"
    >
      <Title>Experience</Title>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={item.icon}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
