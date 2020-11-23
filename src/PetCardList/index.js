import React, { Component } from 'react'
import PetCard from '../PetCard'

export default class PetCardList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="CardContainer">
                {
                    this.props.pets.map(pet =>
                        <PetCard name={pet.petName} description={pet.aboutPet} zip={pet.zip} image={pet.photo} />)
                }
            </div>
        )
    }
}