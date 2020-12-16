import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'

const Maker = ({authService}) => {
const [cards, setCards] = useState([
  {
  id: '1',
  name: 'mode',
  company: 'kumoh',
  them: 'dark',
  title: 'front-end',
  email: 'rlatprua4@gmail.com',
  message: 'gogogo',
  fileName: 'mode',
  fileURL: null
  },
  {
    id: '2',
    name: 'mode',
    company: 'kumoh',
    them: 'light',
    title: 'front-end',
    email: 'rlatprua4@gmail.com',
    message: 'gogogo',
    fileName: 'mode',
    fileURL: 'mode.png'
  },
  {
    id: '3',
    name: 'mode',
    company: 'kumoh',
    them: 'colorful',
    title: 'front-end',
    email: 'rlatprua4@gmail.com',
    message: 'gogogo',
    fileName: 'mode',
    fileURL: null
  }
])


const history = useHistory();

const onLogout = () => {
  authService.logout();
};

useEffect(() => {
  authService.onAuthChange((user) => {
    if(!user) {
      history.push('/')
    }
  })
});
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.containner}>
          <Editor cards={cards}/>
          <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  )
};

export default Maker; 