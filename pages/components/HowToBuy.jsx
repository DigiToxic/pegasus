import React from "react";
import { motion } from "framer-motion";

function HowToBuy() {
  return (
    <div className="h-screen relative" id="How to buy">
      <motion.div
        initial={{ opacity: 0, y: "-30%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center mt-5"
      >
        <p className="gradient-text font-bold">How to buy</p>
      </motion.div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-start mt-5">
          <motion.div
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                1.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                Create a Metamask or Trust Wallet using either a desktop
                computer or an iOS/Android mobile device. That will allow you to
                buy, sell, send and receive $Pegasus.
              </p>
              <img
                className="ml-2 w-20"
                src="/logo/MetaMask_Fox.svg.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                2.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                You can buy ETH directly on MetaMask/Trust wallet or transfer it
                to your Wallet from exchanges like Binance, KuCoin, etc.
              </p>
              <img
                className="ml-4 w-14"
                src="/icons/pegasus icon1.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                3.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                Access your wallet to Uniswap (Connect Your Wallet) and select
                $Pegasus Coin by the Contract Address.
              </p>
              <img
                className="ml-4 w-14"
                src="/icons/pegasus icon3.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                4.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                Press 'Select a token' and enter the token address and you can
                start swapping.
              </p>
              <img
                className="ml-4 w-20"
                src="/icons/pegasus icon2.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      <img
        className="absolute right-0 bottom-3 w-72 rounded-xl"
        src="/pegasus image3.png"
        alt=""
      />
    </div>
  );
}

export default HowToBuy;
