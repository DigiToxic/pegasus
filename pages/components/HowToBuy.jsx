import React from "react";
import { motion } from "framer-motion";

function HowToBuy() {
  return (
    <div className="h-full relative" id="How to buy">
      <motion.div
        initial={{ opacity: 0, y: "-30%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center"
      >
        <p className="gradient-text font-bold">How to buy</p>
      </motion.div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-start mt-5">
          <motion.div
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex justify-center items-center px-10 max-[700px]:mb-5 max-[500px]:mb-10"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                1.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                Create a phantom wallet using either a desktop
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
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex justify-center items-center px-10 max-[700px]:mb-5 max-[500px]:mb-10"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                2.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                You can buy SOL directly on the phantom wallet or transfer it
                to your wallet from exchanges like Binance, KuCoin, etc.
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
            transition={{ delay: 1, duration: 0.4 }}
            className="flex justify-center items-center px-10 max-[700px]:mb-5"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                3.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                Access your wallet to Raydium (Connect Your Wallet) and select
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
            transition={{ delay: 1.2, duration: 0.4 }}
            className="flex justify-center items-center px-10"
          >
            <div className="border-2 rounded-full mb-28 mr-5">
              <p className="py-1 px-2.5 shadow-md shadow-[rgb(123,204,255)] rounded-full">
                4.
              </p>
            </div>
            <div className="border-2 text-lg flex justify-center items-center p-2 rounded-lg shadow-md shadow-[rgb(123,204,255)]">
              <p>
                Press &apos;Select a token&apos; and enter the token address and you can
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
        className="absolute right-0 -bottom-20 w-72 rounded-xl max-[1425px]:-bottom-28 max-[1425px]:-z-10 max-[1425px]:opacity-30"
        src="/pegasus image3.png"
        alt=""
      />
    </div>
  );
}

export default HowToBuy;
