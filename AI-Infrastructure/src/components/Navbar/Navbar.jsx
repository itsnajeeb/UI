import React, { useEffect, useState } from "react";
import logo from "/image/logo.png";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`px-14 nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="flex justify-between">
        <div className="logo-border">
          <div className="self-center flex items-center gap-3 cursor-pointer logo-container">
          <img src={logo} alt="logo" className="w-8 h-8 object-cover" />
          <h1 className="text-xl font-semibold">Shieldeum</h1>
        </div>
        </div>

        <div className="nav-border">
          <div className="flex nav-inner w-270">
            <ul className="navbar">
              <li><a href="">Our Solutions</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Staking</a></li>
              <li><a href="">Roadmap</a></li>
              <li><a href="">SDM.fun</a></li>
              <li><a href="">Community</a></li>
            </ul>

            <button className="nav-btn">Launch DAPP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
