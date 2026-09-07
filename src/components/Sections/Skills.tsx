import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { SKILLS, SkillType, STACKS } from "../../constants/data";
const SkillsSection = () => {
  const [selectedStack, setSelectedStack] = useState<SkillType>("Frontend");

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="md:text-5xl text-3xl font-bold text-white">
          Skills &amp; Stacks
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-4 md:mt-8 justify-between">
          <div className="space-y-2 md:space-y-4 md:mt-8">
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
                  className={`w-full md:w-72 p-3 md:p-4 flex flex-row items-center gap-4 md:gap-5 bg-white cursor-pointer rounded-sm ${
                    selectedStack === stack.skills &&
                    "border-solid border-2 border-gray-400"
                  }`}
                  onClick={() => setSelectedStack(stack.skills as SkillType)}
                >
                  <Icon className="shrink-0 w-6 h-6 md:w-8 md:h-8" />
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
                    className="text-base md:text-xl font-bold text-slate-800"
                  >
                    {stack.title}
                  </motion.h3>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-4 gap-3 md:flex md:flex-col md:space-y-4 md:gap-0 md:mt-8">
            {selectedStack &&
              SKILLS[selectedStack].map((skill, i) => (
                <motion.div
                  key={i}
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
                  <motion.img
                    src={skill.url}
                    alt={skill.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full md:w-40"
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
export default SkillsSection;
