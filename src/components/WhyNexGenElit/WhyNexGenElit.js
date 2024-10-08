import React, { useEffect } from "react";
import "../WhyNexGenElit/WhyNexGenElit.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function WhyNexGenElit() {
  useEffect(() => {
    // const animationImg = document.querySelectorAll(".item .img-container");
    const animationItems = document.querySelectorAll(".imgAnimations .item");
    const allPara = document.querySelectorAll(".heading-para");
    animationItems.forEach((item, index) => {
      item.addEventListener("mousemove", () => {
        animationItems.forEach((item) => {
          item.classList.remove("active");
        });
        allPara.forEach((para) => {
          para.classList.remove("active");
        });
        allPara[index].classList.add("active");
        item.classList.add("active");
      });
    });
  }, []);

  useGSAP(() => {
    const animationImg = document.querySelectorAll(".item .img-container");
    const animationItem = document.querySelectorAll(".imgAnimations .item");
    animationItem.forEach((items, index) => {
      items.addEventListener("mousemove", (dets) => {
        let clientX = dets.x;
        let clientY = dets.y / 2;
        if (window.innerWidth >= 480) {
          clientY = dets.y / 2;
        } else {
          clientY = dets.y;
        }
        animationImg.forEach((img) => {
          gsap.to(animationImg[index], {
            x: clientX,
            y: clientY,
            ease: "slow(0.7,0.7,false)",
            opacity: 1,
            duration: 4.5,
            background: "#f3e9dd",
            scale: 1.25,
            yoyo: true,
            ease: "elastic.out(1,0.3)",
          });

          gsap.to(img, {
            opacity: 0,
          });
        });
      });
    });
  });

  return (
    <div className="whyNex">
      <div className="headings">
        <h4 className="first-heading">
          Why <span>BritIndia ?</span>
        </h4>
        <h4 className="second-heading">
          <span>Because</span> We're Not Your Average Digital Agency Why Settle
          for Ordinary When You Can Have <span>Extraordinary?</span>
        </h4>
      </div>
      <div className="imgAnimations">
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>01</h5>
              <h2>Creativity</h2>
            </div>
            <div className="img-container">
              <img src="/images/creativity.svg" alt="alt-image" />
            </div>
            <p className="heading-para">
              We don't just think outside the box; we dance on its edges.
              Prepare for a journey where the only limit is your imagination.
            </p>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>02</h5>
              <h2>Innovation</h2>
            </div>
            <div className="img-container">
              <img src="/images/innovation.svg" alt="alt-image" />
            </div>
            <p className="heading-para">
              We're not here to follow trends; we're here to set them. Say hello
              to cutting-edge solutions that'll have your competitors green with
              envy.
            </p>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>03</h5>
              <h2>Passion</h2>
            </div>
            <div className="img-container">
              <img src="/images/passion.svg" alt="alt-image" />
            </div>
            <p className="heading-para">
              We eat, sleep, and breathe digital. Our team's passion is
              contagious – consider yourself warned
            </p>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>04</h5>
              <h2>Collaboration</h2>
            </div>
            <div className="img-container">
              <img src="/images/collab.svg" alt="alt-image" />
            </div>
            <p className="heading-para">
              Your vision, our expertise – let's make magic together. We're not
              just service providers; we're your partners in success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyNexGenElit;
