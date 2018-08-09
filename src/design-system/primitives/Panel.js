import styled from 'react-emotion'
import {
  space,
  width,
  minWidth,
  height,
  color,
  border,
  borderRadius,
  borderColor
} from 'styled-system'

const Panel = styled('div')`
  ${space} ${width} ${minWidth} ${height} ${color} ${border} ${borderRadius} ${borderColor};
`

export default Panel
