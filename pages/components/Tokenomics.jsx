import React from "react";
import { motion } from "framer-motion";

function Tokenomics() {
  return (
    <div className="h-full" id="Tokenomics">
      <motion.div
        initial={{ opacity: 0, y: "-30%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center mt-32"
      >
        <p className="gradient-text font-bold">Utility</p>
      </motion.div>

      <div className="flex justify-evenly items-center mt-10 max-[1169px]:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="max-[1169px]:absolute max-[1169px]:-z-1"
        >
          <img
            className="w-[550px] rounded-xl max-[1300px]:w-[500px] max-[1169px]:opacity-30"
            src="/pegasus token.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "30%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="w-[40%] max-[1169px]:w-5/6"
        >
          <p className="text-2xl underline mb-12 mt-14">Cross-Chain Compatibility</p>

          <div className="flex justify-start items-center mb-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2 mb-[95px] mr-1">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">
              Explore AI-powered solutions for achieving cross-chain
              compatibility. This could involve interoperability with other
              blockchain networks, allowing Pegasus to tap into a broader
              ecosystem and enhance liquidity.
            </p>
          </div>

          <p className="text-2xl underline mb-12">AI-Enhanced Token Staking</p>

          <div className="flex justify-start items-center mb-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2 mb-[95px] mr-1">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">
              Introduce an AI-driven system for token staking. The algorithm
              could optimize staking rewards based on factors like market
              conditions, user behavior, and network participation, providing
              users with a more rewarding staking experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tokenomics;
