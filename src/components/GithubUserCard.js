import React from 'react';

const GithubUserCard = ({user}) => {
  // console.log(props.user);
  return (
    <div>
      <img src={user.avatar_url} alt="" />
      <h2>{user.name}</h2>
      <h3>{user.bio}</h3>
      <p>Github ID: {user.login}</p>
      <p>{user.location}</p>
      <a href={user.html_url}>{user.html_url}</a>
    </div>
  );
};

export default GithubUserCard;
