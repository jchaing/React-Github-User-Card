import React from 'react';
import axios from 'axios';
import GithubUserCard from '../src/components/GithubUserCard';
import './App.css';

class App extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await Promise.all([
      axios.get('https://api.github.com/users/jchaing').then(res => {
        console.log(res.data);
        this.setState({ users: [res.data] });
      }),

      axios.get('https://api.github.com/users/jchaing/followers').then(res => {
        console.log(res.data);
        res.data.map(followerUrl =>
          axios.get(followerUrl.url).then(res => {
            console.log(res.data);
            this.setState({ users: [...this.state.users, res.data] });
          })
        );
      })
    ]);
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        {this.state.users.map(user => (
          <GithubUserCard user={user} />
        ))}
      </div>
    );
  }
}

export default App;
