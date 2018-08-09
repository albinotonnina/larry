import React from 'react'
import { Flex, FlexItem } from '../../../design-system'

export const DocumentsContainer = props => (
  <Flex flex="1 1 auto" bg="background.default" p="wide" {...props} />
)

export const Sidebar = props => (
  <FlexItem
    flex="0 1 15.8vw"
    minWidth="20rem"
    bg="white"
    borderRadius="tiny"
    {...props}
  />
)

export const DocumentArea = props => (
  <FlexItem
    flex="1 1 auto"
    bg="white"
    ml="wide"
    borderRadius="tiny"
    {...props}
  />
)
