import React from 'react';
import { Card, Div, Headline, Link } from '@vkontakte/vkui';
import styles from './NewsCard.module.scss';

const NewsCard = ({ title, url, subtitle }) => {
  return (
    <Card
      mode={'shadow'}
      // onClick={() => window.open(url, '_blank').focus()}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Div>
        <Link href={url} target={'_blank'} className={styles.innerCard}>
          <Headline level={'3'} className={styles.title}>
            {subtitle ? <b>{title}</b> : title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </Headline>
        </Link>
      </Div>
    </Card>
  );
};

export default NewsCard;
