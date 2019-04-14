import React from 'react'
import ModelComp from '../Modal/ModalComp'
import { Button, Grid } from 'semantic-ui-react';

class ModalSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      valueIntoModal: "123456abcdef"
    }
  }

  render() {
    return([
        <Button // Button to click to activate the Modal
          key='button1'
          primary
          content='Cash Out!'
          onClick={
            () => {
              this.setState({ modalOpen: true })
            }
          }
        />,
        <ModelComp // The invisible modal itself
          key='modal1'
          modalOpen={this.state.modalOpen}
          handleClose={
            () => {
              this.setState({ modalOpen: false })
            }
          }
          valueIntoModal={this.state.valueIntoModal}
        />
    ])
  }
}

export default ModalSection