import Header from "./components/Header";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import HowToBuy from "./components/HowToBuy";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <div className="border-b-2 pb-[155px] border-[#8ECBDF] -z-10 relative max-[1169px]:justify-center max-[1169px]:flex max-[1169px]:items-center">
        <div className="flex flex-col justify-start items-center w-[60%] ml-10 mt-[140px] max-[1200px]:w-1/2 max-[1169px]:w-5/6 max-[1169px]:z-50 max-[1169px]:ml-0 max-[1000px]:mt-[100px] max-[700px]:mt-[10px]">
          <motion.div
            initial={{ opacity: 0, y: "-30%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <p className="text-[60px] font-bold mb-10 text-center">
              Introducing <span className="gradient-text">$Pegasus</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-30%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <p className="text-center text-lg">
              The cryptocurrency phenomenon that&apos;s not just a coin,
              it&apos;s a movement! Built on a foundation of community, fun, and
              innovation, $Pegasus is poised to revolutionize the crypto space.
              With a passionate and growing community of like-minded
              individuals, we&apos;re breaking free from the conventional to
              create a new era of digital currency.
            </p>
          </motion.div>
          <div className="flex justify-evenly item-center w-full mt-14 max-[700px]:justify-between max-[615px]:flex-col max-[615px]:w-[75%]">
            <motion.div
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="rounded-bl-[35px] rounded-lg border-2 px-8 py-1.5 pr-5
              flex cursor-pointer shadow-md shadow-[rgb(123,204,255)]
              hover:bg-[#263F5F] hover:translate-y-2 hover:shadow-none max-[615px]:rounded-tl-[35px] max-[615px]:rounded-bl-[0px] max-[615px]:mb-5"
            >
              <p className="text-xl">DexTool</p>
              <img className="w-6 ml-4" src="/logo/dextools.svg" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="rounded-lg border-2 px-8 py-1.5 flex cursor-pointer shadow-md shadow-[rgb(123,204,255)] hover:bg-[#263F5F] hover:translate-y-2 hover:shadow-none max-[615px]:mb-5"
            >
              <p className="text-xl">DexScreener</p>
              <img src="" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="rounded-br-[35px] rounded-lg border-2 px-8 py-1.5 pr-9 flex cursor-pointer shadow-md shadow-[rgb(123,204,255)] hover:bg-[#263F5F] hover:translate-y-2 hover:shadow-none"
            >
              <p className="text-xl">DexSpy</p>
              <img src="" alt="" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="absolute right-0 bottom-0 max-[1169px]:-z-10"
        >
          <img
            className="w-[600px] max-[1330px]:w-[550px] max-[1169px]:opacity-30"
            src="/pegasus image.png"
            alt=""
          />
        </motion.div>
      </div>

      <Tokenomics />

      <div className="flex justify-center items-center py-44">
        <div className="border-2 w-3/4" />
      </div>

      <Roadmap />

      <div className="flex justify-center items-center py-44">
        <div className="border-2 w-3/4" />
      </div>

      <HowToBuy />

      <div className="flex justify-center items-center pt-44 pb-12">
        <div className="border-2 w-3/4" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-col justify-center items-center"
      >
        <div className="w-3/4 mt-5 mb-10 text-center max-[500px]:w-5/6">
          <p className="gradient-text font-bold">Disclaimer</p>
          <p className="mt-5 text-lg">
            <span className="underline">$Pegasus</span> is a meme coin with no
            intrinsic value or expectation of financial return. There is no
            formal team or roadmap. The coin is completely useless and for
            entertainment purposes only.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
