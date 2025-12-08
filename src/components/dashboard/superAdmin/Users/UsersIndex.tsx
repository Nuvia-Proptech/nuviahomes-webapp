import React from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";

import FirstOne from "@/components/testBed/FirstOne";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";

export const UsersIndex = () => {
  return (
    <AppWrapper>
      <SuperAdminHeader />
      {/* <SecondOne /> */}
      <FirstOne />
    </AppWrapper>
  );
};
