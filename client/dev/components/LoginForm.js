import React, {Component} from 'react'
import axios from 'axios';
import {Button, Form, Input, Message} from 'semantic-ui-react'

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  state = {
    serializedForm: {}
  }

  // This will be called when the user clicks on the login button
  login(e) {
    e.preventDefault();
    // Here, we call an external AuthService. We’ll create it in the next step
    // Auth.login(this.state.username, this.state.password)
    //   .catch(function(err) {
    //     console.log("Error logging in", err);
    //   });
  }

  handleChange = (e, {value}) => this.setState({value})

  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({serializedForm})

    axios.post('http://localhost:3000/user/auth', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const {serializedForm, value} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input label="Name" name="username" placeholder="Name" value="ali"/>
          <Form.Input label="Enter Password" placeholder="****" name="password" type="password" value="5f4dcc3b5aa765d61d8327deb882cf99"/>
        </Form.Group>

        <Button primary type='submit'>Submit</Button>

        <Message>
          <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
        </Message>
      </Form>
    )
  }
}

export default LoginForm
