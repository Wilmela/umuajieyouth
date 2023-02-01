import { links } from "../constants";
import { useState, useEffect, useCallback } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { RiCloseCircleFill } from "react-icons/ri";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Show navbar when you scroll horizontally
  const handleShow = useCallback(() => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, [handleShow]);

  // Hide over flow on toggle
  useEffect(() => {
    isToggled && (window.document.body.style.overflow = "hidden");
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [isToggled]);

  return (
    <nav>
      <div
        className={`flex justify-between items-center h-[70px] ${
          showNav &&
          "fixed top-0 left-0 right-0 px-4 md:px-8 lg:px-12 xl:px-24 bg-white z-50 animate-slideDown"
        }`}
      >
        <a
          href="#home"
          className="font-Mont [flex:1] text-green-800 text-2xl"
          rel="no-referrer no-opener"
        >
          UCUA
        </a>

        {/* Desktop */}
        <div className="font-Anaheim [flex:1] hidden md:flex justify-between ">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              rel="no-referrer no-opener"
              onClick={() => setIsSelected(link.id)}
              className="hover:bg-[#899d44] w-16 h-16 rounded-full flex items-center justify-center duration-300 ease-in"
            >
              <p
                className={`font-Anaheim font-bold text-xl text-[#283724] hover:text-white ${
                  isSelected === link.id && "border-b border-green-800"
                }`}
              >
                {link.title}
              </p>
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <CgMenuGridR
            size={28}
            color="green"
            onClick={() => setIsToggled(true)}
            className="cursor-pointer"
          />

          {isToggled && (
            <div className="fixed h-screen top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.9)] z-50">
              {isToggled && (
                // Close Icon
                <div className="w-full flex justify-end  pt-6 pr-4">
                  <RiCloseCircleFill
                    size={28}
                    color="green"
                    onClick={() => setIsToggled(false)}
                    className="cursor-pointer"
                  />
                </div>
              )}

              <div className="flex-1  h-full flex flex-col justify-start pt-12 items-center">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    rel="no-referrer no-opener"
                    onClick={() => setIsSelected(link.id)}
                    className="hover:bg-[#899d44] w-16 h-16 rounded-full flex items-center justify-center duration-300 ease-in"
                  >
                    <p
                      className={`font-bold text-xl text-white font-Overpass hover:text-white ${
                        isSelected === link.id &&
                        "border-b border-green-800 duration-300 ease-in"
                      }`}
                      onClick={() => setIsToggled(false)}
                    >
                      {link.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back to top */}
      {showNav && (
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-green-800 fixed bottom-5 right-3 hover:bg-green-700 cursor-pointer opacity-70 z-10"
          onClick={backToTop}
        >
          &#8679;
        </div>
      )}
    </nav>
  );
};

export default Navbar;
