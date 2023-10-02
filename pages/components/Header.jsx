import React from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="px-20 pt-6 flex items-center justify-between"
    >
      <div>
        <img className="w-20" src="/pegasus.png" alt="" />
      </div>
      <div className="w-[475px] ml-28 rounded-full px-6 py-3 bg-[#6AE7FF] bg-opacity-20">
        <div className="flex justify-between items-center">
          <ScrollButton targetId="Tokenomics">
            <p className="font-bold cursor-pointer hover:scale-110 ease-in-out duration-300">
              Tokenomics
            </p>
          </ScrollButton>
          <ScrollButton targetId="Roadmap">
            <p className="font-bold cursor-pointer hover:scale-110 ease-in-out duration-300">
              Roadmap
            </p>
          </ScrollButton>
          <ScrollButton targetId="How to buy">
            <p className="font-bold cursor-pointer hover:scale-110 ease-in-out duration-300">
              How to buy
            </p>
          </ScrollButton>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="" rel="noreferrer" target="_blank">
          <img
            className="w-7 mr-4 hover:scale-110 ease-in-out duration-300"
            src="/logo/twAsset_21.svg"
            alt=""
          />
        </Link>
        <Link href="" rel="noreferrer" target="_blank">
          <img
            className="w-7 mr-10 hover:scale-110 ease-in-out duration-300"
            src="/logo/tgAsset_22.svg"
            alt=""
          />
        </Link>
        <div className="rounded-tr-[35px] rounded-lg border-2 px-6 py-1.5 pr-7 cursor-pointer shadow-md shadow-[rgb(123,204,255)] hover:bg-[#263F5F] hover:mt-2 hover:shadow-none">
          <p className="text-xl">Buy</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
