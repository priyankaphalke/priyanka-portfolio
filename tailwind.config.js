const c = (v) => `rgb(var(--${v}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: c('bg'), surface: c('surface'), ink: c('ink'), muted: c('muted'), line: c('line'), accent: c('accent'), sand: c('sand') },
      fontFamily: { display: ['Fraunces', 'Georgia', 'serif'], sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
