import styled from 'react-emotion'
import Panel from './Panel'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  order,
  space
} from 'styled-system'

const Flex = styled(Panel)`
   ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection} ${flex} ${order} ${space}
   display: flex;
`

export default Flex
