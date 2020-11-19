import React, { Component } from 'react'
import { Button, Form, Label, Segment } from 'semantic-ui-react'

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

    this.setState({
      username: '',
      email: '',
      phone: '',
      password: ''
    })
  }

  render() {
    return (
      <Segment>
        <h3>Register New User</h3>
        <Form onSubmit= { this.handleSubmit }>
          <Label>Username:</Label>
          <Form.Input
            type="text"
            name="username"
            value={ this.state.username }
            placeholder="Enter a Username"
            onChange={ this.handleChange }
          />
          <Label>Email:</Label>
          <Form.Input
            type="text"
            name="email"
            value={ this.state.email }
            placeholder="Enter an Email"
            onChange={ this.handleChange }
          />
          <Label>Phone Number:</Label>
          <Form.Input
            type="text"
            name="phone"
            value={ this.state.phone }
            placeholder="Enter a Phone Number"
            onChange={ this.handleChange }
          />
          <Label>Password:</Label>
          <Form.Input
            type="text"
            name="password"
            value={ this.state.password }
            placeholder="Enter a Password"
            onChange={ this.handleChange }
          />
          <Button type="Submit">Register User</Button>
        </Form>
      </Segment>
    )
  }
}
