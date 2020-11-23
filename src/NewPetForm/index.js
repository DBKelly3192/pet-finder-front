import React, { Component } from 'react'
import { Button, Form, Label, Segment } from 'semantic-ui-react'

export default class NewPetForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      petName: '',
      aboutPet: '',
      dateLost: '',
      status: '',
      photo: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDropChange = (event, data) => {
    this.setState({
      status: data.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createPet(this.state)

    this.setState({
      petName: '',
      aboutPet: '',
      dateLost: '',
      status: '',
      photo: ''
    })
  }

  render() {

    const statusOptions = [
      { text: "Lost", value: "lost" },
      { text: "Found", value: "found" }
    ]

    return (
      <Segment>
        <h3>Create a New Lost or Found Pet Post</h3>
        <Form onSubmit= { this.handleSubmit }>
          <Label>Pet Name:</Label>
          <Form.Input
            type="text"
            name="petName"
            value={ this.value }
            placeholder="Enter the name of the pet."
            onChange={ this.handleChange }
          />
          <Label>Is this a pet that you have lost, or a pet that you have found?</Label>
          <Form.Select
            name="status"
            options={ statusOptions }
            placeholder="Lost or Found"
            onChange={ this.handleDropChange }
          />
          <Label>Date Lost or Found:</Label>
          <Form.Input
            type="text"
            name="dateLost"
            value={ this.state.dateLost }
            placeholder="Enter the date the pet was either lost or found."
            onChange={ this.handleChange }
          />
          <Label>Pet Description:</Label>
          <Form.Input
            control='textarea'
            name="aboutPet"
            rows='3'
            value={ this.state.aboutPet }
            placeholder="Enter a description of the pet."
            onChange={ this.handleChange }
          />
          <Label>Picture URL:</Label>
          <Form.Input
            type="text"
            name="photo"
            value={ this.state.photo }
            placeholder="Enter the URL of the picture."
            onChange={ this.handleChange }
          />
          <Button type="Submit">Create Pet Listing</Button>
        </Form>
      </Segment>
    )
  }
}
