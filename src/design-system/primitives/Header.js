import React from 'react'
import Text from './Text'

export default ({ is = 'h2', ...props }) => (
  <Text mb="default" mt="0" fontFamily="base" is={is} {...props} />
)
