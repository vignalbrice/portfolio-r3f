import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { SKILLS, STACKS } from "../../constants/data";
const SkillsSection = () => {
  const [selectedStack, setSelectedStack] = React.useState("Frontend");

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="md:text-5xl text-3xl font-bold text-white">
          Skills &amp; Stacks
        </h2>
        <div className="flex flex-col md:flex-row gap-5 mt-8 justify-between">
          <div className="mt-8 space-y-4">
            {STACKS.map((stack, i) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + i * 0.2,
                      },
                    },
                  }}
                  key={i}
                  className={`w-full md:w-72 p-4 flex flex-row gap-5 bg-white cursor-pointer rounded-sm ${
                    selectedStack === stack.skills &&
                    "border-solid border-2 border-gray-400"
                  }`}
                  onClick={() => setSelectedStack(stack.skills)}
                >
                  <Icon size={32} />
                  <motion.h3
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + i * 0.2,
                        },
                      },
                    }}
                    className="text-lg md:text-xl font-bold text-slate-800"
                  >
                    {stack.title}
                  </motion.h3>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8 space-y-4">
            {selectedStack &&
              SKILLS[selectedStack].map((skill, i) => (
                <motion.div
                  key={i}
                  className="w-full md:w-64"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + i * 0.2,
                      },
                    },
                  }}
                >
                  <motion.h3
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + i * 0.2,
                        },
                      },
                    }}
                    className="text-lg md:text-xl font-bold text-gray-100"
                  >
                    {skill.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                    <motion.div
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + i * 0.2,
                          },
                        },
                      }}
                      className="bg-slate-700 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
export default SkillsSection;
