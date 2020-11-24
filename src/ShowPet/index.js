import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default function ShowPet(props) {
  return (
    <Card key={ props.pets.id }>
      <Image src={ props.pets.photo } wrapped ui={ false } />
      <Card.Content>
        <Card.Header>{ props.pets.petName }</Card.Header>
        <Card.Meta>Missing in { props.pets.zipCode }</Card.Meta>
        <Card.Description>{ props.pets.aboutPet }</Card.Description>
        {
          props.pets.user.id === props.currentUserId
          &&
            <React.Fragment>
              <Button>DELETE</Button>
              <Button>EDIT</Button>
            </React.Fragment>
        }
      </Card.Content>
    </Card>
  )
}
