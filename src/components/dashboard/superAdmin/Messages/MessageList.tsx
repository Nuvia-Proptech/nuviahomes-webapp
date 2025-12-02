import React from 'react'
import { MessageContactItem } from './MessageContactItem'

export const MessageList = ({ contacts, selectedContact, onContactSelect }) => {
  return (
    <div className="py-4">
    <h2 className="text-xl text-primaryColor font-semibold mb-3"></h2>
    <div className="space-y-2">
      {contacts.map(contact => (
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
        {contacts.map(contact => (
          <MessageContactItem
            key={contact.id}
            contact={contact}
            isSelected={selectedContact?.id === contact.id}
            onSelect={() => onContactSelect(contact)}
          />
        ))}
      </div>
  </div>
  )
}
