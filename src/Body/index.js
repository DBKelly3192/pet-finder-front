import React, { Component } from 'react'
import PetContainer from '../PetContainer'
import EditPetForm from '../EditPetForm'

export default class Body extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayEditPetForm: false,
      petIdToEdit: -1
    }
  }

  toggleEditPetForm = (petToEdit) => {
    this.setState({
      displayEditPetForm: !this.state.displayEditPetForm,
      petIdToEdit: petToEdit-1
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.displayEditPetForm
          ? <EditPetForm
              pets={ this.props.pets }
              petIdToEdit={ this.state.petIdToEdit }
              displayEditPetForm={ this.state.displayEditPetForm }
              toggleEditPetForm={ this.toggleEditPetForm }
              editPet={ this.props.editPet }
            />
          : <PetContainer
              pets={ this.props.pets }
              loggedIn={ this.props.loggedIn }
              toggleEditPetForm={ this.toggleEditPetForm }
            />
        }
      </React.Fragment>
    )
  }
}
