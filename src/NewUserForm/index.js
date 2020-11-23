import React, { Component } from 'react'
import { Button, Form, Header, Image, Input, Label, Modal } from 'semantic-ui-react'

export default class NewUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      phone: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createUser(this.state)
    this.props.toggleRegisterForm()

    this.setState({
      username: '',
      email: '',
      phone: '',
      password: ''
    })
  }

  render() {
    return (
      <Modal
        as={ Form }
        open={ this.props.displayRegisterForm }
        onSubmit={ this.handleSubmit }
      >
        <Modal.Header>Register New User</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="https://t4.ftcdn.net/jpg/02/11/73/73/360_F_211737333_nxBcIVfrybNy6nRiewn9Ynh20UJQCfSp.jpg" wrapped />
          <Modal.Description>
            <Header>Enter your information</Header>
            <Label>Username:</Label>
            <Input
              type="text"
              name="username"
              value={ this.state.username }
              placeholder="Enter a Username"
              onChange={ this.handleChange }
            />
            <Label>Email:</Label>
            <Input
              type="text"
              name="email"
              value={ this.state.email }
              placeholder="Enter an Email"
              onChange={ this.handleChange }
            />
            <Label>Phone Number:</Label>
            <Input
              type="text"
              name="phone"
              value={ this.state.phone }
              placeholder="Enter a Phone Number"
              onChange={ this.handleChange }
            />
            <Label>Password:</Label>
            <Input
              type="text"
              name="password"
              value={ this.state.password }
              placeholder="Enter a Password"
              onChange={ this.handleChange }
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={ this.props.toggleRegisterForm }>Cancel</Button>
          <Button
            content="Login"
            labelPosition="right"
            icon="checkmark"
            type="Submit"
            positive
          />
        </Modal.Actions>
      </Modal>
    )
  }
}
