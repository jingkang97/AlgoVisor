import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import SampleCodeEditor from "./SampleCodeEditor";
import SampleQuestionDescription from "./SampleQuestionDescription";
import AnimatedText from "./AnimatedText";
import SampleVisualization from "./SampleVisualization";
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
        <div className="h-full w-full">
          <div className="w-full h-[40px] rounded-t-lg bg-[#1E1E22] p-[14px] space-x-2 flex">
            <div className="h-[12px] w-[12px] rounded-full bg-[#474749]"></div>
            <div className="h-[12px] w-[12px] rounded-full bg-[#474749]"></div>
            <div className="h-[12px] w-[12px] rounded-full bg-[#474749]"></div>
          </div>{" "}
          <div className="relative flex h-[calc(100%-40px)] z-10 p-3 space-x-2">
            <div className="h-full w-2/6 rounded-lg  overflow-hidden">
              <SampleQuestionDescription />
            </div>
            <div className="h-full w-3/6 rounded-lg  overflow-hidden">
              <SampleVisualization />
            </div>
            <div className="h-full w-2/6 overflow-hidden">
              <SampleCodeEditor />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
