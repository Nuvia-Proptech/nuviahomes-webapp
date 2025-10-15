import { CallIcon } from "@/components/shared/Icons/CallIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import { SearchIcon } from "@/components/shared/Icons/SearchIcon";
import { VideoIcon } from "@/components/shared/Icons/VideoIcon";

export const ChatHeader = ({ contact }) => {
  return (
    <div className="border-b border-[#C6D0D2] p-4 font-urbanist flex justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#C6D0D2] rounded-full flex items-center justify-center font-semibold text-textColor">
          {contact.avatar}
        </div>
        <div>
          <h2 className="text-sm font-semibold text-textColor">
            {contact.name}
          </h2>
          <p className="text-xs text-textColorFaded font-normal">
            {contact.role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 mr-5">
        <button>
          <CallIcon />
        </button>
        <button>
          <VideoIcon />
        </button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <MoreIcon />
        </button>
      </div>
    </div>
  );
}
