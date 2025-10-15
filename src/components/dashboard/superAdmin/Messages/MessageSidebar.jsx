import Image from "next/image";
import { MessageChatList} from "./MessageChatList";
import { MessageContactList } from "./MessageContactList";
import agentImg from "@/assets/images/agent.png";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { SearchIcon } from "@/components/shared/Icons/SearchIcon";

export const MessageSidebar = ({
  contacts,
  contactList,
  selectedContact,
  onContactSelect,
}) => {
  return (
    <div className="w-80 flex flex-col font-urbanist border-r border-[#C6D0D2] bg-white h-full">
      {/* Search */}
      <div className="py-4 px-3 border-b border-[#C6D0D2] flex justify-center items-center gap-2.5">
        <Image
          src={agentImg}
          alt="Agent Image"
          width={38}
          height={38}
          className="w-10 h-10 rounded-full"
        />
        <div className="w-64 flex gap-2 justify-center items-center border border-[#C6D0D2] rounded-2xl h-10 p-2">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-none outline-none text-[#22303E66] text-sm focus:outline-none focus:text-slate-900"
          />
        </div>
      </div>

      {/* Chats Section */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <MessageChatList
          contacts={contacts}
          selectedContact={selectedContact}
          onContactSelect={onContactSelect}
        />

        <MessageContactList
          contacts={contactList}
          selectedContact={selectedContact}
          onContactSelect={onContactSelect}
        />
      </div>
    </div>
  );
};
