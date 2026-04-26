"use client";

const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
