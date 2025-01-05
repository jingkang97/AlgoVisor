import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import SampleCodeEditor from "./SampleCodeEditor";
import SampleQuestionDescription from "./SampleQuestionDescription";
import AnimatedText from "./AnimatedText";
export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden relative">
      {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl z-0" /> */}

      <ContainerScroll
        titleComponent={
          <>
            <AnimatedText />
          </>
        }
      >
        {/* Gradient background */}

        {/* Content */}
        <div className="relative flex h-full z-10">
          <div className="h-full w-1/2 bg-black rounded-lg mr-2">
            <SampleQuestionDescription />
          </div>
          <div className="h-full w-1/2">
            <SampleCodeEditor />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
