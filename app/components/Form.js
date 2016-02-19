import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let loginInput = ReactDOM.findDOMNode(this.refs.login);
    console.log(loginInput.value);
    this.props.addCard(loginInput.value);
    loginInput.value = "";
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder="github login" ref="login" />
        <button>Add</button>
      </form>
    );
  }
}

