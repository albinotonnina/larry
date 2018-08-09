import React from 'react'
import { Panel, Header } from '..'

export default props => (
  <Panel p="default" pt="wider">
    <Header is="h1" textStyle="capsSmall" color="text.header">
      {props.title}
    </Header>
    {props.children}
  </Panel>
)
