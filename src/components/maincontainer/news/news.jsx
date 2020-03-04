import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import '../../../css/news.css';
import RE3 from '../../../images/RE3.jpg'

const Cardnews = () => {
  return (
    <div className="News">
      <Card className="allcard">
        <CardImg src={RE3} alt="cardnews" />
        <CardBody>
          <CardTitle>News hot!!!!</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <div className="allpreview">
            <CardImg className="cardpreview" src={RE3} alt="cardpreview" />
            <CardImg className="cardpreview" src={RE3} alt="cardpreview" />
            <CardImg className="cardpreview" src={RE3} alt="cardpreview" />
            <CardImg className="cardpreview" src={RE3} alt="cardpreview" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardnews;