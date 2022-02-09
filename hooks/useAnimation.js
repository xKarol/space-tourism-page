import { useLayoutEffect, useState } from "react";

export default function useAnimation(activeId) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    setAnimation(true);
  }, [activeId]);

  return { setAnimation, animation };
}
