import {
  DocumentIcon,
  FireIcon,
  LockClosedIcon,
  TagIcon,
} from "@heroicons/react/16/solid";
import Chip from "./ui/chip";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
const SampleQuestionDescription = () => {
  return (
    <div className="p-4 h-full bg-[#18181C] rounded-lg">
      <div className="p-2 flex space-x-1 ">
        <DocumentTextIcon className="size-4 text-white mt-[2px] mr-1" />
        <h6 className="text-sm font-semibold"> Description</h6>
      </div>
      <h1 className="font-bold text-l">1. Sort An Array</h1>
      <div className="flex flex-wrap space-x-1 space-y-1 mt-2 items-center">
        <Chip
          props={
            <div className="flex space-x-2 text-green-500">
              <FireIcon className="size-3 text-white mt-[2px] mr-1" /> Easy
            </div>
          }
        />
        <Chip
          props={
            <div className="flex space-x-2">
              <TagIcon className="size-3 text-white mt-[2px] mr-1" /> Topics
            </div>
          }
        />

        <div>
          <button className="relative inline-flex h-6 overflow-hidden rounded-full p-[1px] focus:p-[2px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl ">
              <LockClosedIcon className="size-3 text-white pt-0 mr-1" />
              Companies
            </span>
          </button>
        </div>
      </div>
      <div className="mt-2 text-xs">
        Given an array of integers nums, sort the array in ascending order and
        return it.
      </div>
      <div className="mt-2 text-xs">
        <h3 className="font-semibold">Example 1:</h3>
      </div>
    </div>
  );
};

export default SampleQuestionDescription;
