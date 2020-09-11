import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    const { errors } = this.props;

    return (
      <div className='row'>
        <form className='col s4' onSubmit={this.onSubmit.bind(this)}>
          <div className='input-field'>
            <input
              placeholder='Email'
              value={this.state.email}
              type='email'
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className='input-field'>
            <input
              placeholder='Password'
              value={this.state.password}
              type='password'
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className='errors'>
            {errors && errors.map((error) => <div key={error}>{error}</div>)}
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
