import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {hide: false, show: false}

  showFirstName = () => {
    this.setState(prevState => ({hide: !prevState.hide}))
  }

  showLastName = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {hide, show} = this.state
    const firstName = hide ? (
      <div className="name-card">
        <p className="name">Joe</p>
      </div>
    ) : null
    const lastName = show ? (
      <div className="name-card">
        <p className="name">Jonas</p>
      </div>
    ) : null
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="details-container">
          <div className="card">
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName}
          </div>
          <div className="card">
            <button
              type="button"
              className="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
