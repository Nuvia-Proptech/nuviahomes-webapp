import React from "react";
import LetsTalk from "@/components/contact/LetsTalk";
import FAQS from "@/components/contact/FAQS";
import AltHero from "@/components/shared/AltHero";

export default function ContactPage() {
  return (
<section>
  <AltHero pageName="Contact us" />
  <div className="container px-4 mx-auto">
    <LetsTalk />
    <FAQS />
  </div>
</section>
  )}