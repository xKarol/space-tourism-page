import { useContext, useEffect } from "react";
import CrewContext from "../../context/CrewContext";

export default function Dots() {
  const { crew, activeId, setActiveId } = useContext(CrewContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId(activeId >= 3 ? 0 : activeId + 1);
    }, 1000 * 20);
    return () => clearInterval(timer);
  }, [activeId]);
  return (
    <div className="main-section__body__dots">
      {crew.slice(0, 4).map((_, index) => (
        <span
          key={index}
          className={`${activeId === index ? "active" : ""}`}
          onClick={() => setActiveId(index)}
        />
      ))}
    </div>
  );
}
