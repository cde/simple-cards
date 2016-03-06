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
      

      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-field col">
            <input placeholder="login" type="text" ref="login"/>
            <label>Github user</label>
          </div>
          <div className="input-field col">  
            <button type="submit" className="btn right">Add
              <i className="material-icons right">playlist_add</i>
            </button>
          </div>
        </form>

      </div>
      
    );
  }
}

