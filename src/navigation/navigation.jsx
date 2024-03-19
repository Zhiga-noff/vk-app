import React from 'react';
import { Button, ButtonGroup, Div, Link } from '@vkontakte/vkui';
import styles from '../App.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Div className={styles.containerButton}>
      <ButtonGroup className={styles.buttonGroup}>
        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          <Button>Новости</Button>
        </NavLink>
        <NavLink
          to={'/programs'}
          className={({ isActive, isPending }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          <Button>Программы</Button>
        </NavLink>
      </ButtonGroup>
      <ButtonGroup className={styles.buttonGroup}>
        <Button>
          <Link href={'https://tvzvezda.ru/'} target={'_blank'} className={styles.link}>
            Посетить сайт
          </Link>
        </Button>
      </ButtonGroup>
    </Div>
  );
};

export default Navigation;
