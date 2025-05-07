// src/app/about/page.tsx
import ProfessionalBioSection from "@/components/about/ProfessionalBioSection";
import SkillsSection from "@/components/about/SkillsSection";
import TimelineSection from "@/components/about/TimelineSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About JGJ - Web Developer & Designer",
  description: "Learn more about JGJ's professional journey, skills in web development and design, and career highlights. Discover the expertise behind the portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <ProfessionalBioSection />
      <SkillsSection />
      <TimelineSection />
      {/* You can add a Call to Action section here if desired, e.g., a link to the contact page */}
    </>
  );
}