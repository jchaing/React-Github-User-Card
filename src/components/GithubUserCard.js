import React from 'react';
import { Card, CardImg, CardBody, Row, CardLink } from 'reactstrap';

const GithubUserCard = ({ user }) => {
  return (
    <div className="mb-5">
      <Card>
        <Row className="text-black bg-light px-5 py-5">
          <CardImg
            className="col-6"
            src={user.avatar_url}
            alt={`${user.name} picture`}
          />
          <CardBody className="col-6">
            <h2>{user.name}</h2>
            <p>
              <strong>Github ID:</strong> {user.login}
            </p>
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <CardLink href={user.html_url}>Github Profile</CardLink>
          </CardBody>
          <CardImg
            className="mt-5"
            src={`http://ghchart.rshah.org/${user.login}`}
            alt={`${user.name}'s Github Chart`}
          />
        </Row>
      </Card>
    </div>
  );
};

export default GithubUserCard;
