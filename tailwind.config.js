/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // boxShadow: {
      //   '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      //   '4xl': '0 40px 70px -20px rgba(0, 0, 0, 0.3)',
      // },
      fontSize: {
        '2xs': '0.675rem',
        '3xs': '0.625rem'
      },
      colors: {
        // TFM (Indigo)
        // brand: {
        //   50: '#EDE9FF',
        //   100: '#DBD3FF',
        //   200: '#C9BEFF',
        //   300: '#A18EFF',
        //   400: '#7A5EFF',
        //   500: '#6342FF',
        //   600: '#5337D7',
        //   700: '#3E28A3',
        //   800: '#2B1C70',
        //   900: '#1F1258',
        //   950: '#0F082B'
        // },
        grey: {
          50: '#F3F3F7',
          100: '#E8E8F0',
          200: '#D9D9E1',
          300: '#CACAD2',
          400: '#ACACB4',
          450: '#8E8E96',
          500: '#72727A',
          550: '#52525E',
          600: '#343444',
          700: '#272733',
          800: '#1A1A22',
          900: '#101016',
          950: '#0C0C11',
          975: '#060608'
        },
        // red: { 555: '#f7112f' },
        // orange: { 555: '#ff8700' },
        // yellow: { 555: '#fdf516' },
        // lime: { 555: '#a1ff0a' },
        // green: { 555: '#0aff99' },
        // cyan: { 555: '#0aefff' },
        // blue: { 555: '#0022ff' },
        // indigo: { 555: '#580aff' },
        // violet: { 555: '#be0aff' },
        // pink: { 555: '#ff00a1' },
        // TOGW (Neon Green)
        // brand: {
        //   50: '#edfffb',
        //   100: '#dafff6',
        //   200: '#b5ffed',
        //   300: '#91ffe6',
        //   400: '#6cffdd',
        //   500: '#47ffd4',
        //   600: '#41ebc3',
        //   700: '#31af91',
        //   800: '#268770',
        //   900: '#1b5f4f',
        //   950: '#0c2822'
        // },
        // PLAINGRAY
        // init: {
        //   50: '#ececec',
        //   100: '#e3e3e3',
        //   200: '#c6c6c6',
        //   300: '#aaaaaa',
        //   400: '#8e8e8e',
        //   500: '#717171',
        //   600: '#555555',
        //   700: '#393939',
        //   800: '#2a2a2a',
        //   900: '#1c1c1c',
        //   950: '#131313'       
        // },
        // REXRED
        // brand: {
        //   50: '#ffe6e6',
        //   100: '#ffcccc',
        //   200: '#ff9999',
        //   300: '#ff6666',
        //   400: '#ff3333',
        //   500: '#ff0000',
        //   600: '#d70000',
        //   700: '#af0000',
        //   800: '#870000',
        //   900: '#5f0000',
        //   950: '#280000'
        // }
      }
    },
    fontFamily: {
      'body': ['Inter'],
      'sans': [ 'Inter'],
      'mono': ['Victor Mono', 'SFMono-Regular'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'display': ['Major Mono Display'],
    }
  },
}

