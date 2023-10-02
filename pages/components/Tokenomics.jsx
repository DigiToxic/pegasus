import React from "react";
import { motion } from "framer-motion";

function Tokenomics() {
  return (
    <div className="h-screen max-[500px]:h-full" id="Tokenomics">
      <motion.div
        initial={{ opacity: 0, y: "-30%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center mt-32"
      >
        <p className="gradient-text font-bold">Tokenomics</p>
      </motion.div>

      <div className="flex justify-evenly items-center mt-10 max-[1169px]:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
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
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-[40%] max-[1169px]:w-5/6"
        >
          <p className="text-lg mb-12">
            $Pegasus will have a 3/3 tax aimed at fostering continuous
            development and effective marketing to ensure the project&apos;s
            growth and success.
            <br />
            <br />
            2% of the buy and sell tax is allocated towards development
            initiatives, funding ongoing improvements, upgrades, and development
            <br />
            <br />
            1% of the buy and sell tax is allocated towards marketing efforts
            and strategic activities
          </p>
          <div className="flex justify-start items-center">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Supply : 1 billion</p>
          </div>

          <div className="flex justify-start items-center mt-5">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Decimals : 18</p>
          </div>

          <div className="flex justify-start items-center mt-5">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Liquidity locked at 20k MC</p>
          </div>

          <div className="flex justify-start items-center mt-5">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Taxes drop at 100k MC</p>
          </div>

          <div className="flex justify-start items-center mt-5">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">100% LP (Fair launch)</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tokenomics;
