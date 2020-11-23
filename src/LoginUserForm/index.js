import React, { Component } from 'react'
import { Button, Form, Header, Image, Input, Label, Modal } from 'semantic-ui-react'

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
    this.props.toggleLoginForm()

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <Modal
        as={ Form }
        open={ this.props.displayLoginForm }
        onSubmit={ this.handleSubmit }
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="https://t4.ftcdn.net/jpg/02/11/73/73/360_F_211737333_nxBcIVfrybNy6nRiewn9Ynh20UJQCfSp.jpg" wrapped />
          <Modal.Description>
            <Header>Enter your information</Header>
            <Label>Email:</Label>
            <Input
              type="text"
              name="email"
              value={ this.state.email }
              placeholder="Enter your email"
              onChange={ this.handleChange }
            />
            <Label>Password:</Label>
            <Input
              type="text"
              name="password"
              value={ this.state.password }
              placeholder="Enter your password"
              onChange={ this.handleChange }
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={ this.props.toggleLoginForm }>Cancel</Button>
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

// <Segment>
//   <h3>Login User</h3>
//   <Form onSubmit= { this.handleSubmit }>
//     <Label>Email:</Label>
//     <Form.Input
//       type="text"
//       name="email"
//       value={ this.state.email }
//       placeholder="Enter your email"
//       onChange={ this.handleChange }
//     />
//     <Label>Password:</Label>
//     <Form.Input
//       type="text"
//       name="password"
//       value={ this.state.password }
//       placeholder="Enter your password"
//       onChange={ this.handleChange }
//     />
//     <Button type="Submit">Login User</Button>
//   </Form>
// </Segment>

// import React from 'react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
//
// function ModalExampleModal() {
//   const [open, setOpen] = React.useState(false)
//
//   return (
//     <Modal
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       trigger={<Button>Show Modal</Button>}
//     >
//       <Modal.Header>Login</Modal.Header>
//       <Modal.Content image>
//         <Image size='medium' src='https://t4.ftcdn.net/jpg/02/11/73/73/360_F_211737333_nxBcIVfrybNy6nRiewn9Ynh20UJQCfSp.jpg' wrapped />
//         <Modal.Description>
//           <Header>Default Profile Image</Header>
//           <Label>Email:</Label>
//           <Input
//             type="text"
//             name="email"
//             value={ this.state.email }
//             placeholder="Enter your email"
//             onChange={ this.handleChange }
//           />
//           <Label>Password:</Label>
//           <Input
//             type="text"
//             name="password"
//             value={ this.state.password }
//             placeholder="Enter your password"
//             onChange={ this.handleChange }
//           />
//           <p>Is it okay to use this photo?</p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='black' onClick={  }>Cancel</Button>
//         <Button
//           content="Login"
//           labelPosition='right'
//           icon='checkmark'
//           onClick={ this.handleSubmit }
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   )
// }
//
// export default ModalExampleModal
