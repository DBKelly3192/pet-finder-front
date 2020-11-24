import './App.css'
import React, { Component } from 'react'
import Body from './Body'
import Nav from './Nav'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      pets: [],
      showPet: false,
      currentUserId: ''
    }
  }

  componentDidMount() {
  }

  getPets = async () => {
    try {

      const url = process.env.REACT_APP_API_URL + "/api/v1/pets/all"
      // const url = "http://localhost:8000/api/v1/pets/"
      console.log(url)

      const petsResponse = await fetch(url)

      const petsJson = await petsResponse.json()

      this.setState({
        pets: petsJson.data
      })
      console.log(this.state.pets)

    } catch(err) {
      console.log("ERROR RETRIEVING PET DATA.", err)
    }
  }

  getPet = async (idOfPet) => {
    try {

      const url = process.env.REACT_APP_API_URL + "/api/v1/pets/" + idOfPet
      // const url = "http://localhost:8000/api/v1/pets/"
      console.log(url)

      const petResponse = await fetch(url)

      const petJson = await petResponse.json()

      this.setState({
        pets: petJson.data,
        showPet: !this.state.showPet
      })

      console.log(this.state.pets)

    } catch(err) {
      console.log("ERROR RETRIEVING PET DATA.", err)
    }
  }

  getMyPets = async () => {
    try {

      const url = process.env.REACT_APP_API_URL + "/api/v1/pets/"
      // const url = "http://localhost:8000/api/v1/pets/"
      console.log(url)

      const petsResponse = await fetch(url, { credentials: 'include' })

      const petsJson = await petsResponse.json()

      this.setState({
        pets: petsJson.data,
        showPet: !this.state.showPet
      })

      console.log(this.state.pets)

    } catch(err) {
      console.log("Error getting dog data.", err)
    }
  }

  createUser = async (userToAdd) => {

    console.log(userToAdd)

    try {
      const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'

      console.log(url)

      const createUserResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userToAdd)
      })

      const createUserJson = await createUserResponse.json()

      console.log(createUserJson)

      if (createUserResponse.status === 200 || createUserResponse.status === 201) {
        console.log('CREATED USER', createUserJson.data)
      }
    } catch(err) {
      console.log('ERROR CREATING USER', err)
    }
  }

  loginUser = async (userToLogin) => {
    console.log(userToLogin)
    try {
      const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

      console.log(url)
      console.log(JSON.stringify(userToLogin))

      const loginUserResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userToLogin),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      console.log(loginUserResponse)

      const loginUserJson = await loginUserResponse.json()

      console.log(loginUserJson)
      console.log(loginUserJson.data.id)

      if (loginUserResponse.status === 200 || loginUserResponse.status === 201) {
        console.log('USER LOGGED IN')
        this.setState({
          loggedIn: !this.state.loggedIn,
          currentUserId: loginUserJson.data.id
        })
      }
      this.getPets()
    } catch(err) {
      console.log('ERROR LOGGING IN', err)
    }
  }

  logoutUser = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"

      console.log(url)

      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })

      console.log("logoutResponse", logoutResponse)

      const logoutJson = await logoutResponse.json()

      console.log("logoutJson", logoutJson)

      if(logoutResponse.status === 200) {
        this.setState({
          loggedIn: !this.state.loggedIn
        })
      }
    } catch(err) {
      console.error("ERROR LOGGING OUT", err)
    }
  }

  createPet = async (petToCreate) => {
    console.log(petToCreate)
    try {
      const url = process.env.REACT_APP_API_URL + '/api/v1/pets/'

      console.log(url)
      console.log(JSON.stringify(petToCreate))

      const createPetResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(petToCreate),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      console.log(createPetResponse)

      const createPetJson = await createPetResponse.json()

      console.log(createPetJson)

      if (createPetResponse.status === 200 || createPetResponse.status === 201) {
        console.log('PET CREATED')
        this.setState({
          pets: [...this.state.pets, createPetJson.data]
        })
      }
      this.getPets()
    } catch(err) {
      console.log('ERROR CREATING PET', err)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav
          loggedIn={ this.state.loggedIn }
          createUser={ this.createUser }
          loginUser={ this.loginUser }
          logoutUser={ this.logoutUser }
          createPet={ this.createPet }
          getMyPets={ this.getMyPets }
        />
        <Body
          pets={ this.state.pets }
          showPet={ this.state.showPet }
          loggedIn={ this.state.loggedIn }
          currentUserId={ this.state.currentUserId }
          getPet={ this.getPet }
          editPet={ this.editPet }
        />
      </React.Fragment>
    )
  }
}
