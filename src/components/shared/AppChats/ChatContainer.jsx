'use client'
import { useState } from 'react'
import { MessageSidebar } from './MessageSidebar'
import { ChatArea }from './ChatArea'
import { ChatInitialState } from './ChatInitialState'
import { messagesData, contactList, contactsData } from '@/lib/dummyData/messageContactData'

export const ChatContainer =() => {
  const [selectedContact, setSelectedContact] = useState(null)
  const [messages, setMessages] = useState({})

  const handleContactSelect = (contact) => {
    setSelectedContact(contact)
    if (messagesData[contact.id]) {
      setMessages(prev => ({
        ...prev,
        [contact.id]: messagesData[contact.id]
      }))
    }
  }

  const handleSendMessage = (text) => {
    if (!selectedContact) return

    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'sent'
    }

    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [
        ...(prev[selectedContact.id] || []),
        newMessage
      ]
    }))

    // Simulate reply after delay
    setTimeout(() => {
      const replyMessage = {
        id: Date.now() + 1,
        text: "Thanks for your message. I'll get back to you shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'received'
      }

      setMessages(prev => ({
        ...prev,
        [selectedContact.id]: [
          ...(prev[selectedContact.id] || []),
          replyMessage
        ]
      }))
    }, 1000)
  }

  return (
    <div className="flex bg-transparent overflow-hidden h-screen">
      <MessageSidebar
        contacts={contactsData}
        contactList={contactList}
        selectedContact={selectedContact}
        onContactSelect={handleContactSelect}
      />
      
      <div className="flex-1 flex">
        {selectedContact ? (
          <ChatArea
            contact={selectedContact}
            messages={messages[selectedContact.id] || []}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <ChatInitialState />
        )}
      </div>
    </div>
  )
}