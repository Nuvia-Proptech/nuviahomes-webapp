import React, { useState } from "react";
import { HiUsers } from "react-icons/hi";
import { MdCreditCard, MdAccountBalanceWallet } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { SiSolana } from "react-icons/si";
// import { FTX_Logo } from "@/components/shared/Icons/FTX_Logo";
// import { PhantomLogo } from "@/components/shared/Icons/PhantomLogo";

export const InvestmentModal = ({ isOpen, onClose, project }) => {
  const [step, setStep] = useState(1);
  const [investmentAmount, setInvestmentAmount] = useState("5000000");
  const [investmentPeriod, setInvestmentPeriod] = useState("12 Months");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");

  if (!isOpen) return null;

  const minAmount = 500000;
  const amount = parseFloat(investmentAmount) || 0;
  const expectedReturn = amount * 0.1;
  const totalAfter12Months = amount + expectedReturn;
  const platformFee = 15000;
  const totalPayable = amount + platformFee;

  const wallets = [
    { name: "FTX", icon: "📊" },
    { name: "Phantom", icon: "👻" },
    { name: "Trust Wallet", icon: "🔷" },
    { name: "Zelcore", icon: "⚡" },
    { name: "More", icon: "💳" },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    setStep(4);
  };

  const handleClose = () => {
    setStep(1);
    setInvestmentAmount("5000000");
    setPaymentMethod("");
    setSelectedWallet("");
    onClose();
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60  flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-5">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>

          {/* Step Indicator */}
          <div className="flex items-center gap-4 mt-3 justify-between">
            <div className="flex items-center gap-2 ">
              <MdCreditCard
                className={`${
                  step >= 1 ? "text-primaryColorStrong" : "text-gray-400"
                }`}
              />
              <span
                className={`text-sm ${
                  step >= 1
                    ? "text-primaryColorStrong font-semibold"
                    : "text-gray-400"
                }`}
              >
                Investment Amount
              </span>
            </div>
            <div className="flex items-center gap-2 ">
              <MdAccountBalanceWallet
                className={`${
                  step >= 2 ? "text-primaryColorStrong" : "text-gray-400"
                }`}
              />
              <span
                className={`text-sm ${
                  step >= 2
                    ? "text-primaryColorStrong font-semibold"
                    : "text-gray-400"
                }`}
              >
                Payment
              </span>
            </div>
            <div className="flex items-center gap-2 ">
              <IoMdCheckmarkCircleOutline
                className={`${
                  step >= 4 ? "text-primaryColorStrong" : "text-gray-400"
                }`}
              />
              <span
                className={`text-sm ${
                  step >= 4
                    ? "text-primaryColorStrong font-semibold"
                    : "text-gray-400"
                }`}
              >
                Confirmation
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3 ">
            <div
              className="bg-primaryColorStrong  h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Investment Amount */}
        {step === 1 && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              How much would you like to invest?
            </h3>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">
                Investment Amount
              </label>
              <input
                type="text"
                value={`₦ ${investmentAmount}`}
                onChange={(e) =>
                  setInvestmentAmount(e.target.value.replace(/[₦,\s]/g, ""))
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum investment: ₦ {minAmount.toLocaleString()}
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">
                Investment Period
              </label>
              <select
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primaryColor"
              >
                <option>12 Months</option>
                <option>24 Months</option>
                <option>36 Months</option>
              </select>
            </div>

            {/* Summary */}
            <div className="bg-green-50 rounded-lg p-4 mb-6 md:flex justify-between">
              <div className="flex justify-between text-sm gap-1">
                <span className="text-gray-700">Investment:</span>
                <span className="font-semibold">
                  ₦ {amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between gap-1 text-sm ">
                <span className="text-gray-700">Expected Returns:</span>
                <span className="font-semibold">
                  ₦ {expectedReturn.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm gap-1">
                <span className="text-gray-700">
                  Total After {investmentPeriod}:
                </span>
                <span className="font-semibold text-green-600">
                  ₦ {totalAfter12Months.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className=" bg-primaryColorStrong text-white py-1 px-3 rounded-lg font-semibold hover:bg-primaryColor transition-colors flex items-center justify-center gap-2 "
              >
                Next
                <GoArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Payment Method */}
        {step === 2 && (
          <div className="p-6">
            <h3 className="text-base font-semibold mb-2">
              Choose Payment Method
            </h3>

            <div className="space-y-1 mb-6">
              <div
                onClick={() => setPaymentMethod("card")}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "border-primaryColor bg-purple-50"
                    : "border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "card"
                        ? "border-primaryColor"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "card" && (
                      <div className="w-3 h-3 bg-primaryColor rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">Card Payment</p>
                    <p className="text-sm text-gray-600">
                      Pay with debit or credit card
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  setPaymentMethod("crypto");
                  setStep(3);
                }}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  paymentMethod === "crypto"
                    ? "border-primaryColor bg-purple-50"
                    : "border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "crypto"
                        ? "border-primaryColor"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "crypto" && (
                      <div className="w-3 h-3 bg-primaryColor rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">Cryptocurrency</p>
                    <p className="text-sm text-gray-600">
                      Pay using blockchain cryptocurrency
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 opacity-50 cursor-not-allowed">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  <div>
                    <p className="font-semibold">Wallet</p>
                    <p className="text-sm text-gray-600">
                      Payment option coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-3">
                Payment Summary
              </h4>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Investment Amount:</span>
                <span className="font-semibold">
                  ₦ {amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Platform Fee:</span>
                <span className="font-semibold">
                  ₦ {platformFee.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold border-t pt-2 mt-2">
                <span>Total Payable:</span>
                <span>₦ {totalPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-3 justify-between">
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-between gap-2"
              >
                <span>
                  <GoArrowLeft />
                </span>
                Back{" "}
              </button>
              <button
                onClick={() =>
                  paymentMethod === "card" ? handleComplete() : null
                }
                disabled={!paymentMethod || paymentMethod === "crypto"}
                className="bg-primaryColor text-white py-2 rounded-lg font-semibold hover:bg-primaryColorStrong transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 px-4"
              >
                Complete Investment{" "}
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Crypto Payment */}
        {step === 3 && (
          <div className="p-6 ">
            <div className="border rounded-lg p-2 px-3">
              <h3 className="text-xl font-bold flex items-center gap-1">
                <span className="text-2xl">
                  <SiSolana className="w-4 h-4" />
                </span>{" "}
                Pay
              </h3>
            </div>

            <div className=" my-1">
              <div className="flex justify-between items-center mb-1 border rounded-lg py-3 px-3">
                <p className="text-gray-700">How would you like to pay?</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-2xl">
                    <SiSolana className="w-4 h-4" />
                  </span>
                  <span className="font-semibold">20.66 SOL</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1 border rounded-lg py-4 px-3">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <span className="text-sm">Collateral pay</span>
                <a href="#" className="text-blue-600 text-sm ml-auto">
                  What's collateral?
                </a>
              </div>

              <div className="border rounded-lg p-3 mb-1 flex items-center gap-2">
                <BiWallet className="text-gray-600" />
                <span className="text-sm text-gray-600">
                  Select your Solana wallet
                </span>
              </div>

              {/* Wallet Options */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {wallets.map((wallet, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedWallet(wallet.name);
                      if (wallet.name === "Phantom") {
                        setTimeout(() => setStep(3.5), 500);
                      }
                    }}
                    className={`border rounded-lg p-4 cursor-pointer hover:border-purple-600 transition-all text-center ${
                      selectedWallet === wallet.name
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">{wallet.icon}</div>
                    <p className="text-xs text-gray-700">{wallet.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-3">
                Payment Summary
              </h4>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Investment Amount:</span>
                <span className="font-semibold">
                  ₦ {amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Platform Fee:</span>
                <span className="font-semibold">
                  ₦ {platformFee.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold border-t pt-2 mt-1">
                <span>Total Payable:</span>
                <span>₦ {totalPayable.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleBack}
              className="px-4 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3"
            >
              {" "}
              <span>
                <GoArrowLeft />
              </span>
              Back
            </button>
          </div>
        )}

        {/* Step 3.5: Wallet Connected */}
        {step === 3.5 && (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2 border rounded-lg p-2 px-3">
              <span className="text-2xl">
                <SiSolana className="w-4 h-4" />
              </span>
              <span className="font-semibold">Pay</span>
            </h3>

            <div className=" text-center ">
              <div className="border rounded-lg py-4">
                <p className="font-semibold text-lg mb-1">
                  Connected to your Phantom wallet.
                </p>
                <p className="text-sm text-gray-600 ">
                  Please continue the transaction using your wallet.
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 bg-white rounded-lg p-3 border my-1">
                <div className="text-left flex items-center gap-1 align-middle">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                    👻
                  </div>
                  <p className="text-xs my-auto ">Address:</p>
                  <p className="text-sm font-mono  text-gray-500 ">
                    G70Dx9W2258...Hqk2V2c
                  </p>
                </div>
                <button className="text-sm text-blue-600 hover:underline">
                  Change wallet
                </button>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-green-50 rounded-lg px-4 py-3 my-6">
              <h4 className="font-semibold text-green-800 mb-3">
                Payment Summary
              </h4>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Investment Amount:</span>
                <span className="font-semibold">
                  ₦ {amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Platform Fee:</span>
                <span className="font-semibold">
                  ₦ {platformFee.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold border-t pt-2 mt-2">
                <span>Total Payable:</span>
                <span>₦ {totalPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-3 justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center gap-3"
              >
                <span>
                  <GoArrowLeft />
                </span>{" "}
                Back
              </button>
              <button
                onClick={handleComplete}
                className=" bg-purple-600 text-white px-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex justify-between items-center gap-2"
              >
                Complete Payment{" "}
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoMdCheckmarkCircleOutline className="text-4xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Investment Successful!
              </h3>
              <p className="text-gray-600 font-semibold">
                You have successfully invested {amount.toLocaleString()} in
                Nuvia Homes {project.title}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Investment ID:</span>
                <span className="font-semibold">INV-7490358</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Project:</span>
                <span className="font-semibold">{project.title}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-semibold">
                  ₦ {amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Expected ROI:</span>
                <span className="font-semibold text-green-600">16% P.A</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">12 Months</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-primaryColorStrong">
                A confirmation email has been sent to{" "}
                <span className="font-semibold">osimfaith@gmail.com</span> along
                with your investment details and next steps, please check to
                keep up with your investment earnings
              </p>
            </div>

            <button
              onClick={handleClose}
              className=" bg-white border border-gray-300 py-2.5 px-4 rounded-lg font-base hover:bg-gray-50 transition-colors"
            >
              ✕ Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
