import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO__ANIMATION = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".card");

    items.forEach((item, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top top+=20%",
          endTrigger: ".parallax_section",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
          markers: true,
        },
      });
      tl.to(item, {
        scale: 0.85 + 0.02 * index,
      });
    });

    gsap.to(".work_headline", {
      scrollTrigger: {
        trigger: ".work_headline",
        start: "top top",
        endTrigger: ".parallax_section",
        pin: true,
        scrub: true,
        markers: true,
      },
    });
  }, []);
};

export default PORTFOLIO__ANIMATION;
