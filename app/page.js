"use client";
import Animation from "@/components/animation/animation";
import Header from "@/components/header/header";
import Portfolio from "@/components/landing/portfolio";
import Work from "@/components/landing/work";
import Globe from "@/components/models/globe";
import { Canvas } from "@react-three/fiber";
import Lenis from "lenis";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     autoRaf: true,
  //   });
  // }, []);
  return (
    <>
      <section className="w-full h-screen relative bg-black">
        <Header />
        <div className="fixed w-full h-full">
<<<<<<< HEAD
          <Canvas className="w-full h-screen">
=======
          <Canvas className="w-full fixed h-screen -z-1">
>>>>>>> 1e5db25efea1def80e2bd68a56e4d8496833b7e3
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
      <Portfolio/>
    </>
  );
}
