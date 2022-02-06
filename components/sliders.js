import { useEffect } from "react";
import { DEFAULT_SLIDER, TECHNOLOGY_SLIDER } from "../constants/slider";

export default function Sliders({
  total,
  activeId,
  time,
  increment,
  type = DEFAULT_SLIDER,
}) {
  useEffect(() => {
    const timer = setInterval(() => {
      increment(activeId >= total - 1 ? 0 : activeId + 1);
    }, time ?? 1000 * 20);
    return () => clearInterval(timer);
  }, [activeId]);

  return (
    <div
      className={`sliders ${type === TECHNOLOGY_SLIDER ? "--technology" : ""}`}
    >
      {[...new Array(total)].slice(0, 4).map((_, index) => (
        <button
          key={index}
          className={`sliders__slider ${activeId === index ? "active" : ""}`}
          onClick={() => increment(index)}
          aria-label={`slider ${index + 1}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
