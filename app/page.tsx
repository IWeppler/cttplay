import AdBanner from "@/shared/components/adBanner";
import Hero from "@/features/landing/hero";
import SocialPoll from "@/features/landing/MultimediaSection";
import FiberPlans from "@/features/landing/ServicesPlans";
import BirthdayMarquee from "@/features/landing/BirthdayMarquee";
import News from "@/features/landing/News";
import ObituariesSection from "@/features/landing/ObituariesSection";
import PharmaciesSection from "@/features/landing/PharmaciesSection";

export default function Home() {
  return (
    <div>
      <BirthdayMarquee
        users={[
          "María González",
          "Ignacio Rodriguez",
          "Juan Pérez",
          "Lucía C.",
        ]}
      />
      <Hero />
      <AdBanner format="horizontal" image="/banner1.jpg" />
      <News />
      <SocialPoll />
      <FiberPlans />
      <AdBanner format="horizontal" image="/banner4.gif" unoptimized />
      <PharmaciesSection />
      <ObituariesSection />
    </div>
  );
}
