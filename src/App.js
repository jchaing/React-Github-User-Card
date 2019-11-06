import React from 'react';
import axios from 'axios';
import GithubUserCard from '../src/components/GithubUserCard';
import './App.css';
import { Container } from 'reactstrap';

class App extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await Promise.all([
      axios.get('https://api.github.com/users/jchaing').then(res => {
        this.setState({ users: [res.data] });
      }),

      axios.get('https://api.github.com/users/jchaing/followers').then(res => {
        res.data.map(followerUrl =>
          axios.get(followerUrl.url).then(res => {
            this.setState({ users: [...this.state.users, res.data] });
          })
        );
      })
    ]);
  }
  
  
  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <Container>
          {this.state.users.map(user => (
            <GithubUserCard key={user.id} user={user} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
