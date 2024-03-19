import React from 'react';
import { Card, Div, Title } from '@vkontakte/vkui';

const CourseCard = ({ title, img, url }) => {
  return (
    <Card
      mode={'shadow'}
      onClick={() => window.open(url, '_blank').focus()}
      style={{
        cursor: 'pointer',
      }}
    >
      <Div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <img src={img} alt={title} />
        <Title level={2}>{title}</Title>
      </Div>
    </Card>
  );
};

export default CourseCard;
