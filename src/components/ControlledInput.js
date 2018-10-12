// Code ControlledInput Component Here



class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
  
      handleFirstNameChange = event => {
      this.setState({
        firstName: event.target.value
      })
    }
     
    handleLastNameChange = event => {
      this.setState({
        lastName: event.target.value
      })
    }
 
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleFirstNameChange} name="firstName" value={this.state.firstName} />
        <input type="text" onChange={this.handleLastNameChange} name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}