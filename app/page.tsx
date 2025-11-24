'use-client'
import { Card } from "./Components/Card";
import { Hero } from "./Components/Hero";
import { Header } from "./Components/Navbar";
export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex  max-w-[600px] justify-center">
        <Hero/>
        <Card/>
      </main>
    </>
  );
}
