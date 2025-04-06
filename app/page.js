"use client";
import Animation from "@/components/animation/animation";
import Header from "@/components/header/header";
import Work from "@/components/landing/work";
import Globe from "@/components/models/globe";

import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Lenis from "lenis";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);
  return (
    <>
      <section className="w-full h-screen relative bg-black">
        <Header />
        <div className="fixed w-full h-full">
          <Canvas className="w-full fixedh-screen">
            <Globe />
          </Canvas>
        </div>

        <div className="w-full absolute bottom-0 text-center -mb-20">
          <h1 className="headline text-[20vw] font-bold text-transparent">
            NEXTGEN
          </h1>
        </div>
      </section>
      <Work />
    </>
  );
}
