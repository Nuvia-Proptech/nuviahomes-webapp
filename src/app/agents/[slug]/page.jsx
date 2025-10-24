import Image from "next/image";
import React from "react";
import AltHero from "@/components/shared/AltHero";
import WriteAgent from "@/components/Agent/agentDetails/WriteAgent";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { AgentsData } from "@/lib/dummyData/AgentData";
import { CommentSection } from "@/components/shared/CommentSection";
import TrendingBlog from "@/components/blog/blogArticles/TrendingBlog";
import { AgentListingCard } from "@/components/Agent/AgentListingCard";

export default function AgentDetails({ params }) {
  const { slug } = params;

  const agent = AgentsData.find((agent) => String(agent.id) === String(slug));

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div>
      <AltHero pageName="Agent Details" />
      <div className=" md:px-4">
        <div className="container px-4 mx-auto border border-gray-500 p-8 rounded-2xl">
          <div className="flex gap-10">
            <div>
              <div className="rounded-2xl h-[344px] w-[306px] relative">
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-full h-full object-cover rounded-xl"
                  width={306}
                  height={344}
                />
              </div>
              {/* Socials icon */}
              <div className="flex gap-4 justify-center pt-6">
                <a
                  href={agent.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href={agent.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaFacebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href={agent.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href={agent.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaXTwitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div className="flex gap-10 w-full">
              <div className="w-1/2 pr-8">
                <p className="text-20 gradient-text">Meet Our Agent</p>
                <p className="text-[32px] font-semibold my-2">{agent.name}</p>
                <p className="text-20 mb-2 font-semibold">
                  Real Estate Agent/Broker
                </p>
                <p className="text-16">{agent.bio}</p>
                <hr
                  className="mt-6 mb-10"
                  style={{ backgroundColor: "red", color: "red" }}
                />
                <div className="space-y-4">
                  <div className="flex justify-between ">
                    <div>
                      <p className="text-20">Phone</p>
                      <p>
                        {agent.contacts.find((c) => c.type === "Mobile")?.value}
                      </p>
                      <p>
                        {agent.contacts.find((c) => c.type === "Office")?.value}
                      </p>
                    </div>
                    <div className="md:w-[40%]">
                      <p className="text-20">Email</p>
                      <p>
                        {agent.contacts.find((c) => c.type === "Email")?.value}
                      </p>
                      <p>
                        {
                          agent.contacts.find((c) => c.type === "WhatsApp")
                            ?.value
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div>
                      <p className="text-20">Languages</p>
                      <p>{agent.languages.join(", ")}</p>
                    </div>
                    <div className=" md:w-[40%]">
                      <p className="text-20">Website</p>
                      <p>
                        {
                          agent.contacts.find((c) => c.type === "Website")
                            ?.value
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <WriteAgent />
            </div>
          </div>
        </div>
      </div>
      <AgentListingCard />
      <div className="md:flex w-full gap-4 p-4 md:p-10">
        <div className="w-3/4">
          <CommentSection />
        </div>
        <div className="w-1/4">
          <TrendingBlog />
        </div>
      </div>
    </div>
  );
}
