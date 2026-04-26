"use client";

const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient ${className}`}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
