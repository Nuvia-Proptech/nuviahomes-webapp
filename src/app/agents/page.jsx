import AgentCard from "@/components/Agent/AgentCard";
import AltHero from "@/components/shared/AltHero";
import React from "react";
import { AgentsData } from "@/lib/dummyData/AgentData";

export default function AgentPage() {
  return (
    <section>
      <AltHero pageName="Agents" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-32">
          {AgentsData.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
