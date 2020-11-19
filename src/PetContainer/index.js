import React, { Component } from 'react'
import NewUserForm from '../NewUserForm'
import NewPetForm from '../NewPetForm'

export default class PetContainer extends Component {
  constructor(props) {
  super(props)

    this.state = {
      pets: []
    }
  }

  createUser = async (userToAdd) => {
    try {
      const url = process.env.API_URL + '/api/v1/users/register/'
      const createUserResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userToAdd)
      })
      const createUserJson = await createUserResponse.json()
      if (createUserResponse.status === 200 || createUserResponse.status === 201) {
        console.log('USER CREATED')
      }
    } catch(err) {
      console.log('ERROR CREATING USER', err)
    }
  }

  createPet = async (petToAdd) => {
    try {
      const url = process.env.API_URL + '/api/v1/pets/'
      const createPetResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(petToAdd)
      })
      const createPetJson = await createPetResponse.json()
      if (createPetResponse.status === 200 || createPetResponse.status === 201) {
        this.setState({
          pets: [...this.state.pets, createPetJson.data]
        })
        console.log('PET CREATED')
      }
    } catch(err) {
      console.log('ERROR CREATING PET', err)
    }
  }

  render() {
    return (
      <React.Fragment>
        <NewUserForm createUser={ this.createUser }/>
        <NewPetForm createPet={ this.createPet } />
      </React.Fragment>
    )
  }

}
