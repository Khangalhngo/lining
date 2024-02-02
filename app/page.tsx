"use client";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import wadeblack from "../public/assets/wadelogoblack.png";
import wadewhite from "../public/assets/wadelogowhite.png";
import { useTheme } from "next-themes";
import { Banner } from "@/components/banner";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCaraosel";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import banner from "../public/assets/wade.jpg";
import banner2 from "../public/assets/banner2.png";
import { useRef } from "react";
import CountDown from "@/components/countDown";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function Home() {
  const { theme, setTheme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 grid-rows-5 gap-0 bg-background">
        <div className="max-h-screen">
          <div className="">
            <Banner src={banner} />

            <div className="flex justify-center mt-60">
              <div className="absolute inline-block max-w-lg text-center align-middle justify-center bg-background bg-opacity-50 p-4 rounded-lg min-w-[400px]">
                <div className="flex justify-center">
                  {
                    <Image
                      src={theme === "light" ? wadeblack : wadewhite}
                      width={100}
                      height={100}
                      alt="wadelogo"
                    />
                  }
                </div>
                <h1 className={`${title()} whitespace-nowrap`}>Make&nbsp;</h1>
                <h1 className={`${title({ color: "red" })} whitespace-nowrap`}>
                  YOUR&nbsp;
                </h1>
                <br />
                <h1 className={title()}>own way</h1>
                <h2 className={`${subtitle({ class: "mt-4" })}`}>
                  Official website of Lining brand
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2 text-center">
          <h1 className={`${title()} whitespace-nowrap`}>Black Friday Sale</h1>
          <CountDown />
        </div>

        <div className="row-start-3 max-h-screen text-center">
          <h1 className={`${title()} whitespace-nowrap`}>
            Way of Wade 10 Collection
          </h1>
          <HorizontalScrollCarousel />
        </div>
        <div className="row-start-4 max-h-screen">
          <Image src={banner2} width={400} height={400} alt="banner" />
        </div>
        <div className="row-start-5 max-h-screen">5</div>
      </div>
    </motion.div>
  );
}
