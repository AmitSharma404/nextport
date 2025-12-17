'use-client'
import { Card } from "./Components/Card";
import { Hero } from "./Components/Hero";
export default function Home() {
  return (
    <div className="">
      <main className="flex items-center justify-center">
        <Hero/>
        <Card/>
      </main>
    </div>
  );
}
