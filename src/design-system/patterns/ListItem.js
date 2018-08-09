import React from 'react'
import styled from 'react-emotion'
import { themeGet } from 'styled-system'
import Panel from '../primitives/Panel'
import Text from '../primitives/Text'
import Flex from '../primitives/Flex'

const Item = styled(Panel)`
  cursor: pointer;
  & svg path {
    fill: ${themeGet('colors.elements.hover.border')};
    stroke-width: 0.2;
  }
  & svg rect {
    stroke: ${themeGet('colors.elements.hover.border')};
    fill: ${themeGet('colors.elements.hover.background')};
    width: 16px;
    height: 10px;
  }
  & svg circle {
    fill: ${themeGet('colors.elements.light')};
  }
  &:hover {
    background-color: ${themeGet('colors.elements.hover.border')};
    border-color: ${themeGet('colors.elements.hover.border')};
    & span {
      color: white;
    }

    & svg path,
    & svg rect,
    & svg circle {
      fill: white;
    }
  }
`

const iconPath =
  'M14.2222222,5.33333333 L13.4928775,5.33333333 L13.4928775,3.69230769 C13.4928775,3.23979487 13.1657664,2.87179487 12.7635328,2.87179487 L8.02279202,2.87179487 C7.93745869,2.87179487 7.85504274,2.83815385 7.78940171,2.77702564 L5.70274644,0.820512821 L1.45868946,0.820512821 C1.05645584,0.820512821 0.729344729,1.18851282 0.729344729,1.64102564 L0.729344729,4.51282051 L14.2222222,4.51282051 L14.2222222,5.33333333 L0.729344729,5.33333333 L0,5.33333333 L0,1.64102564 C0,0.736 0.654222222,0 1.45868946,0 L5.83475783,0 C5.92009117,0 6.00250712,0.0336410256 6.06814815,0.0947692308 L8.15480342,2.05128205 L12.7635328,2.05128205 C13.568,2.05128205 14.2222222,2.78728205 14.2222222,3.69230769 L14.2222222,5.33333333 Z'

export default props => (
  <Item
    borderColor="elements.border"
    border="line"
    borderRadius="tiny"
    p="default"
    mb="wide"
    children={
      <Flex alignItems="center">
        <Flex alignItems="center" flex="0 1 auto" mr="default">
          <svg width="1rem" height="1rem">
            <path d={iconPath} />
            <rect x="0" y="4.26666667" rx="2" />
          </svg>
        </Flex>
        <Flex alignItems="center" flex="1 1 auto">
          <Text
            is="span"
            fontFamily="base"
            fontWeight="light"
            lineHeight="base"
            letterSpacing="caps"
            color="text.header"
          >
            {props.children}
          </Text>
        </Flex>
        <Flex alignItems="center" flex="0 1 auto">
          <svg width="4px" height="16px">
            <circle cx="2" cy="2" r="2" />
            <circle cx="2" cy="8" r="2" />
            <circle cx="2" cy="14" r="2" />
          </svg>
        </Flex>
      </Flex>
    }
  />
)
