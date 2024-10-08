import Features from "@/components/features/features";
import Hero from "@/components/Hero";
import WhySaasly from "@/components/why-saasly/why-saasly";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <WhySaasly />
      <Features />
    </main>
  );
}
