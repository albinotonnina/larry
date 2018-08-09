import React from 'react'
import styled from 'react-emotion'
import {
  space,
  fontFamily,
  fontSize,
  fontWeight,
  textStyle,
  color,
  textAlign,
  lineHeight,
  letterSpacing
} from 'styled-system'

const tag = props => {
  // Cleaning props here through destructuring.
  const {
    is,
    color,
    fontFamily,
    fontSize,
    lineHeight,
    m,
    mb,
    mt,
    textStyle,
    ...cleanedProps
  } = props

  const TextTag = is || 'div'

  return <TextTag {...cleanedProps} />
}

const Text = styled(tag)`
${space}
${color}
${textStyle}
${fontFamily}
${fontSize}
${fontWeight}
${textAlign}
${lineHeight}
${letterSpacing}
`

export default Text
