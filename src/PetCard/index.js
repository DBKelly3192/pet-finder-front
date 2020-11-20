import React, { Component } from 'react'
import { Card, Image, Segment } from 'semantic-ui-react'

export default class PetCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Segment>
                <Card>
                    <Image src={this.props.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta>Missing in {this.props.zip}</Card.Meta>
                        <Card.Description>
                            {this.props.description}
                      </Card.Description>
                    </Card.Content>
                </Card>
            </Segment>
        )
    }
}