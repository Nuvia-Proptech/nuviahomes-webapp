// src/components/Agent/AgentCard.jsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlinePhoneMissedCall, HiOutlineMail } from "react-icons/hi";
import { SlSocialInstagram } from "react-icons/sl";
import { PiWhatsappLogo } from "react-icons/pi";


const iconMap = {
  HiOutlinePhoneMissedCall,
  HiMiniDevicePhoneMobile,
  PiWhatsappLogo,
  HiOutlineMail,
  CiGlobe,
  SlSocialInstagram,
};

export default function AgentCard({ agent }) {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row border border-gray-500 rounded-2xl gap-5 p-3">
      {/* Clickable image section */}
      <div
        onClick={() => router.push(`/agents/${agent.id}`)}
        className="h-48 lg:w-96 rounded-2xl overflow-hidden cursor-pointer"
      >
        <Image
          src={agent.avatar}
          alt={agent.name}
          width={384}
          height={192}
          className="object-fill"
        />
      </div>

      {/* Info Section */}
      <div className="w-full">
        <div className="flex flex-col xl:flex-row gap-4 justify-between border-b border-gray-500 py-2">
          {/* Clickable agent name */}
          <div
            onClick={() => router.push(`/agents/${agent.id}`)}
            className="cursor-pointer"
          >
            <p className="font-semibold text-lg">{agent.name}</p>
            <p className="text-gray-400">
              {agent.propertiesListed} properties listed
            </p>
          </div>

          {/* Safe external links */}
          <div className="flex gap-4 my-auto">
            {agent.socials.instagram && (
              <a
                href={agent.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
            )}
            {agent.socials.facebook && (
              <a
                href={agent.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
            )}
            {agent.socials.linkedin && (
              <a
                href={agent.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
            )}
            {agent.socials.twitter && (
              <a
                href={agent.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaXTwitter className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 py-4">
          {agent.contacts.map((contact, index) => {
  const IconComponent = iconMap[contact.icon];
  return (
    <div key={index} className="flex items-center gap-2">
      <div className="h-6">
        {IconComponent ? (
          <IconComponent className="w-6 h-6 text-white" />
        ) : (
          <span className="w-6 h-6 text-gray-500">?</span>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-300">{contact.type}</p>
        <p className="text-xs text-gray-400">{contact.value}</p>
      </div>
    </div>
  );
})}
        </div>
      </div>
    </div>
  );
}
