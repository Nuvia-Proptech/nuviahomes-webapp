import agentImg from "@/assets/images/agent.png";
import Image from "next/image";

export const MessageContactItem = ({ contact, isSelected, onSelect, showLastMessage = false }) => {
    return (
      <div
        className={`flex items-center p-3 rounded-sm cursor-pointer transition-colors ${
          isSelected ? 'bg-primaryColor' : 'hover:bg-secondaryColor'
        }`}
        onClick={onSelect}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
        <Image
          src={agentImg}
          alt="Agent Image"
          width={38}
          height={38}
          className="w-10 h-10 rounded-full"
        />
        </div>
        
        <div className="flex-1 ml-3 min-w-0">
          <div className="flex items-center justify-between">
            <p className={`"text-sm font-semibold truncate" ${isSelected ? "text-white" : "text-textColor"}`}>
              {contact.name}
            </p>
            <p className={`text-xs font-normal whitespace-nowrap" ${isSelected ? "text-white" : "text-textColorFaded"}`}>
              {contact.date}
            </p>
          </div>
          
          {/* if by any chance the typing and last message is not needed then {contact.role} will just be displayed */}
          {showLastMessage ? (
            contact.isTyping ? (
              <div className="flex items-center mt-1">
                <p className={`text-xs font-normal whitespace-nowrap mt-1" ${isSelected ? "text-white" : "text-textColorFaded"}`}>typing..</p>
                
              </div>
            ) : (
              <p className={`text-xs font-normal whitespace-nowrap mt-1" ${isSelected ? "text-white" : "text-textColorFaded"}`}>
                {contact.lastMessage}
              </p>
            )
          ) : (
            <p className={`text-xs font-normal whitespace-nowrap mt-1" ${isSelected ? "text-white" : "text-textColorFaded"}`}>
              {contact.role}
            </p>
          )}
        </div>
      </div>
    )
  }