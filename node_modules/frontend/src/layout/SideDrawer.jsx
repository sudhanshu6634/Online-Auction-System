import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";
import videoSrc from "./auction-13309228-10842214.mp4";

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // State for active section
  const [hoveredSection, setHoveredSection] = useState(""); // State for hovered section

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLinkClick = (section) => {
    setActiveSection(section); // Set the active section
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#4fd24c] lg:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`w-[100%] sm:w-[300px] bg-[#b8cff6] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
      >
        <div className="relative">
        <Link to="/" className="flex items-center space-x-2">
  <video 
    src={videoSrc} 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="h-12 w-auto border-4 border-[#f13cb5] rounded-lg shadow-lg"
  />
  <h4 className="text-2xl font-semibold">
    Prime<span className="text-[#f13cb5]">Bid</span>
  </h4>
</Link>

          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/auctions"}
                onClick={() => handleLinkClick("auctions")}
                onMouseEnter={() => setHoveredSection("auctions")}
                onMouseLeave={() => setHoveredSection("")}
                className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                  activeSection === "auctions" ? "bg-[#D6482B]" : ""|| hoveredSection === "auctions" ? "bg-[#3ad4da] text-white" : ""
                }`}
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                onClick={() => handleLinkClick("leaderboard")}
                onMouseEnter={() => setHoveredSection("leaderboard")}
                onMouseLeave={() => setHoveredSection("")}
                className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                  activeSection === "leaderboard" ? "bg-[#D6482B]" : "" || hoveredSection === "leaderboard" ? "bg-[#3ad4da] text-white" : ""
                }`}
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    onClick={() => handleLinkClick("submit-commission")}
                    onMouseEnter={() => setHoveredSection("submit-commission")}
                    onMouseLeave={() => setHoveredSection("")}
                    className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                      activeSection === "submit-commission" ? "bg-[#D6482B]" : "" || hoveredSection === "submit-commission" ? "bg-[#3ad4da] text-white" : ""
                    }`}
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    onClick={() => handleLinkClick("create-auction")}
                    onMouseEnter={() => setHoveredSection("create-auction")}
                    onMouseLeave={() => setHoveredSection("")}
                    className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                      activeSection === "create-auction" ? "bg-[#D6482B]" : ""|| hoveredSection === "create-auction" ? "bg-[#3ad4da] text-white" : ""
                    }`}
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    onClick={() => handleLinkClick("view-my-auctions")}
                    onMouseEnter={() => setHoveredSection("view-my-auctions")}
                    onMouseLeave={() => setHoveredSection("")}
                    className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                      activeSection === "view-my-auctions" ? "bg-[#D6482B]" : "" || hoveredSection === "view-my-auctions" ? "bg-[#3ad4da] text-white" : ""
                    }`}
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  onClick={() => handleLinkClick("dashboard")}
                  onMouseEnter={() => setHoveredSection("dashboard")}
                  onMouseLeave={() => setHoveredSection("")}
                  className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                    activeSection === "dashboard" ? "bg-[#D6482B]" : "" || hoveredSection === "dashboard" ? "bg-[#3ad4da] text-white" : ""
                  }`}
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="my-4 flex gap-2">
                <Link
                  to={"/sign-up"}
                  className="bg-[#2bb7d6] font-semibold hover:bg-[#f89845] text-xl py-1 px-4 rounded-md text-white"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="text-[#df8e50] bg-transparent border-[#de945c] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                <button className="bg-[#3ad4da] font-semibold hover:bg-[#f05f42] text-xl py-1 px-4 rounded-md text-white">
                  Logout
                </button>
              </div>
            </>
          )}
          <hr className="mb-4 border-t-[#d6482b]" />
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  onClick={() => handleLinkClick("profile")}
                  onMouseEnter={() => setHoveredSection("profile")}
                  onMouseLeave={() => setHoveredSection("")}
                  className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                    activeSection === "profile" ? "bg-[#D6482B] text-white" : ""|| hoveredSection === "profile" ? "bg-[#3ad4da] text-white" : ""
                  }`}
                >
                  <FaUser Circle /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/how-it-works-info"}
                onClick={() => handleLinkClick("how-it-works")}
                onMouseEnter={() => setHoveredSection("how-it-works")}
                onMouseLeave={() => setHoveredSection("")}
                className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                  activeSection === "how-it-works" ? "bg-[#D6482B]" : "" || hoveredSection === "how-it-works" ? "bg-[#3ad4da] text-white" : ""
                }`}
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => handleLinkClick("about")}
                onMouseEnter={() => setHoveredSection("about")}
                onMouseLeave={() => setHoveredSection("")}
                className={`flex text-xl font-semibold gap-2 items-center hover:transition-all hover:duration-150 ${
                  activeSection === "about" ? "bg-[#D6482B]" : "" || hoveredSection === "about" ? "bg-[#3ad4da] text-white" : ""
                }`}
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>

        <div>
          <div className="flex gap-2 items-center mb-2">
            <Link
              to="https://www.facebook.com/sudhanshu.ranjan.50115161"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/ranjan__sudhanshu/?hl=en"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-orange-500"
            >
              <RiInstagramFill />
            </Link>
          </div>
          <Link
            to="https://www.instagram.com/ranjan__sudhanshu/?hl=en"
            className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
          >
            Contact Us
          </Link>
          <p className="text-stone-500">&copy; PrimeBid, LLC.</p>
          <p className="text-stone-500">
            Designed By{" "}
            <Link
              to={"/"}
              className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
            >
            
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;