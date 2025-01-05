import { LockClosedIcon, TagIcon } from "@heroicons/react/16/solid";
import Chip from "./ui/chip";
const SampleQuestionDescription = () => {
  return (
    <div className="p-4 h-full bg-[#0D1117] rounded-lg">
      <div className="p-2 flex space-x-1">
        <h6 className="text-sm font-semibold">Description</h6>
      </div>
      <h1 className="font-bold text-2xl">1. Length of Last Word</h1>
      <div className="flex space-x-1 mt-2">
        <Chip props={"Easy"} />
        <Chip
          props={
            <div className="flex space-x-2">
              <TagIcon className="size-4 text-white mt-[2px] mr-1" /> Topic
            </div>
          }
        />
        <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <LockClosedIcon className="size-4 text-white pt-0 mr-1" />
            Companies
          </span>
        </button>
      </div>
    </div>
  );
};

export default SampleQuestionDescription;
