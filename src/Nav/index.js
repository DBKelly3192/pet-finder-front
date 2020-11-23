import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import LoginUserForm from '../LoginUserForm'
import NewUserForm from '../NewUserForm'

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayLoginForm: false,
      displayRegisterForm: false
    }
  }

  toggleLoginForm = () => {
    this.setState({
      displayLoginForm: !this.state.displayLoginForm
    })
  }

  toggleRegisterForm = () => {
    this.setState({
      displayRegisterForm: !this.state.displayRegisterForm
    })
  }

  render() {
    return (
      <React.Fragment>
        <Button size='massive' onClick={ this.toggleLoginForm }>Login</Button>
        <Button size='massive' onClick={ this.toggleRegisterForm }>Register</Button>
        {
          this.state.displayLoginForm
          && <LoginUserForm
                loginUser={ this.props.loginUser }
                toggleLoginForm={ this.toggleLoginForm }
                displayLoginForm={ this.state.displayLoginForm }
              />
        }
        {
          this.state.displayRegisterForm
          && <NewUserForm
                createUser={ this.props.createUser }
                toggleRegisterForm={ this.toggleRegisterForm }
                displayRegisterForm={ this.state.displayRegisterForm }
              />
        }
      </React.Fragment>
    )
  }
}
