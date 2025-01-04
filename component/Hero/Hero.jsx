import React from "react";
import Leaf from "../../assets/leaf.png";
import { IoCartOutline } from "react-icons/io5";
import foodPng from "../../assets/food.png";
import spoon from "../../assets/spoon.png";
import banana from "../../assets/banana2.png";
import { motion } from "framer-motion";

const SlideUp = (delay) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* Text context here */}
          <div className="space-y-3">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              Yummy
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-0 right-0 md:right-[100px]"
              />
            </motion.h1>
            <motion.h1
              variants={SlideUp(1)}
              initial="initial"
              whileInView="animate"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              BREAKFAST
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="initial"
              whileInView="animate"
              className="text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
            <motion.button
              variants={SlideUp(2)}
              initial="initial"
              whileInView="animate"
              className="btn-primary  inline-block !mt-10"
            >
              <IoCartOutline className="inline mr-2" />
              Order Now
            </motion.button>
          </div>
          {/* Image here*/}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={foodPng}
              alt=""
              className="w-[450px] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={spoon}
              alt=""
              className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={banana}
              alt=""
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px]img-shadow"
            />
          </div>
        </div>
      </div>
      {/* background yellow  */}
      <div className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[-70%]">

      </div>
    </main>
  );
};

export default Hero;
