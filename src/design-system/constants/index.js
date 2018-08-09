// breakpoint values
// any array length works with styled-system
const breakpoints = ['40em', '52em', '64em']

const space = {
  narrow: '0.75rem',
  default: '1rem',
  wide: '1.5rem',
  wider: '2rem'
}

const basePalette = {
  brilliantAzure: '#4da1ff',
  lighterAzure: '#e0eefd',
  japaneseIndigo: '#323c47',
  snow: '#f9f9f9',
  lightGray: '#d0d7dd',
  lighterGray: '#E9EFF4'
}

const colors = {
  background: {
    default: '#F4F8F9'
  },
  text: {
    header: basePalette.japaneseIndigo,
    paragraph: basePalette.japaneseIndigo
  },
  elements: {
    border: basePalette.lighterGray,
    default: basePalette.snow,
    light: basePalette.lightGray,
    hover: {
      border: basePalette.brilliantAzure,
      background: basePalette.lighterAzure
    }
  }
}

const fonts = {
  base: 'Helvetica Neue'
}

// typographic scale
const fontSizes = {
  small: '0.75rem',
  default: '1rem'
}

// for any scale, either array or objects will work
const lineHeights = { base: 1, default: 1.125 }

const fontWeights = {
  light: 300,
  normal: 400,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.01rem'
}

const textStyles = {
  capsSmall: {
    textTransform: 'uppercase',
    fontSize: fontSizes.small,
    fontWeight: fontWeights.normal
  }
}

// border-radius
const radii = { tiny: '.4rem' }

const borders = { line: '1px solid' }

const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`]

const heights = {
  full: '100%'
}

const theme = {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  textStyles,
  borders,
  radii,
  shadows,
  heights
}

export default theme
