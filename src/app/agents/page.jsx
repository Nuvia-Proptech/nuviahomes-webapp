import AgentCard from '@/components/Agent/AgentCard'
import Buttonss from '@/components/Buttonss'
import AltHero from '@/components/shared/AltHero'
import Image from 'next/image'
import React from 'react'
// import { Facebook, Linkedin, X } from 'lucide-react'

export default function AgentPage() {
    let agentDetails = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section>
        <AltHero pageName="Agents" />

        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-32'>
            {agentDetails.map((i)=> (
                 <AgentCard key={i} />
            ))}
          </div>
        </div>
    </section>
  )
}
