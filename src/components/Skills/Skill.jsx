import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import styles from "../../components/Skills/Skill.module.css";
import SkillCard from "../SkillCard/SkillCard.jsx";
import ReactImg from "../../utils/images/react.png";
import typeScriptImg from "../../utils/images/typescript.png";
import tailwindImg from "../../utils/images/tailwindcss.png";
import shadcnImg from "../../utils/images/shadcn.png";
// import nodeImg from "../../utils/images/nodejs.png";
// import expressImg from "../../utils/images/circled.png";
import figmaImg from "../../utils/images/figma.png";
import framerImg from "../../utils/images/framer.png";
import sassImg from "../../utils/images/sass.png";
import hookFormImg from "../../utils/images/form.png";
import reduxImg from "../../utils/images/redux.png";
// import databaseImg from "../../utils/images/database.png";
import boxesImg from "../../utils/images/boxes.png";
import postamnImg from "../../utils/images/postman-.png";
import contextApiImg from "../../utils/images/modelcontext.png";
import About from "../About/About";

const frontEndSkills = [
  { imgSrc: ReactImg, text: "React JS", progress: 70 },
  { imgSrc: typeScriptImg, text: "TypeScript", progress: 40 },
  { imgSrc: tailwindImg, text: "Tailwind Css", progress: 80 },
  { imgSrc: framerImg, text: "Framer", progress: 60 },
  { imgSrc: sassImg, text: "Scss", progress: 90 },
  { imgSrc: hookFormImg, text: "React Hook Form", progress: 90 },
  { imgSrc: boxesImg, text: "React Router DOM", progress: 80 },
];
// const backEndSkills = [
//   { imgSrc: nodeImg, text: "Node JS", progress: 30 },
//   { imgSrc: expressImg, text: "Express JS", progress: 40 },
//   { imgSrc: databaseImg, text: "Mongo DB", progress: 50 },
// ];
const statekills = [
  { imgSrc: reduxImg, text: "RTK", progress: 75 },
  { imgSrc: contextApiImg, text: "Context API", progress: 90 },
];

const tools = [
  { imgSrc: figmaImg, text: "Figma", progress: 50 },
  { imgSrc: postamnImg, text: "Postman", progress: 60 },
  { imgSrc: shadcnImg, text: "Shadcn UI", progress: 85 },
];

// Reusable Animation Wrapper
export const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated Line Component (for ::after effect)
export const AnimatedLine = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
  );
};

function Skill() {
  return (
    <div className={styles.skillOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.skillHeading}>
          My <span className={styles.gradText}>Skills</span>
        </h1>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className={styles.skillText}>
          <p>
            A comprehensive overview of my technical expertise and professional
            capabilities, organized by specialization to showcase the depth and
            breadth of my development skills.
          </p>
          <AnimatedLine className={styles.skillTextLine} />
        </div>
      </RevealOnScroll>

      <div className={styles.skillBoxContainer}>
        {/* Frontend Development */}
        <RevealOnScroll delay={0.1}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.frontEnd}>Frontend Development</h3>
              <AnimatedLine className={styles.frontEndLine} />
            </div>
            <div className={styles.boxes}>
              {frontEndSkills.map((obj, index) => (
                <SkillCard
                  key={obj.text}
                  imgSrc={obj.imgSrc}
                  text={obj.text}
                  index={index}
                  progress={obj.progress}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Backend Development */}
        {/* <RevealOnScroll delay={0.2}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.backend}>Backend Development</h3>
              <AnimatedLine className={styles.backendLine} />
            </div>
            <div className={styles.boxes}>
              {backEndSkills.map((obj, index) => (
                <SkillCard
                  key={obj.text}
                  imgSrc={obj.imgSrc}
                  text={obj.text}
                  index={index}
                  progress={obj.progress}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll> */}

        {/* State Management */}
        <RevealOnScroll delay={0.3}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.stateManag}>State Management</h3>
              <AnimatedLine className={styles.stateManagLine} />
            </div>
            <div className={styles.boxes}>
              {statekills.map((obj, index) => (
                <SkillCard
                  key={obj.text}
                  imgSrc={obj.imgSrc}
                  text={obj.text}
                  index={index}
                  progress={obj.progress}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Tools & Design */}
        <RevealOnScroll delay={0.4}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.toolsManagment}>Tools & Design</h3>
              <AnimatedLine className={styles.toolsManagmentLine} />
            </div>
            <div className={styles.boxes}>
              {tools.map((obj, index) => (
                <SkillCard
                  key={obj.text}
                  imgSrc={obj.imgSrc}
                  text={obj.text}
                  index={index}
                  progress={obj.progress}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className={styles.skillCalcs}>
        <RevealOnScroll delay={0.1}>
          <div className={styles.techCalcs}>
            <p className={styles.numberText}>12</p>
            <p>Technologies</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.categoryCalcs}>
            <p className={styles.numberText}>5</p>
            <p>Categories</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.experienceCalcs}>
            <p className={styles.numberText}>1+ Years</p>
            <p>Experience</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.projectsCalcs}>
            <p className={styles.numberText}>20+</p>
            <p>Projects</p>
          </div>
        </RevealOnScroll>
      </div>
      <About />
    </div>
  );
}

export default Skill;
