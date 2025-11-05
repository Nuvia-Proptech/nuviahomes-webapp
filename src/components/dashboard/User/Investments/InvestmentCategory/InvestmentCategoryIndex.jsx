"use client";
import React, { useState } from "react";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import Link from "next/link";
import appRoutes from "@/constants/AppRoutes";
import { ImProfile } from "react-icons/im";
import { UserInvestmentsCategoryData } from "@/lib/dummyData/UserInvestmentsCategoryData";
import { InvestmentCard } from "./InvestmentCard";
import { InvestmentModal } from "./InvestmentModal";

const InvestmentCategoryIndex = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

     const handleInvestClick = (investment) => {
    setSelectedProject(investment);
    setModalOpen(true);
  };
  return (
    <AppWrapper>
      {/* <UserDashBoardHeader /> */}
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div className="w-2/3">
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Investment Category
            </p>
            <p className="text-textColor text-md font-normal font-urbanist">
              Discover our range of investment categories tailored to fit your
              aspirations. From residential gems to commercial opportunities, we
              have something for everyone. Dive into our offerings and find the
              ideal investment that aligns with your goals. Your dream property
              awaits!{" "}
            </p>
          </div>
          <div className="">
            <Link
              href={appRoutes.dashboard.user.investments.InvestmentsCategory}
            >
              <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 btn-gradient cursor-pointer">
                <ImProfile className="text-white" />
                <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
                  My Portfolio
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="min-h-screen  py-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {UserInvestmentsCategoryData.map((investment, index) => (
              <InvestmentCard
                key={index}
                {...investment}
                investment={investment}
                onInvestClick={handleInvestClick}
              />
            ))}
          </div>
          {/* Modal Component */}
          <InvestmentModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            project={selectedProject}
          />
        </div>
      </div>
    </AppWrapper>
  );
};

export default InvestmentCategoryIndex;
