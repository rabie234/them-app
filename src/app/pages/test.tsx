/* eslint-disable react/no-unescaped-entities */

"use client";

export default function Test() {
  return (
    <div
      className="relative w-full h-full w-full h-screen  stal overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
      }}
    >
      {/* Content inside the slanted polygon, if needed */}
    </div>
  );
}
