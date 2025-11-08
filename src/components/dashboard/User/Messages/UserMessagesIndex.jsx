import { ChatContainer } from '@/components/shared/AppChats/ChatContainer'
import { AppWrapper } from '@/components/shared/AppSetup/AppWrapper'

export const UserMessagesIndex = () => {
  return (
    <AppWrapper>
    <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
      <h1 className="text-textColor text-4xl font-semibold">Chat</h1>
      <p className="text-sm text-textColor font-normal mb-3">
        A quick glance at all properties and investments
      </p>

      <ChatContainer />
    </div>
  </AppWrapper>
  )
}
