"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, ChevronRight, ChevronLeft, Upload, CheckCircle2 } from "lucide-react";

type KYCStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

import { useSubmitKYC } from "@/lib/api/requests/kyc/useSubmitKYC/useSubmitKYC";
import { useAuthStore } from "@/store/useAuthStore";

export const KYCForm = () => {
  const { user } = useAuthStore();
  const currentRole = user?.role?.toLowerCase() || "user";
  
  const [step, setStep] = useState<KYCStep>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use the hook
  const { submitKYC, isPending } = useSubmitKYC({
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const watchRole = watch("applyingAs");

  // Auto-fill target role if the user is already an Agent or Owner
  React.useEffect(() => {
    if (currentRole === "owner") {
      setValue("applyingAs", "agent");
    } else if (currentRole === "agent") {
      setValue("applyingAs", "owner");
    }
  }, [currentRole, setValue]);

  const getTargetRoleName = () => {
    if (watchRole === "agent") return "Agent";
    if (watchRole === "owner") return "Owner";
    return "Agent or Owner";
  };

  const nextStep = () => setStep((prev) => (prev + 1) as KYCStep);
  const prevStep = () => setStep((prev) => (prev - 1) as KYCStep);

  const onSubmit = (data: any) => {
    console.log("Submitting KYC Data:", data);
    submitKYC(data);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto mt-10 text-center p-12 rounded-2xl border-none shadow-xl bg-white font-publicSans">
        <div className="w-20 h-20 bg-successColor/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-successColor" />
        </div>
        <CardTitle className="text-3xl mb-4 font-urbanist font-bold text-textColorDark">KYC Submitted Successfully!</CardTitle>
        <CardDescription className="text-lg text-textColorFaded mb-8">
          Your application is currently being reviewed by our admin. You will be notified once it is approved and your account upgraded.
        </CardDescription>
        <Button 
          className="btn-gradient hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300" 
          onClick={() => window.location.href = "/user"}
        >
          Return to Dashboard
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-2 sm:px-4 px-1 font-publicSans">
      <div className="mb-10 left-center">
        <h1 className="text-4xl font-bold mb-1 font-urbanist text-textColorDark">
          {currentRole === "user" ? "Become an Agent or Owner" : `Become an ${getTargetRoleName()}`}
        </h1>
        <p className="text-textColorFaded text-lg">Complete your KYC verification to access advanced features.</p>
        
        {/* Progress Bar Container */}
        <div className="mt-10 max-w-7xl mx-auto px-2">
          {/* Desktop Labels */}
          <div className="hidden md:flex justify-between mb-4 text-[10px] font-bold uppercase tracking-wider text-textColorFaded">
            <span className={step >= 1 ? "text-textColorDark" : ""}>Personal</span>
            <span className={step >= 2 ? "text-textColorDark" : ""}>ID Docs</span>
            <span className={step >= 3 ? "text-textColorDark" : ""}>Contact</span>
            <span className={step >= 4 ? "text-textColorDark" : ""}>Address</span>
            <span className={step >= 5 ? "text-textColorDark" : ""}>Biometric</span>
            <span className={step >= 6 ? "text-textColorDark" : ""}>Business</span>
            <span className={step >= 7 ? "text-textColorDark" : ""}>Financial</span>
          </div>
          
          {/* Mobile Label */}
          <div className="md:hidden flex flex-col items-center mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brandBlue">
              Step {step} of 7
            </span>
            <span className="text-sm font-bold text-textColorDark mt-1">
              {[
                "Personal Information",
                "Identification Documents",
                "Contact Information",
                "Proof of Address",
                "Biometric Data",
                "Business Information",
                "Financial Information"
              ][step - 1]}
            </span>
          </div>

          <div className="h-2.5 w-full bg-secondaryColor rounded-full overflow-hidden border border-neutralColor-700/30">
            <div 
              className="h-full btn-gradient transition-all duration-500 ease-out shadow-[0_0_15px_rgba(53,175,114,0.3)]" 
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden ">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">1. Personal Information</CardTitle>
              <CardDescription className="text-textColorFaded">Enter your basic legal details as they appear on your identity documents.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-2 px-2 sm:px-6">
              {/* Role Selection */}
              <div className="bg-brandBlue/5 p-6 rounded-xl border border-brandBlue/10 mb-6 px-2 sm:px-6">
                <Label className="text-textColorDark text-base font-bold mb-4 block">
                  {currentRole === "user" ? "I am applying to be a:" : "Upgrading Account to:"}
                </Label>
                
                {currentRole === "user" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${watchRole === 'agent' ? 'border-brandBlue bg-white shadow-md' : 'border-neutralColor-200 hover:border-brandBlue/50 bg-transparent'}`}>
                      <input 
                        type="radio" 
                        value="agent" 
                        className="h-5 w-5 text-brandBlue border-neutralColor-700 focus:ring-brandBlue mr-4 accent-brandBlue" 
                        {...register("applyingAs", { required: true })} 
                      />
                      <div>
                        <span className="block font-bold text-textColorDark">Real Estate Agent</span>
                        <span className="text-xs text-textColorFaded">I want to list and sell properties.</span>
                      </div>
                    </label>
                    <label className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${watchRole === 'owner' ? 'border-brandBlue bg-white shadow-md' : 'border-neutralColor-200 hover:border-brandBlue/50 bg-transparent'}`}>
                      <input 
                        type="radio" 
                        value="owner" 
                        className="h-5 w-5 text-brandBlue border-neutralColor-700 focus:ring-brandBlue mr-4 accent-brandBlue" 
                        {...register("applyingAs", { required: true })} 
                      />
                      <div>
                        <span className="block font-bold text-textColorDark">Property Owner</span>
                        <span className="text-xs text-textColorFaded">I want to list my own properties.</span>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center p-5 bg-white rounded-xl border-2 border-brandBlue shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brandBlue/10 flex items-center justify-center mr-4">
                      <CheckCircle2 className="h-6 w-6 text-brandBlue" />
                    </div>
                    <div>
                      <span className="block font-bold text-textColorDark text-lg">
                        {watchRole === "agent" ? "Real Estate Agent" : "Property Owner"}
                      </span>
                      <span className="text-sm text-textColorFaded">
                        Your account will be upgraded to {watchRole === "agent" ? "Agent" : "Owner"} status upon approval.
                      </span>
                    </div>
                    {/* Hidden input to ensure it's included in form data */}
                    <input type="hidden" {...register("applyingAs")} />
                  </div>
                )}
                {errors.applyingAs && currentRole === "user" && (
                  <p className="text-red-500 text-xs mt-2">Please select a role.</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-textColor text-sm font-semibold">Full Legal Name</Label>
                  <Input id="fullName" className="rounded-xl border-neutralColor-700 focus:ring-brandBlue focus:border-brandBlue p-3 h-12" {...register("fullName", { required: true })} placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-textColor text-sm font-semibold">Date of Birth</Label>
                  <Input id="dob" type="date" className="rounded-xl border-neutralColor-700 focus:ring-brandBlue focus:border-brandBlue p-3 h-12" {...register("dob", { required: true })} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 w-full">
                  <Label className="text-textColor text-sm font-semibold">Gender</Label>
                  <Select onValueChange={(val: string) => register("gender").onChange({ target: { value: val, name: "gender" } })}>
                    <SelectTrigger className="w-full rounded-xl border-neutralColor-700 focus:ring-brandBlue h-12.5!">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-neutralColor-700">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality" className="text-textColor text-sm font-semibold">Nationality</Label>
                  <Input id="nationality" className="rounded-xl border-neutralColor-700 focus:ring-brandBlue p-3 h-12" {...register("nationality", { required: true })} placeholder="e.g. Nigerian" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="residentialAddress" className="text-textColor text-sm font-semibold">Residential Address</Label>
                <Input id="residentialAddress" className="rounded-xl border-neutralColor-700 focus:ring-brandBlue p-3 h-12" {...register("residentialAddress", { required: true })} placeholder="123 Main St, City, Country" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end pt-4 pb-8 px-2 sm:px-6">
              <Button type="button" onClick={nextStep} className="btn-gradient hover:opacity-90 text-white px-8 py-6 rounded-xl font-bold transition-all shadow-md">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: Identification Documents */}
        {step === 2 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">2. Identification Documents</CardTitle>
              <CardDescription className="text-textColorFaded">Upload a high-quality scan or photo of your government-issued ID.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-2 px-2 sm:px-6">
              {/* ... existing content ... */}
              <div className="space-y-2">
                <Label className="text-textColor text-sm font-semibold">ID Type</Label>
                <Select onValueChange={(val: string) => register("idType").onChange({ target: { value: val, name: "idType" } })}>
                  <SelectTrigger className="w-full rounded-xl border-neutralColor-700 h-12.5! px-3">
                    <SelectValue placeholder="Select ID Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="national_id">National ID</SelectItem>
                    <SelectItem value="passport">International Passport</SelectItem>
                    <SelectItem value="drivers_license">Driver's License</SelectItem>
                    <SelectItem value="voters_card">Voter's Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber" className="text-textColor text-sm font-semibold">ID Number</Label>
                <Input id="idNumber" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("idNumber", { required: true })} placeholder="Enter ID number" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="idIssueDate" className="text-textColor text-sm font-semibold">Issue Date</Label>
                  <Input id="idIssueDate" type="date" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("idIssueDate", { required: true })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idExpiryDate" className="text-textColor text-sm font-semibold">Expiry Date</Label>
                  <Input id="idExpiryDate" type="date" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("idExpiryDate", { required: true })} />
                </div>
              </div>
              <div className="space-y-4">
                <Label className="text-textColor text-sm font-semibold">Upload ID Front</Label>
                <label className="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center bg-gray-50 border-neutralColor-700/50 hover:bg-brandBlue/5 hover:border-brandBlue transition-all cursor-pointer relative overflow-hidden group">
                  {watch("idFront")?.[0] ? (
                    <>
                      <img 
                        src={URL.createObjectURL(watch("idFront")[0])} 
                        alt="ID Preview" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                      />
                      <div className="z-10 bg-white/90 p-2 rounded-lg shadow-sm">
                        <p className="text-xs font-bold text-brandBlue flex items-center">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> {watch("idFront")[0].name}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-brandBlue/10 rounded-full flex items-center justify-center mb-4">
                        <Upload className="h-6 w-6 text-brandBlue" />
                      </div>
                      <p className="text-sm text-textColor flex flex-col items-center">
                        <span className="font-bold text-brandBlue mb-1">Click to upload</span>
                        <span className="text-textColorFaded">or drag and drop</span>
                      </p>
                      <p className="text-[10px] text-textColorFaded mt-2">JPG, PNG or PDF (max. 10MB)</p>
                    </>
                  )}
                  <input type="file" className="hidden" accept="image/*,application/pdf" {...register("idFront", { required: true })} />
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 pb-8 px-2 sm:px-6">
              <Button type="button" variant="outline" onClick={prevStep} className="border-neutralColor-700 rounded-xl px-8 h-12 font-semibold">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button type="button" onClick={nextStep} className="btn-gradient hover:opacity-90 text-white px-8 h-12 rounded-xl font-bold transition-all shadow-md">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">3. Contact Information</CardTitle>
              <CardDescription className="text-textColorFaded">Provide accurate contact details for official communication.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-2 px-2 sm:px-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-textColor text-sm font-semibold">Phone Number</Label>
                <Input id="phone" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("phone", { required: true })} placeholder="+234 ..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-textColor text-sm font-semibold">Email Address</Label>
                <Input id="email" type="email" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("email", { required: true })} placeholder="email@example.com" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 pb-8 px-2 sm:px-6">
              <Button type="button" variant="outline" onClick={prevStep} className="border-neutralColor-700 rounded-xl px-8 h-12 font-semibold">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button type="button" onClick={nextStep} className="btn-gradient hover:opacity-90 text-white px-8 h-12 rounded-xl font-bold transition-all shadow-md">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 4: Proof of Address */}
        {step === 4 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">4. Proof of Address</CardTitle>
              <CardDescription className="text-textColorFaded">Upload a document verifying your residential address.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-2 px-2 sm:px-6">
              <div className="space-y-2">
                <Label className="text-textColor text-sm font-semibold">Document Type</Label>
                <Select onValueChange={(val: string) => register("addressProofType").onChange({ target: { value: val, name: "addressProofType" } })}>
                  <SelectTrigger className="w-full rounded-xl border-neutralColor-700 h-12.5! px-3">
                    <SelectValue placeholder="Select Document Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="utility_bill">Utility Bill</SelectItem>
                    <SelectItem value="bank_statement">Bank Statement</SelectItem>
                    <SelectItem value="tenancy_agreement">Tenancy Agreement</SelectItem>
                    <SelectItem value="government_issued">Government-issued Address Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-textColor text-sm font-semibold">Upload Document</Label>
                <label className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50 border-neutralColor-700/50 hover:bg-brandBlue/5 hover:border-brandBlue transition-all cursor-pointer relative overflow-hidden group">
                   {watch("addressProof")?.[0] ? (
                    <div className="z-10 flex flex-col items-center">
                       {watch("addressProof")[0].type.startsWith('image/') ? (
                          <img 
                            src={URL.createObjectURL(watch("addressProof")[0])} 
                            alt="Address Proof Preview" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                          />
                       ) : (
                          <div className="absolute inset-0 bg-brandBlue/5 w-full h-full" />
                       )}
                      <div className="z-20 bg-white/90 px-4 py-2 rounded-lg shadow-sm border border-neutralColor-200">
                        <p className="text-sm font-bold text-textColorDark flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-successColor" /> {watch("addressProof")[0].name}
                        </p>
                      </div>
                      <p className="z-20 text-xs text-brandBlue font-bold mt-2">Click to change</p>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-brandBlue/10 rounded-full flex items-center justify-center mb-4">
                        <Upload className="h-6 w-6 text-brandBlue" />
                      </div>
                      <p className="text-sm text-textColor flex flex-col items-center">
                        <span className="font-bold text-brandBlue mb-1">Click to upload</span>
                        <span className="text-textColorFaded">or drag and drop</span>
                      </p>
                    </>
                  )}
                  <input type="file" className="hidden" accept="image/*,application/pdf" {...register("addressProof", { required: true })} />
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 pb-8 px-8 px-2 sm:px-6">
              <Button type="button" variant="outline" onClick={prevStep} className="border-neutralColor-700 rounded-xl px-8 h-12 font-semibold">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button type="button" onClick={nextStep} className="btn-gradient hover:opacity-90 text-white px-8 h-12 rounded-xl font-bold transition-all shadow-md">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 5: Biometric / Verification Data */}
        {step === 5 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">5. Biometric / Verification Data</CardTitle>
              <CardDescription className="text-textColorFaded">Facial verification for security and identity protection.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-2 px-2 sm:px-6">
              <div className="space-y-4">
                <Label className="text-textColor text-sm font-semibold">Selfie or Live Photo</Label>
                <div className="flex flex-col items-center justify-center space-y-6 py-6">
                  <label className="w-56 h-56 rounded-full bg-secondaryColor border-2 border-dashed border-brandBlue/30 flex items-center justify-center overflow-hidden relative group cursor-pointer hover:border-brandBlue hover:shadow-lg transition-all">
                     {watch("selfie")?.[0] ? (
                        <img 
                          src={URL.createObjectURL(watch("selfie")[0])} 
                          alt="Selfie Preview" 
                          className="w-full h-full object-cover"
                        />
                     ) : (
                        <>
                          <div className="absolute inset-0 bg-brandBlue/0 group-hover:bg-brandBlue/5 transition-colors duration-300" />
                          <Upload className="h-14 w-14 text-brandBlue/40 group-hover:text-brandBlue transition-colors duration-300" />
                          <div className="absolute bottom-10 text-xs font-bold text-textColorFaded group-hover:text-brandBlue">Tap to upload</div>
                        </>
                     )}
                     <input type="file" className="hidden" accept="image/*" {...register("selfie", { required: true })} />
                  </label>
                  
                  {watch("selfie")?.[0] ? (
                    <p className="text-sm font-semibold text-successColor flex items-center">
                       <CheckCircle2 className="w-4 h-4 mr-2" /> Photo Selected
                    </p>
                  ) : (
                    <p className="text-xs text-textColorFaded text-center max-w-xs leading-relaxed">
                      Make sure your face is clearly visible, well-lit, and fits within the circular frame. No hats or sunglasses.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 pb-8 px-8 px-2 sm:px-6">
              <Button type="button" variant="outline" onClick={prevStep} className="border-neutralColor-700 rounded-xl px-8 h-12 font-semibold">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button type="button" onClick={nextStep} className="btn-gradient hover:opacity-90 text-white px-8 h-12 rounded-xl font-bold transition-all shadow-md">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 6: Business Information */}
        {step === 6 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">6. Business Information</CardTitle>
              <CardDescription className="text-textColorFaded">Required if you are applying as a registered business entity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-8 px-2 sm:px-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-textColor text-sm font-semibold">Business Name (Optional)</Label>
                <Input id="businessName" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("businessName")} placeholder="Nuvia Proptech Ltd" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber" className="text-textColor text-sm font-semibold">
                    Registration Number {watchRole === "agent" && <span className="text-red-500">*</span>}
                  </Label>
                  <Input 
                    id="registrationNumber" 
                    className="rounded-xl border-neutralColor-700 p-3 h-12" 
                    {...register("registrationNumber", { required: watchRole === "agent" })} 
                    placeholder="RC-123456" 
                  />
                  {errors.registrationNumber && <p className="text-red-500 text-xs mt-1">Registration number is required for agents.</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessAddress" className="text-textColor text-sm font-semibold">
                    Business Address {watchRole === "agent" && <span className="text-red-500">*</span>}
                  </Label>
                  <Input 
                    id="businessAddress" 
                    className="rounded-xl border-neutralColor-700 p-3 h-12" 
                    {...register("businessAddress", { required: watchRole === "agent" })} 
                    placeholder="456 Business Way" 
                  />
                  {errors.businessAddress && <p className="text-red-500 text-xs mt-1">Business address is required for agents.</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-textColor text-sm font-semibold">Certificate of Incorporation</Label>
                <label className="border-2 border-dashed rounded-xl p-6 flex items-center justify-center bg-gray-50 border-neutralColor-700/50 hover:bg-brandBlue/5 hover:border-brandBlue transition-all cursor-pointer relative">
                   {watch("incorporationCert")?.[0] ? (
                      <div className="flex items-center text-brandBlue font-semibold">
                         <CheckCircle2 className="h-5 w-5 mr-2 text-successColor" />
                         <span className="truncate max-w-[200px]">{watch("incorporationCert")[0].name}</span>
                         <span className="ml-2 text-xs text-textColorFaded">(Click to change)</span>
                      </div>
                   ) : (
                      <div className="flex items-center">
                        <Upload className="h-6 w-6 text-brandBlue mr-3" />
                        <span className="text-sm text-textColor font-medium">Upload Certificate</span>
                      </div>
                   )}
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="application/pdf,image/*" 
                    {...register("incorporationCert", { required: watchRole === "agent" })} 
                  />
                </label>
                {errors.incorporationCert && <p className="text-red-500 text-xs mt-1">Certificate of incorporation is required for agents.</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="directorDetails" className="text-textColor text-sm font-semibold">Director/Owner Details</Label>
                <Input id="directorDetails" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("directorDetails")} placeholder="Full names of all directors" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 pb-8 px-8 px-2 sm:px-6">
              <Button type="button" variant="outline" onClick={prevStep} className="border-neutralColor-700 rounded-xl px-8 h-12 font-semibold">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button type="button" onClick={nextStep} className="btn-gradient hover:opacity-90 text-white px-8 h-12 rounded-xl font-bold transition-all shadow-md">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 7: Financial Information */}
        {step === 7 && (
          <Card className="rounded-2xl border-none shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100 px-2 sm:px-6">
              <CardTitle className="text-2xl font-urbanist font-bold text-textColorDark">7. Financial Information</CardTitle>
              <CardDescription className="text-textColorFaded">Needed for transaction verification and anti-money laundering compliance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 sm:pt-8 px-2 sm:px-6">
              <div className="space-y-2">
                <Label htmlFor="bankName" className="text-textColor text-sm font-semibold">Bank Name</Label>
                <Input id="bankName" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("bankName", { required: true })} placeholder="Access Bank" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="accountNumber" className="text-textColor text-sm font-semibold">Account Number</Label>
                  <Input id="accountNumber" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("accountNumber", { required: true })} placeholder="1234567890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountName" className="text-textColor text-sm font-semibold">Account Name</Label>
                  <Input id="accountName" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("accountName", { required: true })} placeholder="John Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sourceOfFunds" className="text-textColor text-sm font-semibold">Source of Funds / Income</Label>
                <Input id="sourceOfFunds" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("sourceOfFunds", { required: true })} placeholder="e.g. Salary, Business Profit" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionPurpose" className="text-textColor text-sm font-semibold">Transaction Purpose</Label>
                <Input id="transactionPurpose" className="rounded-xl border-neutralColor-700 p-3 h-12" {...register("transactionPurpose", { required: true })} placeholder="e.g. Real Estate Investment" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 pb-8 px-8 px-2 sm:px-6">
              <Button type="button" variant="outline" onClick={prevStep} className="border-neutralColor-700 rounded-xl px-8 h-12 font-semibold">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button type="submit" disabled={isPending} className="btn-gradient text-white hover:opacity-90 px-10 h-12 rounded-xl font-bold transition-all shadow-md">
                {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Application"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </form>
    </div>
  );
};
