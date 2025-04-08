import React from "react";
import ScrollFloat from "../scrollfloat/ScrollFloat";

function Work() {
  return (
    <section className="w-full h-[200vh] px-10 bg-black creative__section">
      <div className="w-full h-full flex justify-end items-center text-left ">
        <div className="w-1/2 ">sdf</div>
        <div className="w-1/2 ">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            CREATIVE
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            DESIGNER
          </ScrollFloat>

          <strong className="text-white">Bringing Your Brand</strong>
          <p className="text-white">
            Vision to Life At NEXTGEN STUDIO, our creative designers are more
            than just artists – they are storytellers who use design to
            communicate your brand's identity and connect with your audience.
            Whether it's creating a memorable logo, building a visually stunning
            website, or developing a cohesive brand identity, we deliver designs
            that resonate and drive results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work;
