import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  gsap.to(".creative__section", {
    ScrollTrigger: {
      trigger: ".creative__section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      marker: true,
    },
  });
};
export default Animation;
