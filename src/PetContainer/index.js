import React from 'react'
import PetCard from '../PetCard'

export default function PetContainer(props) {
  return (
    <PetCard pets={ props.pets } loggedIn={ props.loggedIn } />
  )
}


// export default class PetContainer extends Component {
//   constructor(props) {
//   super(props)

//     this.state = {
//       pets: []
//     }
//   }

//   createUser = async (userToAdd) => {
//     try {
//       // const url = process.env.REACT_APP_API_URL + '/api/v1/users/register/'
//       const url = 'http://localhost:8000/api/v1/users/register'
//       console.log(url)
//       const createUserResponse = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userToAdd)
//       })
//       const createUserJson = await createUserResponse.json()
//       console.log(createUserJson)
//       if (createUserResponse.status === 200 || createUserResponse.status === 201) {
//         console.log('USER CREATED')
//         console.log('CREATED USER', createUserJson.data)
//       }
//     } catch(err) {
//       console.log('ERROR CREATING USER', err)
//     }
//   }

//   createPet = async (petToAdd) => {

//     console.log(petToAdd)

//     try {
//       const url = process.env.REACT_APP_API_URL + '/api/v1/pets/'
//       // const url = 'http://localhost:8000/api/v1/pets/'

//       console.log(url)

//       const createPetResponse = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify(petToAdd)
//       })

//       console.log(createPetResponse)

//       const createPetJson = await createPetResponse.json()

//       console.log(createPetJson)

//       if (createPetResponse.status === 200 || createPetResponse.status === 201) {
//         this.setState({
//           pets: [...this.state.pets, createPetJson.data]
//         })
//         console.log('PET CREATED')
//       }
//     } catch(err) {
//       console.log('ERROR CREATING PET', err)
//     }
//   }

//   loginUser = async (userToLogin) => {
//     console.log(userToLogin)
//     try {
//       const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
//       // const url = 'http://localhost:8000/api/v1/users/login/'

//       console.log(url)
//       console.log(JSON.stringify(userToLogin))

//       const loginUserResponse = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(userToLogin),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })

//       console.log(loginUserResponse)

//       const loginUserJson = await loginUserResponse.json()

//       console.log(loginUserJson)

//       if (loginUserResponse.status === 200 || loginUserResponse.status === 201) {
//         console.log('USER LOGGED IN')
//       }
//     } catch(err) {
//       console.log('ERROR LOGGING IN', err)
//     }
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <LoginUserForm loginUser={ this.loginUser } />
//         <NewUserForm createUser={ this.createUser } />
//         <NewPetForm createPet={ this.createPet } />
//         <PetCard name="Timofey" description="Very social, had on a tagged collar." zip="30309" image="https://i.imgur.com/bJfRyEI.jpg" />
//       </React.Fragment>
//     )
//   }

// import React, { Component } from 'react'
// import NewUserForm from '../NewUserForm'
// import NewPetForm from '../NewPetForm'
// import LoginUserForm from '../LoginUserForm'
// import PetCard from '../PetCard'
//
// export default class PetContainer extends Component {
//   constructor(props) {
//   super(props)
//
//     this.state = {
//       pets: []
//     }
//   }
//
//   createUser = async (userToAdd) => {
//     try {
//       // const url = process.env.REACT_APP_API_URL + '/api/v1/users/register/'
//       const url = 'http://localhost:8000/api/v1/users/register'
//       console.log(url)
//       const createUserResponse = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userToAdd)
//       })
//       const createUserJson = await createUserResponse.json()
//       console.log(createUserJson)
//       if (createUserResponse.status === 200 || createUserResponse.status === 201) {
//         console.log('USER CREATED')
//         console.log('CREATED USER', createUserJson.data)
//       }
//     } catch(err) {
//       console.log('ERROR CREATING USER', err)
//     }
//   }
//
//   createPet = async (petToAdd) => {
//     try {
//       // const url = process.env.API_URL + '/api/v1/pets'
//       const url = 'http://localhost:8000/api/v1/pets/'
//       const createPetResponse = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify(petToAdd)
//       })
//       const createPetJson = await createPetResponse.json()
//       if (createPetResponse.status === 200 || createPetResponse.status === 201) {
//         this.setState({
//           pets: [...this.state.pets, createPetJson.data]
//         })
//         console.log('PET CREATED')
//       }
//     } catch(err) {
//       console.log('ERROR CREATING PET', err)
//     }
//   }
//
//   loginUser = async (userToLogin) => {
//     console.log(userToLogin)
//     try {
//       const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
//       // const url = 'http://localhost:8000/api/v1/users/login/'
//
//       console.log(url)
//       console.log(JSON.stringify(userToLogin))
//
//       const loginUserResponse = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(userToLogin),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//
//       console.log(loginUserResponse)
//
//       const loginUserJson = await loginUserResponse.json()
//
//       console.log(loginUserJson)
//
//       if (loginUserResponse.status === 200 || loginUserResponse.status === 201) {
//         console.log('USER LOGGED IN')
//       }
//     } catch(err) {
//       console.log('ERROR LOGGING IN', err)
//     }
//   }
//
//   render() {
//     return (
//       <React.Fragment>
//         <LoginUserForm loginUser={ this.loginUser } />
//         <NewUserForm createUser={ this.createUser } />
//         <NewPetForm createPet={ this.createPet } />
//         <PetCard name="Timofey" description="Very social, had on a tagged collar." zip="30309" image="https://i.imgur.com/bJfRyEI.jpg" />
//       </React.Fragment>
//     )
//   }
//
// }
