import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { StorySection } from "@/components/story-section"
import { PressKitSection } from "@/components/press-kit-section"
import { MediaSection } from "@/components/media-section"
import { AmazonLiveSection } from "@/components/amazon-live-section"
import { NonprofitSection } from "@/components/nonprofit-section"
import { BrandPartnershipsSection } from "@/components/brand-partnerships-section"
import { SocialLinksSection } from "@/components/social-links-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { CrossBrandBanner } from "@/components/cross-brand-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <StorySection />
        <PressKitSection />
        <MediaSection />
        <AmazonLiveSection />
        <NonprofitSection />
        <CrossBrandBanner />
        <BrandPartnershipsSection />
        <SocialLinksSection />
      </main>
      <Footer />
    </div>
  )
}
