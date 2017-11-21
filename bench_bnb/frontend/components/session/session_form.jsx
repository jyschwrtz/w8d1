import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleInput(input) {
    return (e) => {
      this.setState({[input]: e.target.value});
    };
  }

  render() {
    const { loggedIn, formType } = this.props;
    const { username, password } = this.state;
    const otherForm = formType === "Log In" ? "signup" : "login";
    let errors;
    if (this.props.errors.session !== []) {
      errors = this.props.errors.session;
    }
    return(
      <div>
        <header>
          <Link to={`/${otherForm}`}>{otherForm}</Link>
        </header>
        <h1>{formType}</h1>
          <ul>
            {
              errors.map((error, idx) => (
                <li key={idx}>{error}</li>
                ))
            }
          </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              onChange={this.handleInput("username")}
              value={username}/>
          </label>
          <label>Password:
            <input
              type="password"
              onChange={this.handleInput("password")} value={password}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
