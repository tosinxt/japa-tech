import React from 'react'

const Button = ({text, isSubmitting}) => {
  return (
    <button
      type="submit"
      className="bg-primary flex items-center justify-center w-full mt-3 text-white h-[45px]  hover:opacity-80 rounded-[30px]"
    >
      {isSubmitting ? (
        <span className="border-white h-6 w-6 animate-spin rounded-full border-2 border-t-primary"></span>
      ) : (
        <span className="font-[500] text-[14px]">{text}</span>
      )}
    </button>
  );
}

export default Button