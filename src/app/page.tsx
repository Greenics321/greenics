import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { HomeInsightsPreview } from "@/components/home/HomeInsightsPreview";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <HomeInsightsPreview />
      <CTASection />
    </>
  );
}
