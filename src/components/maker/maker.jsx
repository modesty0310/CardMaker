import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({FileInput, authService}) => {
const [cards, setCards] = useState({
  1: {
      id: '1',
      name: 'mode',
      company: 'kumoh',
      them: 'dark',
      title: 'front-end',
      email: 'rlatprua4@gmail.com',
      message: 'gogogo',
      fileName: null,
      fileURL: null
    },
    2:{
      id: '2',
      name: 'mode',
      company: 'kumoh',
      them: 'light',
      title: 'front-end',
      email: 'rlatprua4@gmail.com',
      message: 'gogogo',
      fileName: null,
      fileURL: 'mode.png'
    },
    3:{
      id: '3',
      name: 'mode',
      company: 'kumoh',
      them: 'colorful',
      title: 'front-end',
      email: 'rlatprua4@gmail.com',
      message: 'gogogo',
      fileName: null,
      fileURL: null
    },
});


const history = useHistory();

const onLogout = () => {
  authService.logout();
};


const createOrUpdateCard = (card) => {
  setCards(cards => {
    const updated = {...cards};
    updated[card.id] = card;
    return updated;
  });
};

const deleteCard = (card) => {
  setCards(cards => {
    const updated = {...cards};
    delete updated[card.id];
    return updated;
  });
};

useEffect(() => {
  authService.onAuthChange((user) => {
    if(!user) {
      history.push('/')
    };
  });
});

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.containner}>
          <Editor FileInput={FileInput} cards={cards} onAdd={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
          <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
};

export default Maker; 