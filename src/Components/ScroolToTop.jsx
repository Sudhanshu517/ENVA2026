import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 border border-[#d4af37] text-[#d4af37] rounded-full transition-all duration-300
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      hover:bg-[#d4af37] hover:text-black`}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
