import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({cards}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        cards.map(card => ( //return 값을 표시할때는 ().
          <CardEditForm card={card} />
        ))
      } 
      </section>
  )
}

export default Editor;