module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./view/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#3E3E3E',
        second: '#4B4B4B',
        third: '#F3F5FA',
        alternate: '#FFFFFF',
        mark: '#C6C3DB',
        mainT: '#ECECEC',
        secondT: '#FFFFFF',
        descriptionT: '#777395',
        linkT: '#BA5EB2',
      },
      container: {
        center: true,
        padding: '2rem',
        // padding: {
        //   DEFAULT: '28px',
        //   sm: '12px',
        //   md: '14px',
        //   lg: '16px',
        //   xl: '22px',
        //   '2xl': '28px',
        // },
      },
      fontFamily: {
        monser: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        // 'main': 'rgba(149, 157, 165, 0.2) -2px 2px 60px -35px 1px ',
      }
    },
  },
  plugins: [],
}
