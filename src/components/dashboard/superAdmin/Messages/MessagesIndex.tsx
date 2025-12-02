import React from "react";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { ChatContainer } from "./ChatContainer";

export const MessagesIndex = () => {
  return (
    <AppWrapper>
      <SuperAdminHeader />
      <div className="p-4">
        <h1 className="text-textColor text-4xl font-semibold">Chat</h1>
        <p className="text-sm text-textColor font-normal">
          A quick glance at all properties and investments
        </p>
      </div>
      <ChatContainer />
    </AppWrapper>
  );
};
