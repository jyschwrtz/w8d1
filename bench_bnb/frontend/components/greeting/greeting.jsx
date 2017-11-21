import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   this.props = nextProps;
  // }

  render() {
    const currentUser = this.props.currentUser;
    let content;
    if (currentUser) {
      content = (<div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>);
    } else {
      content = (<div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>);
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Greeting;
