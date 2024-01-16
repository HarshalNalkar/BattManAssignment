import React, { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const hideDelay = 1000;
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const hideNavbar = () => {
    setIsVisible(false);
  };

  const showNavbar = () => {
    setIsVisible(true);
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
      hideNavbar();
    } else {
      showNavbar();
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    

    const timeoutId = setTimeout(hideNavbar, hideDelay);
    return () => clearTimeout(timeoutId);
  }, [hideDelay]);

  useEffect(() => {
    const initialScrollPos = window.pageYOffset;
    if (initialScrollPos > 0) {
      hideNavbar();
    }
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, handleScroll]);

  return (
    <div>
      <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
        <div className="bottomLogo" id="bottomLogo">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 360 95"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip3_434_120)">
              <mask
                id="mask0_434_120"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="47"
                y="2"
                width="309"
                height="93"
              >
                <path d="M356 2H47V95H356V2Z" fill="white" />
              </mask>
              <g mask="url(#mask0_434_120)">
                <path
                  d="M129.5 35H164.5V44.5H152.5V77.5H142V44.5H129.5V35Z"
                  fill="#00E091"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M102 35H112L128 77.5H117.5L114 68H100.5L97 77.5H86L102 35ZM107 47.5L103.5 58.5H110.5L107 47.5Z"
                  fill="#00E091"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47 35V77.5H69C75.6667 75.6667 86.5 68.8 76.5 56C84.9 41.6 75 36 69 35H47ZM57.5 51V44.5H66.5C70.9 47.3 68.3333 50 66.5 51H57.5ZM57.5 67.5V61H66.5C70.9 63.8 68.3333 66.5 66.5 67.5H57.5Z"
                  fill="#00E091"
                />
                <path
                  d="M211.5 35V77.5H221.5L232 57V77.5H242.5L253 57V77.5H264V35H253L242.5 58.5V35H232L221.5 58V35H211.5Z"
                  fill="#00E091"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M286.5 35H296.5L313 77.5H302L298.5 68H285.5L282 77.5H271L286.5 35ZM295 58.5H288.5L292 48L295 58.5Z"
                  fill="#00E091"
                />
                <path
                  d="M319.5 35V77.5H331L346 53.5V77.5H356V35H346L330 59.5V35H319.5Z"
                  fill="#00E091"
                />
              </g>
              <path
                d="M205 44H194L198 32.5H188L184 44H174L170 53H181L177 65H187L191 53H201L205 44Z"
                fill="#00E091"
              />
              <path d="M172 77L176 67H198L194 77H172Z" fill="#00E091" />
            </g>
          </svg>
        </div>
        <div className="userCircle" id="userCircle">
          <svg
            width="100%"
            height="100"
            viewBox="1600 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip2_434_120)">
              <path
                d="M1659.5 72.62C1651.12 72.62 1643.72 68.332 1639.4 61.9C1639.5 55.2 1652.8 51.515 1659.5 51.515C1666.2 51.515 1679.5 55.2 1679.6 61.9C1677.39 65.1978 1674.39 67.9004 1670.89 69.7697C1667.38 71.6391 1663.47 72.618 1659.5 72.62ZM1659.5 25.05C1662.17 25.05 1664.72 26.1088 1666.61 27.9936C1668.49 29.8783 1669.55 32.4346 1669.55 35.1C1669.55 37.7654 1668.49 40.3217 1666.61 42.2064C1664.72 44.0912 1662.17 45.15 1659.5 45.15C1656.83 45.15 1654.28 44.0912 1652.39 42.2064C1650.51 40.3217 1649.45 37.7654 1649.45 35.1C1649.45 32.4346 1650.51 29.8783 1652.39 27.9936C1654.28 26.1088 1656.83 25.05 1659.5 25.05ZM1659.5 15C1655.1 15 1650.74 15.8665 1646.68 17.55C1642.62 19.2336 1638.92 21.7012 1635.81 24.8119C1629.53 31.0944 1626 39.6152 1626 48.5C1626 57.3848 1629.53 65.9056 1635.81 72.1881C1638.92 75.2988 1642.62 77.7664 1646.68 79.45C1650.74 81.1335 1655.1 82 1659.5 82C1668.38 82 1676.91 78.4705 1683.19 72.1881C1689.47 65.9056 1693 57.3848 1693 48.5C1693 29.9745 1677.92 15 1659.5 15Z"
                fill="#16C380"
              />
            </g>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
