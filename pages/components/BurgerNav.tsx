import React, { useState, useEffect } from "react";
import ScrollButton from "./ScrollButton";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileNav({ open }: MobileNavProps) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 right-0 h-screen w-[37%] z-30 bg-[#263F5F] transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b border-[rgb(123,204,255)] w-full">
          <ScrollButton targetId="Services">
            <p className="text-lg mb-4">Services</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[rgb(123,204,255)] w-full">
          <ScrollButton targetId="Partner">
            <p className="text-lg mb-4">Partner</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[rgb(123,204,255)] w-full">
          <ScrollButton targetId="Team">
            <p className="text-lg mb-4">Team</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[rgb(123,204,255)] w-full">
          <ScrollButton targetId="Testimonal">
            <p className="text-lg mb-4">Portfolio</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[rgb(123,204,255)] w-full">
          <ScrollButton targetId="Contact">
            <p className="text-lg mb-4">Contact Us</p>
          </ScrollButton>
        </a>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[1000px]:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-9 h-6 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-[hsl(203,100%,74%)] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-[rgb(123,204,255)] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-[rgb(123,204,255)] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
