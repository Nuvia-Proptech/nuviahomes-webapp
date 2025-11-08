import { MessageContactItem } from "./MessageContactItem";

export const MessageChatList = ({
  contacts,
  selectedContact,
  onContactSelect,
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
