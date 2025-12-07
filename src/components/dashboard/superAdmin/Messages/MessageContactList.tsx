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

interface MessageContactListProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onContactSelect: (contact: Contact) => void;
}

export const MessageContactList = ({
  contacts,
  selectedContact,
  onContactSelect,
}: MessageContactListProps) => {
  return (
    <div className="py-4 mx-3">
      <h2 className="text-xl text-primaryColor font-semibold mb-3">Contacts</h2>
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
