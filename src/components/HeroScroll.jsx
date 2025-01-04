import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import SampleCodeEditor from "./SampleCodeEditor";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Visualization
              </span>
            </h1>
          </>
        }
      >
        <div className="flex h-full">
          <div className="h-full w-1/2 bg-black rounded-lg mr-2"></div>
          <div className="h-full w-1/2">
            <SampleCodeEditor />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
