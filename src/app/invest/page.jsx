import React from "react";
import { InvestDescription } from "@/components/invest/InvestDescription";
import AltHero from "@/components/shared/AltHero";
import { HowInvestmentWorks } from "@/components/invest/HowInvestmentWorks";
import StartBuilding from "@/components/shared/StartBuilding";
import { InvestProfit } from "@/components/invest/InvestProfit";

export default function InvestPage() {
  return (
    <section>
      <AltHero pageName=" Invest" />
      <InvestDescription />
      <HowInvestmentWorks />
      <StartBuilding />
      <InvestProfit/>
    </section>
  );
}
