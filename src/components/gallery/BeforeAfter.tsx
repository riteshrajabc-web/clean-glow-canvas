import React, { useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  alt?: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after, alt }) => {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-xl border">
      <img src={after} alt={alt || "After"} className="w-full h-64 md:h-96 object-cover select-none" loading="lazy" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={alt || "Before"} className="w-full h-64 md:h-96 object-cover select-none" loading="lazy" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(parseInt(e.target.value))}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 accent-primary"
        aria-label="Before After Slider"
      />
    </div>
  );
};

export default BeforeAfter;
