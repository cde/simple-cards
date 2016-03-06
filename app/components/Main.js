import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
// import Card from './Card';


var Card = React.createClass({
  getInitialState: function(){
    return({})
  },
  componentDidMount: function(){
    var component = this;
    $.get("https://api.github.com/users/" + this.props.login, function(data){
      component.setState(data);
    });
  },
  render: function() {
    return (
      <li className="collection-item avatar">
        <img src={this.state.avatar_url} alt="" className="circle" />
        <span className="title">{this.state.name}</span>
        <p>{this.state.login} <br />
          <span className="title">
            {this.state.email}
          </span>
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
      
    )
  }
});
let mockLogins = [
  { id: 1, login: 'cde'},
  { id: 2, login: 'mojombo'}
]

var Main = React.createClass({
  getInitialState: function() {
    return {logins: mockLogins};
  },
  addCard: function(loginToAdd) {
    let loginsList = this.state.logins;
    loginsList.unshift({
      id: Date.now(),
      login: loginToAdd
    })
    this.setState({logins: loginsList});
  },
  
  render: function(){
    console.log( this.state.logins);
    var cards = this.state.logins.map(function(login) {
      return (<Card key={login.id} login={login.login} /> );
    });
    return(
      <div className="col-lg-6">
        <Form addCard={this.addCard}/>
        <ul className="collection">
          {cards}
        </ul>
      
      </div>
    )
  }
});

ReactDOM.render(<Main/>, document.getElementById("app"))