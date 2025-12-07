import { MessageContactItem } from "./MessageContactItem";

interface Contact {
  id: string | number;
  name: string;
  role: string;
  avatar: React.ReactNode;
  date: string;
  lastMessage: string;
  isTyping?: boolean;
}

export const MessageChatList = ({
  contacts,
  selectedContact,
  onContactSelect,
}: {
  contacts: Contact[];
  selectedContact: Contact | null;
  onContactSelect: (contact: Contact) => void;
}) => {
  return (
    <div className="py-4 mx-3">
      <h2 className="text-xl text-primaryColor font-semibold mb-3">Chats</h2>
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
    </div>
  );
};
