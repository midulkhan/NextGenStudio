"use client";
import { Stars, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Globe() {
  const neutronTexture = useTexture("./assets/2.jpg");
  const starRef = useRef();
  const circleRef = useRef();
  const ballRef = useRef();

  //   useFrame((state, delta) => {
  //     if (starRef.current && ballRef.current) {
  //       starRef.current.rotation.y += delta * 0.02;

  //       ballRef.current.rotation.y -= delta * 0.2;
  //     }
  //   }, []);

  /*GSAP animation start*/
  useEffect(() => {
    gsap.to(".creative__section", {
      scrollTrigger: {
        trigger: ".creative__section",
        start: "top center",
        end: "top+=150vh",
        scrub: 1,
        duration: 2,
        ease: "power2.inOut",
        marker: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scaleValue = 1 + progress;
          if (circleRef.current) {
            circleRef.current.position.x = -5 * progress;
            circleRef.current.scale.set(scaleValue, scaleValue, 0);
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  /*GSAP animation end*/

  return (
    <group>
      <ambientLight />

      {/* <Stars count={500} ref={starRef} fade radius={20} /> */}

      <group ref={circleRef} scale={[1, 1, 0]}>
        <mesh ref={ballRef}>
          <sphereGeometry args={[1, 60, 60]} />
          <meshStandardMaterial
            emissive="royalblue"
            emissiveIntensity={6}
            map={neutronTexture}
          />
        </mesh>
      </group>

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={5} />
      </EffectComposer>
    </group>
  );
}

export default Globe;
