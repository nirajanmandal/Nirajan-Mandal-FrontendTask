import Features from "@/components/features/features";
import SocialMedia from "@/components/features/SocialMedia";
import Hero from "@/components/Hero";
import WhySaasly from "@/components/why-saasly/why-saasly";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <WhySaasly />
      <Features />
      <SocialMedia />
    </main>
  );
}
