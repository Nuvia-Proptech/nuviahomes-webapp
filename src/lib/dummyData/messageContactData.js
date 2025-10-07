export const contactsData = [
    {
      id: 'samantha',
      name: 'Samantha Taiwo',
      role: 'Property Manager',
      avatar: 'ST',
      lastMessage: 'What is the dimension of the pool?',
      date: 'Oct 05',
      isTyping: true
    },
    {
      id: 'jordan',
      name: 'Jordan Lee',
      role: 'Nuvo Homes Agent',
      avatar: 'JL',
      lastMessage: 'How can I help you?',
      date: 'Oct 12',
      isTyping: false
    },
    {
      id: 'aisha',
      name: 'Aisha Patel',
      role: 'Estate Agent',
      avatar: 'AP',
      lastMessage: 'Property inspection scheduled',
      date: 'Oct 05',
      isTyping: false
    },
    {
      id: 'michael',
      name: 'Michael Chen',
      role: 'Buyer',
      avatar: 'MC',
      lastMessage: 'Interested in downtown apartment',
      date: 'Oct 12',
      isTyping: false
    }
  ]
  
  export const contactList = [
    {
      id: 'jordan',
      name: 'Jordan Lee',
      role: 'Nuvo Homes Agent',
      avatar: 'JL',
      date: 'Oct 06'
    },
    {
      id: 'aisha',
      name: 'Aisha Patel',
      role: 'Estate Agent',
      avatar: 'AP',
      date: 'Oct 12'
    },
    {
      id: 'michael',
      name: 'Michael Chen',
      role: 'Buyer',
      avatar: 'MC',
      date: 'Oct 12'
    }
  ]
  
  export const messagesData = {
    jordan: [
      { id: 1, text: "How can I help you? we are here!", time: "10:55 AM", type: "received" },
      { id: 2, text: "Hey Daniel, I am looking at the said property listed on this platform, and I am looking at buying?", time: "10:55 AM", type: "sent" },
      { id: 3, text: "what is the last offer for this house?", time: "10:55 AM", type: "sent" },
      { id: 4, text: "I am looking at paying installmentally in a spacing of 3 months is this possible?", time: "10:55 AM", type: "sent" }
    ],
    samantha: [
      { id: 1, text: "What is the dimension of the pool?", time: "11:20 AM", type: "received" },
      { id: 2, text: "The pool is 20x40 feet with a depth ranging from 3 to 8 feet.", time: "11:22 AM", type: "sent" },
      { id: 3, text: "Does it have a heating system?", time: "11:23 AM", type: "received" }
    ],
    aisha: [
      { id: 1, text: "The property inspection is scheduled for tomorrow at 2 PM.", time: "09:15 AM", type: "received" },
      { id: 2, text: "Great, I'll be there. Please send me the exact address.", time: "09:16 AM", type: "sent" }
    ],
    michael: [
      { id: 1, text: "I'm interested in the downtown apartment. Is it still available?", time: "Yesterday", type: "received" },
      { id: 2, text: "Yes, it's still available. Would you like to schedule a viewing?", time: "Yesterday", type: "sent" }
    ]
  }