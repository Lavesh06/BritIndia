import React, { useState } from "react";
import "../FAQ/FAQ.scss";

const faqData = [
  {
    question: "How much does web design and development typically cost?",
    answer:
      "Well, here at BritIndia , we like to say our prices are like a box of chocolates—ranging from sweet and affordable at $3k to luxurious and decadent at $150k. But fear not, we're all about making dreams come true, so we'll work with you to find the perfect price tag for your project. And hey, we've even got a minimum project size of $1.5k because, let's face it, even the tiniest projects deserve some love. So, let's chat and find the perfect fit for your budget!",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Ah, the age-old question: how long does it take to build Rome—or, in our case, a website? Well, buckle up because we're in it for the long haul. A typical web design and build project can take around 8-12 weeks, while our brand-into-website-and-marketing extravaganza might have you waiting for up to 6 months (or more!). But hey, good things come to those who wait, right? And don't worry, we'll make sure to sprinkle in some milestones and timelines to keep things spicy and exciting!",
  },
  {
    question: "Can your creative agency accommodate tight deadlines?",
    answer:
      "Tight deadlines? Pshh, we eat those for breakfast! Here at BritIndia , we're like the superheroes of the digital world—ready to swoop in and save the day, no matter how fast the deadline is approaching. Flexibility and focus are our middle names, and we'll move mountains (or at least lines of code) to make sure your project gets done on time. So, sit back, relax, and watch as we work our magic!",
  },
  {
    question: "What ongoing support and maintenance do you offer post-launch?",
    answer:
      "Ah, post-launch support—the unsung hero of the digital world! Think of us as your trusty sidekicks, here to keep your digital fortress safe and sound long after the initial excitement has worn off. From regular updates to performance tuning, we've got your back every step of the way. Because let's face it, even superheroes need a little TLC from time to time!",
  },
  {
    question:
      "How do you handle revisions and feedback during the design process?",
    answer:
      "Ah, feedback—the bread and butter of any creative endeavor! Here at BritIndia , we thrive on your thoughts, tweaks, and 'aha' moments. Consider us your personal chefs, cooking up a storm in the digital kitchen and adding just the right amount of spice to every iteration. So, speak up, let your voice be heard, and together, we'll create something truly delicious!",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2 className="main-heading">FAQ's</h2>
      <div className="questions-container">
        {faqData.map((item, index) => (
          <div className="item" key={index}>
            <div className="question" onClick={() => toggleFAQ(index)}>
              <h4>{item.question}</h4>
              <h4
                className="plusIcon"
                style={{
                  transform:
                    activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </h4>
            </div>
            <div className={`answer ${activeIndex === index ? "active" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
