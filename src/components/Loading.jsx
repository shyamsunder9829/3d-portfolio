import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider.jsx";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX.js").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
            SS
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> MERN Stack Developer</span> <span>Software Engineer</span>
            <span> MERN Stack Developer</span> <span>Software Engineer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading) => {
  // Smooth progress using requestAnimationFrame to avoid many timers
  let percent = 0;
  let rafId = null;
  let target = 50;

  const step = () => {
    setLoading(Math.round(percent));
    if (percent < target) {
      // ease toward target
      percent += Math.max(0.2, (target - percent) * 0.08);
      rafId = requestAnimationFrame(step);
    }
  };

  // start initial animation
  if (!rafId) rafId = requestAnimationFrame(step);

  function clear() {
    if (rafId) cancelAnimationFrame(rafId);
    percent = 100;
    setLoading(100);
  }

  function loaded() {
    return new Promise((resolve) => {
      target = 100;
      const finish = () => {
        setLoading(Math.round(percent));
        if (percent < 100) {
          percent += Math.max(0.5, (100 - percent) * 0.06);
          rafId = requestAnimationFrame(finish);
        } else {
          resolve(percent);
        }
      };
      finish();
    });
  }

  return { loaded, percent, clear };
};
