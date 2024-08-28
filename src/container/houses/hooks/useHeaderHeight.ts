import { useEffect, useRef, useState } from "react";

export const useHeaderHeight = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(200);

  useEffect(() => {
    if (headerRef.current?.clientHeight) setHeaderHeight(headerRef.current?.clientHeight);
  }, [headerRef]);

  return {
    headerRef,
    headerHeight,
  };
};
