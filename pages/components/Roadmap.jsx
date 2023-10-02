import React from "react";
import { motion } from "framer-motion";

function Roadmap() {
  return (
    <div className="h-screen max-[975px]:h-full" id="Roadmap">
      <motion.div
        initial={{ opacity: 0, y: "-30%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center pt-10"
      >
        <p className="gradient-text font-bold">Roadmap</p>
      </motion.div>

      <div className="flex justify-evenly items-center mt-24 max-[1050px]:justify-around max-[975px]:flex-col">
        <motion.div
          initial={{ opacity: 0, x: "-30%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="border-2 rounded-lg px-8 py-10 border-[#ffffff71] hover:border-white ease-in-out duration-300 shadow-md shadow-[rgb(123,204,255)] max-[1200px]:px-3 max-[975px]:px-8 max-[975px]:px-[75px] max-[415px]:px-[40px] max-[975px]:mb-20"
        >
          <p className="text-2xl font-bold">Phase 1</p>
          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Create a clean website</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263f5f] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Setup Social Media</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Launch</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Start Marketing</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-30%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="border-2 rounded-lg px-8 py-10 border-[#ffffff71] hover:border-white ease-in-out duration-300 shadow-md shadow-[rgb(123,204,255)] max-[1200px]:px-3 max-[975px]:px-8 max-[975px]:px-[51px] max-[975px]:mb-20 max-[415px]:px-[16px]"
        >
          <p className="text-2xl font-bold">Phase 2</p>
          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Reach 1000+ Holders</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Apply to CMC and CoinGecko</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Billboard Add!</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">$500k Market Cap</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-30%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="border-2 rounded-lg px-8 py-10 border-[#ffffff71] hover:border-white ease-in-out duration-300 shadow-md shadow-[rgb(123,204,255)] max-[1200px]:px-3 max-[975px]:px-8 max-[975px]:px-8 max-[415px]:px-2"
        >
          <p className="text-2xl font-bold">Phase 3</p>
          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Buy every dip and $Pekasus Burn</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Secret Airdrop (Maybe NFTs)</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">$1M Market Cap</p>
          </div>

          <div className="flex justify-start items-center mt-10">
            <div className="border-[3px] border-[#263F5F] rounded-full p-2">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p className="text-lg ml-2">Binance Listing</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Roadmap;
