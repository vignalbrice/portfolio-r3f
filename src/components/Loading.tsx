import { useEffect } from "react";
import { useProgress } from "@react-three/drei";

type LoadingProps = {
  started: boolean;
  setStarted: (started: boolean) => void;
};

const Loading = (props: LoadingProps) => {
  const { started, setStarted } = props;
  const progress = useProgress((state) => state.progress);

  useEffect(() => {
    if (progress < 100) return;
    const timeout = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(timeout);
  }, [progress, setStarted]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-4xl md:text-9xl font-bold text-slate-900 relative !leading-normal">
        <div
          className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          Brice Vignal
        </div>
        <div className="opacity-40">Brice Vignal</div>
      </div>
    </div>
  );
};

export default Loading;
