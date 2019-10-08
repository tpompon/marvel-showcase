import React, { createContext, Component } from "react"

export const Context = createContext(true)

class Provider extends Component {

  state = {
    pagination: "A",
    updatePagination: (pagination) => this.setState({ pagination })
  }

  render() {
    return (
      <Context.Provider value={ this.state }>
          { this.props.children }
      </Context.Provider>
    )
  }

}

export const Consumer = Context
export default Provider
