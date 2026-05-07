import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks.jsx";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother;

const Navbar = () => {
    useEffect(() => {
        const smootherInstance = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.7,
            speed: 1.7,
            effects: true,
            autoResize: true,
            ignoreMobileResize: true,
        });

        smoother = smootherInstance;
        smootherInstance.scrollTop(0);
        smootherInstance.paused(true);

        const links = Array.from(document.querySelectorAll(".header ul a"));
        const handleLinkClick = (e) => {
            if (window.innerWidth > 1024) {
                e.preventDefault();
                const elem = e.currentTarget;
                const section = elem.getAttribute("data-href");
                smootherInstance.scrollTo(section, true, "top top");
            }
        };

        links.forEach((link) => link.addEventListener("click", handleLinkClick));
        const handleResize = () => {
            ScrollSmoother.refresh(true);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            links.forEach((link) => link.removeEventListener("click", handleLinkClick));
            window.removeEventListener("resize", handleResize);
            if (smootherInstance) {
                smootherInstance.kill();
            }
        };
    }, []);
    return (
        <>
            <div className="header">
                <a href="/#" className="navbar-title" data-cursor="disable">
                   <img src="img.webp" alt="profile img" className="object-cover" />
                </a>
                <a
                    href="https://www.linkedin.com/in/shyam-sunder-06a66536a/"
                    className="navbar-connect"
                    data-cursor="disable"
                    target="_blank"
                    rel="noreferrer"
                >
                    linkedin.com/in/shyamsunder9829
                </a>
                <ul>
                    <li>
                        <a data-href="#about" href="#about">
                            <HoverLinks text="ABOUT" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#education" href="#education">
                            <HoverLinks text="EDUCATION" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#work" href="#work">
                            <HoverLinks text="WORK" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#skills" href="#skills">
                            <HoverLinks text="SKILLS" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#contact" href="#contact">
                            <HoverLinks text="CONTACT" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="landing-circle1"></div>
            <div className="landing-circle2"></div>
            <div className="nav-fade"></div>
        </>
    );
};

export default Navbar;
