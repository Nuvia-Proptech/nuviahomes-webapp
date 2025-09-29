import { ChevronRightIcon } from "@/components/shared/Icons/ChevronRightIcon";

export const Timeline = ({ milestones }) => {
  return (
    <div className="w-full max-w-lg bg-white px-2.5 py-3.5 font-urbanist">
      {/* Header */}
      <p className="text-xl text-textColor font-semibold text-left mb-4">
        Timeline/Milestone
      </p>

      {/* Milestones List Container */}
      <div className="relative">
        {/* Vertical line that covers ALL Purple circle */}
        <div className="absolute left-1 top-5 bottom-0 w-1 bg-[#22303E38]" />

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex items-start gap-3 py-2.5 relative  border-b border-[#DFE6E7]"
          >
            {/* Purple circle */}
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primaryColor/50 flex items-center justify-center mt-1 z-10">
              {/* You can add a checkmark or other icon here if needed */}
            </div>

            {/* Milestone Text */}
            <div className="flex-1">
              <p className="text-sm text-textColor font-urbanist font-semibold">
                {milestone.title} - {milestone.status} ({milestone.date})
              </p>
            </div>

            <ChevronRightIcon />
          </div>
        ))}
      </div>
    </div>
  );
};
