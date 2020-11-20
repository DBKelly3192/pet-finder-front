import React, { Component } from 'react'
import { Button, Form, Label, Segment } from 'semantic-ui-react'

export default class LoginUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
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

    this.props.loginUser(this.state)

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <Segment>
        <h3>Login User</h3>
        <Form onSubmit= { this.handleSubmit }>
          <Label>Email:</Label>
          <Form.Input
            type="text"
            name="email"
            value={ this.state.email }
            placeholder="Enter your email"
            onChange={ this.handleChange }
          />
          <Label>Password:</Label>
          <Form.Input
            type="text"
            name="password"
            value={ this.state.password }
            placeholder="Enter your password"
            onChange={ this.handleChange }
          />
          <Button type="Submit">Login User</Button>
        </Form>
      </Segment>
    )
  }
}
