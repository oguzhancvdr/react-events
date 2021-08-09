

import { Component } from "react";

class EventBind extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /**
   * TODO List
   * create class component
   * 1. Binding in render method
   * 2. Binding in render method using arrow function
   * 3. Binding in the constructor
   * 4. Class property as an arrow function
   */

  handleClick(){
    this.setState({message: "Goodbye!"})
    console.log("this: ", this);
  }

  render(){
    return(
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.handleClick.bind(this)}>click</button> */}
        {/* <button onClick={() => this.handleClick()}>click</button> */}
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default EventBind;