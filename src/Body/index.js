import React from 'react'
import PetContainer from '../PetContainer'

export default function Body(props) {
  return (
    <PetContainer pets={ props.pets } loggedIn={ props.loggedIn } />
  )
}
