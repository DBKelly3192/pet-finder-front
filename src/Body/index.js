import React, { Component } from 'react'
import PetContainer from '../PetContainer'
import ShowPet from '../ShowPet'
// import EditPetForm from '../EditPetForm'

export default class Body extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayEditPetForm: false
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
          this.props.showPet
          ? <ShowPet
              pets={ this.props.pets }
              currentUserId={ this.props.currentUserId }
            />
          : <PetContainer
              pets={ this.props.pets }
              loggedIn={ this.props.loggedIn }
              getPet={ this.props.getPet }
              toggleEditPetForm={ this.toggleEditPetForm }
            />
        }
      </React.Fragment>
    )
  }
}

// <EditPetForm
//     pets={ this.props.pets }
//     petIdToEdit={ this.state.petIdToEdit }
//     displayEditPetForm={ this.state.displayEditPetForm }
//     toggleEditPetForm={ this.toggleEditPetForm }
//     editPet={ this.props.editPet }
//   />
