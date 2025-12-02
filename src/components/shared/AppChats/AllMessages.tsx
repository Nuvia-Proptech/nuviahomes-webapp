import Image from "next/image";
import agentImg from "@/assets/images/agent.png";

export const AllMessages = ({ message, nextMessage }) => {
  const isSent = message.type === "sent";

  const showTime =
    !nextMessage ||
    nextMessage.time !== message.time ||
    nextMessage.type !== message.type;

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div>
        {/* chat and image */}
        <div className={`flex gap-3 ${isSent ? "" : "flex-row-reverse"}`}>
          <div
            className={`max-w-xs lg:max-w-md px-4.5 py-2 rounded-md shadow-sm ${
              isSent
                ? "bg-primaryColor text-white rounded-tr-none"
                : "bg-white text-textColor rounded-tl-none"
            }`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
          <Image
            src={agentImg}
            alt="Agent Image"
            width={38}
            height={38}
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Date and time - only show when conditions are met */}
        {showTime && (
          <div>
            <p
              className={`text-xs mt-1 text-textColorFaded ${
                isSent ? "text-end mr-10" : "ml-10"
              }`}
            >
              {message.time}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
