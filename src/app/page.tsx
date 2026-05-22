import Hero from "@/components/Hero";
import ProjectIndex from "@/components/ProjectIndex";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <Hero />
      <ProjectIndex />
      <Approach />
      <Contact />
    </main>
  );
}
