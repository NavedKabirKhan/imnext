"use client";

const Overlay = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Scroll to Reveal</h1>
        <p className="text-xl opacity-75">Keep scrolling to see the magic</p>
      </div>
    </div>
  );
};

export default Overlay;