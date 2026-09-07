import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type ScrollManagerProps = {
  section: number;
  onSectionChange: (section: number) => void;
};

const ScrollManager = (props: ScrollManagerProps) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnmating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnmating.current = true;
      },
      onComplete: () => {
        isAnmating.current = false;
      },
    });
    if (
      (
        data as unknown as {
          delta: [number, number];
        }
      ).delta[1] !== 0
    ) {
      isAnmating.current = true;
      setTimeout(() => {
        isAnmating.current = false;
      }, 1000);
    }
  }, [section]);

  useFrame(() => {
    if (isAnmating.current) {
      lastScroll.current = (
        data as unknown as {
          scroll: { current: number };
        }
      ).scroll.current;
      return;
    }

    const curSection = Math.floor(
      (
        data as unknown as {
          scroll: { current: number };
        }
      ).scroll.current * data.pages
    );
    if (
      (
        data as unknown as {
          scroll: { current: number };
        }
      ).scroll.current > lastScroll?.current! &&
      curSection === 0
    ) {
      onSectionChange(1);
    }
    if (
      (
        data as unknown as {
          scroll: { current: number };
        }
      ).scroll.current < lastScroll?.current! &&
      (
        data as unknown as {
          scroll: { current: number };
        }
      ).scroll.current <
        data.pages - 1
    ) {
      onSectionChange(0);
    }
  });

  return null;
};

export default ScrollManager;
