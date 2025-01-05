import { EyeIcon } from "@heroicons/react/24/outline";

const SampleVisualization = () => {
  return (
    <div className="p-4 h-full bg-[#18181C] rounded-lg">
      <div className="p-2 flex space-x-1 ">
        <EyeIcon className="size-4 text-white mt-[2px] mr-1" />
        <h6 className="text-sm font-semibold"> Visualize </h6>
      </div>
      <h1 className="font-bold text-2xl"></h1>
      <div className="flex space-x-1 mt-2"></div>
    </div>
  );
};

export default SampleVisualization;
