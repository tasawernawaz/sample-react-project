import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"


import LoginForm from './loginForm'
import ResetModal from './resetModal'
import Price from './price'

class App extends React.Component {
    state = {
      showModal: false
  }

  toggleModal = () => {
      this.setState(currentState => ({
          showModal: !currentState.showModal
      }))
  }

  render () {
      return (
          <React.Fragment>
            <Price />
          <LoginForm toggleModal={this.toggleModal}/>
          <ResetModal showModal={this.state.showModal} toggleModal={this.toggleModal}/>
          </React.Fragment>

      )
  }
}

export default App;
