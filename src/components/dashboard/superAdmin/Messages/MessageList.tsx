import React from "react";
import { MessageContactItem } from "./MessageContactItem";

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: React.ReactNode;
  date: string;
  lastMessage: string;
  isTyping?: boolean;
}

interface MessageListProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onContactSelect: (contact: Contact) => void;
}

export const MessageList = ({
  contacts,
  selectedContact,
  onContactSelect,
}: MessageListProps) => {
  return (
    <div className="py-4">
      <h2 className="text-xl text-primaryColor font-semibold mb-3"></h2>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <MessageContactItem
            key={contact.id}
            contact={contact}
            isSelected={selectedContact?.id === contact.id}
            onSelect={() => onContactSelect(contact)}
            showLastMessage
          />
        ))}
      </div>

      <div className="space-y-2">
        {contacts.map((contact) => (
          <MessageContactItem
            key={contact.id}
            contact={contact}
            isSelected={selectedContact?.id === contact.id}
            onSelect={() => onContactSelect(contact)}
          />
        ))}
      </div>
    </div>
  );
};
