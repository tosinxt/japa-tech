/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      pc: { min: "768px" },
      tablet: { min: "640px" },
    },
    extend: {
      backgroundImage: {
        banner: "url('/banner.svg')",
        talent: "url('/talentBG.svg')",
        talent2: "url('/BG2.png')",
      },
      backgroundPosition: {
        bannerPosition: "center top",
      },
      colors: {
        primary: "#5922A9",
        primaryLight: "#f1ecf1",
        primaryLighter: "#EFEDF1",
        lightPurple: "#F2EAFD",
        peach: "#FAEACC",
        textDefault: "#313033",
        textSuccess: "#1FB564",
        textNeutral: "#79767A",
      },
      boxShadow: {
        purple: "10px 10px 1px #ffffff, 11px 11px 0 #5922a9 ",
        talent: "-10px 10px 0px #351464",
      },
      borderColor: {
        boxGradient:
          "linear-gradient(90deg, #7D2F99 0%, #FF5FCC 27%, #451A83 53%, #B543AF 80%, #451A83 100%)",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideUp': 'slideUp 0.6s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'slideIn': 'slideIn 0.3s ease-out forwards',
        'in': 'in 0.2s ease-out',
        'out': 'out 0.2s ease-in',
        'scroll-left': 'scroll-left 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        in: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        out: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'repeating-stripes': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
      },
    },
  },
  plugins: [],
};
