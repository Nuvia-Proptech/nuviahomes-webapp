import AltHero from "@/components/shared/AltHero";
import Image from "next/image";
import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import WriteAgent from "@/components/Agent/agentDetails/WriteAgent";

export default function page() {
  return (
    <div>
      <AltHero pageName="Agent details" />
      <div className="container px-4 mx-auto border border-gray-500 p-8 rounded-2xl">
        <div className="flex gap-10">
          <img src="/" alt="" />
          <div>
            <div className="rounded-2xl h-[344px] w-[306px] relative">
              <Image
                src={egImage}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Socials icon */}
            <div className="flex gap-4 justify-center pt-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="white"
                />
                <path
                  d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                  fill="white"
                />
                <path
                  d="M17 7.50003C16.87 7.50003 16.74 7.47003 16.62 7.42003C16.5 7.37003 16.39 7.30003 16.29 7.21003C16.2 7.11003 16.12 7.00003 16.07 6.88003C16.02 6.76003 16 6.63003 16 6.50003C16 6.37003 16.02 6.24003 16.07 6.12003C16.13 5.99003 16.2 5.89003 16.29 5.79003C16.34 5.75003 16.39 5.70003 16.44 5.67003C16.5 5.63003 16.56 5.60003 16.62 5.58003C16.68 5.55003 16.74 5.53003 16.81 5.52003C17.13 5.45003 17.47 5.56003 17.71 5.79003C17.8 5.89003 17.87 5.99003 17.92 6.12003C17.97 6.24003 18 6.37003 18 6.50003C18 6.63003 17.97 6.76003 17.92 6.88003C17.87 7.00003 17.8 7.11003 17.71 7.21003C17.61 7.30003 17.5 7.37003 17.38 7.42003C17.26 7.47003 17.13 7.50003 17 7.50003Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 22.75H10.25V15.5H9.29999C8.71999 15.5 8.25 15.03 8.25 14.45V12.55C8.25 11.97 8.71999 11.5 9.29999 11.5H10.25V9C10.25 6.93 11.93 5.25 14 5.25H16.7C17.28 5.25 17.75 5.71999 17.75 6.29999V8.70001C17.75 9.28001 17.28 9.75 16.7 9.75H14.75V11.5H16.63C16.95 11.5 17.24 11.64 17.44 11.88C17.64 12.12 17.72 12.44 17.66 12.75L17.28 14.65C17.18 15.14 16.75 15.49 16.25 15.49H14.75V22.75ZM11.75 21.25H13.25V14H15.89L16.09 13H13.26V9.29999C13.26 8.71999 13.73 8.25 14.31 8.25H16.26V6.75H14C12.76 6.75 11.75 7.76 11.75 9V13H9.75V14H11.75V21.25Z"
                  fill="white"
                />
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="white"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9998 11.49C10.6798 11.49 9.43986 10.98 8.50986 10.04L2.77988 4.30999C2.25988 3.78999 2.10986 3.01999 2.38986 2.34999C2.66986 1.67999 3.31983 1.23999 4.04983 1.23999H5.45987C6.49987 1.23999 7.47987 1.64999 8.20987 2.37999L11.7898 5.95999C11.9398 6.10999 12.0599 6.10999 12.2099 5.95999L15.7898 2.37999C16.5298 1.63999 17.4998 1.23999 18.5398 1.23999H19.9499C20.6799 1.23999 21.3298 1.67999 21.6098 2.34999C21.8898 3.01999 21.7398 3.78999 21.2198 4.30999L15.4898 10.04C14.5598 10.98 13.3198 11.49 11.9998 11.49ZM4.04983 2.74999C3.87983 2.74999 3.79987 2.86999 3.76987 2.92999C3.73987 2.98999 3.70986 3.12999 3.82986 3.24999L9.55984 8.97999C10.8598 10.28 13.1298 10.28 14.4298 8.97999L20.1598 3.24999C20.2798 3.12999 20.2498 2.98999 20.2198 2.92999C20.1898 2.86999 20.1199 2.74999 19.9398 2.74999H18.5299C17.8899 2.74999 17.2899 2.99999 16.8399 3.44999L13.2599 7.02999C12.5599 7.72999 11.4198 7.72999 10.7198 7.02999L7.13986 3.44999C6.68986 2.99999 6.08986 2.74999 5.44986 2.74999H4.04983Z"
                  fill="white"
                />
                <path
                  d="M19.9499 22.72H18.5398C17.4998 22.72 16.5198 22.31 15.7898 21.58L12.2099 18C12.0599 17.85 11.9398 17.85 11.7898 18L8.20987 21.58C7.46987 22.32 6.49987 22.72 5.45987 22.72H4.04983C3.31983 22.72 2.66986 22.28 2.38986 21.61C2.10986 20.94 2.25988 20.17 2.77988 19.65L8.50986 13.92C9.43986 12.99 10.6798 12.47 11.9998 12.47C13.3198 12.47 14.5598 12.98 15.4898 13.92L21.2198 19.65C21.7398 20.17 21.8898 20.94 21.6098 21.61C21.3298 22.28 20.6799 22.72 19.9499 22.72ZM11.9998 16.42C12.4598 16.42 12.9199 16.6 13.2699 16.95L16.8498 20.53C17.2998 20.98 17.8998 21.23 18.5398 21.23H19.9499C20.1199 21.23 20.1998 21.11 20.2298 21.05C20.2598 20.99 20.2898 20.85 20.1698 20.73L14.4398 15C13.1398 13.7 10.8699 13.7 9.56985 15L3.83987 20.73C3.71987 20.85 3.74988 20.99 3.77988 21.05C3.80988 21.11 3.87984 21.23 4.05984 21.23H5.46982C6.10982 21.23 6.70982 20.98 7.15982 20.53L10.7398 16.95C11.0798 16.59 11.5398 16.42 11.9998 16.42Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-10 w-full">
            <div className="w-1/2 pr-8">
              <p className="text-20 gradient-text">Meet Our Agent</p>
              <p className="text-[32px] font-semibold my-2">
                Rachel Bransonson
              </p>
              <p className="text-20 mb-2">The Real Estate Agent/Broker</p>
              <p className="text-16">
                Meet Alex Thompson, a dedicated real estate agent and broker
                with over a decade of experience in the industry. Known for his
                exceptional negotiation skills and in-depth market knowledge,
                Alex has successfully closed numerous deals, helping clients
                find their dream homes and investment properties. His commitment
                to client satisfaction is unmatched, and he prides himself on
                providing personalized service tailored to each client's unique
                needs. Whether you're buying, selling, or investing, Alex is
                here to guide you every st
              </p>

              <hr className="mt-6 mb-10" style={{backgroundColor: "red", color: "red"}} />
              <div className="space-y-4">
                {/* col - 1 */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-20">Phone</p>
                    <p>samuel@gmail.com</p>
                    <p>samuel@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-20">Email</p>
                    <p>+234 817 387 4083</p>
                    <p>+234 817 387 4083</p>
                    <p>+234 817 387 4083</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-20">Languages</p>
                    <p>English, Spanish, Youruba</p>
                  </div>

                  <div>
                    <p className="text-20">Website</p>
                    <p>samuel@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <WriteAgent />
          </div>
        </div>
      </div>
    </div>
  );
}
