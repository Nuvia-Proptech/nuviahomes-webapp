import { MessageIconTwo } from "@/components/shared/Icons/MessageIconTwo";

export const ChatInitialState = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-secondaryColor no-scrollbar overflow-hidden"> 
      <div className="bg-primaryColor/10 w-24 h-24 rounded-full flex justify-center items-center">
        <MessageIconTwo />
      </div>

      <button className="px-7 py-2 text-white rounded-full bg-primaryColor transition-colors">
        Start Conversation
      </button>
    </div>
  );
}