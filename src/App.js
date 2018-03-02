import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const HepCConditionDetected = props => (
  <Modal {...props} closeIcon>
    <Header icon='exclamation triangle' content='Hepatitis C Risk Alert' />
    <Modal.Content>
      <p>
        Patient condition [generic-condition] detected. Patients with
        [generic-condition] are recommended for screening. Common screenings for
        condition [generic-condition] are:
      </p>
      <ol>
        <li>[screening-procedure-A]</li>
        <li>[screening-procedure-B]</li>
      </ol>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={props.onClose}>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green'>
        Order labwork <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

const HepCEventDetected = props => (
  <Modal {...props} closeIcon>
    <Header icon='heartbeat' content='Hepatitis C Screen Required' />
    <Modal.Content>
      <p>
        A one time Hepatitis C screen is required for patient [FULL NAME].
        Patient [FULL NAME] was born between 1940 and 1965, and has the
        following conditions, which require screening:
      </p>
      <ol>
        <li>[condition-x]</li>
      </ol>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={props.onClose}>
        <Icon name='clipboard' /> Enter past screening
      </Button>
      <Button color='green'>
        Order labwork <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModalA: false,
      showModalB: false
    }
  }
  patch (key, value) {
    this.setState({ [key]: value })
  }
  toggleModalA () {
    this.patch('showModalA', !this.state.showModalA)
  }
  toggleModalB () {
    this.patch('showModalB', !this.state.showModalB)
  }
  render () {
    let modalA = null
    let modalB = null
    if (this.state.showModalA) {
      modalA = (
        <HepCConditionDetected open onClose={() => this.toggleModalA()} />
      )
    }
    if (this.state.showModalB) { modalB = <HepCEventDetected open onClose={() => this.toggleModalB()} /> }
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <Button onClick={() => this.toggleModalA()}>Launch Modal A</Button>
          <Button onClick={() => this.toggleModalB()}>Launch Modal B</Button>
        </p>
        {modalA}
        {modalB}
      </div>
    )
  }
}

export default App
