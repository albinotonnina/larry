import Color from 'color'

const basePalette = {
  brilliantAzure: '#4da1ff',
  japaneseIndigo: '#323c47',
  snow: '#f9f9f9',
  lightGray: '#d0d7dd'
}

export default {
  breakpoints: ['32rem', '48rem', '64rem'],
  space: {
    narrow: '0.5rem',
    default: '1rem',
    wide: '2rem'
  },
  colors: {
    headerText: basePalette.japaneseIndigo,
    paragraphText: basePalette.japaneseIndigo,
    elementBackgroundDefault: basePalette.snow,
    elementBackgroundHover: basePalette.brilliantAzure,
    elementButton: Color(basePalette.lightGray)
      .fade(0.4)
      .string()
  }
}
