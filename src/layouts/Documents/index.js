import React from 'react'
import { DocumentsContainer, Sidebar, DocumentArea } from './UI'
import Favourites from './Favourites'

const dummyDocuments = [
  { name: 'My Resources' },
  { name: 'Shared with me' },
  { name: 'Design resources' },
  { name: 'Daily reports' },
  { name: 'Travel documents' }
]

export default class Documents extends React.Component {
  render() {
    return (
      <DocumentsContainer>
        <Sidebar>
          <Favourites title="Favourites" data={dummyDocuments} />
        </Sidebar>
        <DocumentArea />
      </DocumentsContainer>
    )
  }
}
