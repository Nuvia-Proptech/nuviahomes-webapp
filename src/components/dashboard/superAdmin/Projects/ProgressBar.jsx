import { cn } from "@/lib/utils";

export const ProgressBar = ({ progress, className,  isPercent = true}) => {
    return (
      <div className={cn("flex gap-1.5 justify-start items-center mr-10", className)}>
        <div className="w-full bg-[#F4F6F6] rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-[#6822F3B2] transition-all duration-300`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {isPercent ? <p className="text-sm font-medium text-textColor">{progress}%</p> : ""}
        
      </div>
    );
  };
