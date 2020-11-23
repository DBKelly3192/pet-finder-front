import './App.css'
import React, { Component } from 'react'
import Body from './Body'
import Nav from './Nav'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      pets: []
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
        }
      })

      console.log(loginUserResponse)

      const loginUserJson = await loginUserResponse.json()

      console.log(loginUserJson)

      if (loginUserResponse.status === 200 || loginUserResponse.status === 201) {
        console.log('USER LOGGED IN')
        this.setState({
          loggedIn: !this.state.loggedIn
        })
      }
      this.getPets()
    } catch(err) {
      console.log('ERROR LOGGING IN', err)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav
          loggedIn={ this.state.loggedIn }
          createUser={ this.createUser }
          loginUser={ this.loginUser }
        />
        <Body pets={ this.state.pets } loggedIn={ this.state.loggedIn }/>
      </React.Fragment>
    )
  }
}
