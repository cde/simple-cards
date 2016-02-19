import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

// var React = require('react');
// var ReactDOM = require('react-dom');

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
      <div>
        <img src={this.state.avatar_url} width="80" />
        <h3>{this.state.name}</h3>
        <hr/>
      </div>

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
      return (<Card key={login.id} login={login.login} />);
    });
    return(
      <div>
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    )
  }
});

ReactDOM.render(<Main/>, document.getElementById("app"))