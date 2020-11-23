import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import LoginUserForm from '../LoginUserForm'
import NewUserForm from '../NewUserForm'
import NewPetForm from '../NewPetForm'

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayLoginUserForm: false,
      displayRegisterUserForm: false,
      displayCreatePetForm: false
    }
  }

  toggleLoginUserForm = () => {
    this.setState({
      displayLoginUserForm: !this.state.displayLoginUserForm
    })
  }

  toggleRegisterUserForm = () => {
    this.setState({
      displayRegisterUserForm: !this.state.displayRegisterUserForm
    })
  }

  toggleCreatePetForm = () => {
    this.setState({
      displayCreatePetForm: !this.state.displayCreatePetForm
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.loggedIn
          ?
          <React.Fragment>
            <Button size='massive' onClick={ this.toggleCreatePetForm }>Create Pet Listing</Button>
            <Button size='massive' onClick={ this.props.logoutUser }>Logout User</Button>
          </React.Fragment>
          :
            <React.Fragment>
              <Button size='massive' onClick={ this.toggleLoginUserForm }>Login</Button>
              <Button size='massive' onClick={ this.toggleRegisterUserForm }>Register</Button>
            </React.Fragment>
        }
        {
          this.state.displayLoginUserForm
          && <LoginUserForm
                loginUser={ this.props.loginUser }
                toggleLoginUserForm={ this.toggleLoginUserForm }
                displayLoginUserForm={ this.state.displayLoginUserForm }
              />
        }
        {
          this.state.displayRegisterUserForm
          && <NewUserForm
                createUser={ this.props.createUser }
                toggleRegisterUserForm={ this.toggleRegisterUserForm }
                displayRegisterUserForm={ this.state.displayRegisterUserForm }
              />
        }
        {
          this.state.displayCreatePetForm
          && <NewPetForm
                createPet={ this.props.createPet }
                toggleCreatePetForm={ this.toggleCreatePetForm }
                displayCreatePetForm={ this.state.displayCreatePetForm }
              />
        }
      </React.Fragment>
    )
  }
}
