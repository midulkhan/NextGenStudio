import React from "react";
import ScrollFloat from "../scrollfloat/ScrollFloat";

function Work() {
  return (
    <section className="w-full h-screen bg-red px-10 bg-black creative__section">
      <div className="w-full h-full flex flex-col justify-center text-right ">
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
      </div>
    </section>
  );
}

export default Work;
