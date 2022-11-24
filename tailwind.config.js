/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '820px'},
      'md': {'max': '820px', 'max': '1510px'},
      'lg': "1510px",
    },
    extend: {
      fontSize: {
        "text-base": "0.9rem"
      },
      colors: {
        'default': '#fff',
        'primary': '#61DB98',
        // 'primary': '#FF9270',
        'secondary': '#ebfff5',
        // 'secondary': '#f8dcca',
        'dark': '#212121',
        'bgColor': 'rgb(240, 239, 239)',
        'grey': 'rgb(57, 56, 56)',
        "extras": "#788fdb"
      },
      width: {
        "200px": "200px",
        "100px": "100px",
        "600px": "600px",
        '15': '15%',
        '85': '85%',
        '55': "55%",
        '60': "60%",
        '80': '80%'
      },
      height: {
        '70vh': "70vh" 
      }
    },
    fontFamily: {
      "spaceGrotesk": ['"Space Grotesk", sans-serif']
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      default: '4px',
      'md': '0.5rem',
      'lg': '1rem',
    }
    
  },
  plugins: [],
}