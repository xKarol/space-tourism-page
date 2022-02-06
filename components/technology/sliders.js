import { useContext } from "react";
import TechnologyContext from "../../context/TechnologyContext";

export default function Sliders() {
  const { technology, setActiveId, activeId } = useContext(TechnologyContext);
  return (
    <div className="main-section__sliders">
      {technology.slice(0, 3).map((_, index) => (
        <span
          key={index}
          className={`slider ${activeId === index ? "active" : ""}`}
          onClick={() => setActiveId(index)}
        >
          {index}
        </span>
      ))}
    </div>
  );
}
