import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import shoe1 from "../public/assets/shoes/1.png";
import shoe2 from "../public/assets/shoes/2.png";
import shoe3 from "../public/assets/shoes/3.png";
import shoe4 from "../public/assets/shoes/4.png";
import shoe5 from "../public/assets/shoes/5.png";
import Image from "next/image";
const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
    >
      <Image
        alt="shoes"
        src={card.url}
        fill
        objectFit="cover"
        priority={false}
        quality={100}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <motion.p
          className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-background backdrop-blur-lg"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {card.title}
        </motion.p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = {
  url: any;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: shoe1,
    title: "Wade 10 Orange",
    id: 1,
  },
  {
    url: shoe2,
    title: "Wade 10 Ice Blood",
    id: 2,
  },
  {
    url: shoe3,
    title: "Wade 10 Avocado",
    id: 3,
  },
  {
    url: shoe4,
    title: "Wade 10 South Beach",
    id: 4,
  },
  {
    url: shoe5,
    title: "Wade 10 Buzzer Beater",
    id: 5,
  },
];
