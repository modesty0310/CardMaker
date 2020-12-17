import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({cards, onAdd, updateCard, deleteCard}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        Object.keys(cards).map(key => ( //return 값을 표시할때는 ().
          <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
        ))}
      < CardAddForm onAdd={onAdd}/>
    </section>
  )
}

export default Editor;