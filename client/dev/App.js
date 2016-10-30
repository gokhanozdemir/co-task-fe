import React, {Component} from 'react';
import { Container, Button } from 'semantic-ui-react'
import VideoList from './components/VideoList';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      "status": "success"
    }
  }
  render() {

    return (
      <Container textAlign='left'>
        <Button>
          Click Here
        </Button>
        <LoginForm/>
        <VideoList/>

      </Container>

    );
  }
}

export default App;
