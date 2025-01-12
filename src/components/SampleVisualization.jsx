import { EyeIcon } from "@heroicons/react/24/outline";

const SampleVisualization = () => {
  return (
    <div className="h-full bg-[#18181C] rounded-lg relative overflow-hidden p-[1px] hover:p-[2px] transition-all duration-200">
      <div className="flex absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="h-[100%] w-full  bg-slate-950 text-xs font-medium text-white backdrop-blur-3xl rounded-lg p-2">
        {/* <EyeIcon className="size-4 text-white mt-[2px] mr-1" /> */}
        <svg width="0" height="0">
          <defs>
            <linearGradient
              id="eye-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E2CBFF" />
              <stop offset="50%" stopColor="#A0A2E3" />
              <stop offset="100%" stopColor="#393BB2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Eye Icon with gradient applied to fill */}
        <div className="relative inline-block">
          <EyeIcon className="size-4 mt-[2px] mr-1 fill-[url(#eye-gradient)] animate-gradient-fill" />
        </div>
        {/* <h6 className="text-sm font-bold"> Visualize </h6> */}
        <div className="relative inline-block">
          <h6 className="text-sm font-bold bg-[length:300%_300%] bg-custom-gradient bg-clip-text text-transparent animate-gradient-x">
            Visualize
          </h6>
        </div>

        <h1 className="font-bold text-2xl"></h1>
        <div className="flex space-x-1 mt-2"></div>
      </div>
    </div>
  );
};

export default SampleVisualization;
