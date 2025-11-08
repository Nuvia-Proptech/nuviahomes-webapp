import { ChatHeader } from './ChatHeader'
import { AllMessages } from './AllMessages'
import { ChatInput } from './ChatInput'

export const ChatArea = ({ contact, messages, onSendMessage }) => {
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <ChatHeader contact={contact} />
      </div>
      
      {/* Scrollable Messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="max-w-3xl mx-auto py-6 space-y-4">
        {messages.map((message, index) => (
            <AllMessages 
              key={message.id} 
              message={message}
              nextMessage={messages[index + 1]}
            />
          ))}
        </div>
      </div>
      
      {/* Fixed Input */}
      <div className="flex-shrink-0 m-6 space-y-4">
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    </div>
  )
}