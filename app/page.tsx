'use-client'
import { Card } from "./Components/Card";
import { Hero } from "./Components/Hero";
import { Header } from "./Components/Navbar";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <main className="flex items-center justify-center">
        <Hero/>
        <Card/>
      </main>
    </div>
  );
}
