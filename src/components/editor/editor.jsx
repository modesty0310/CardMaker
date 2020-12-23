import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({FileInput, cards, onAdd, updateCard, deleteCard}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        Object.keys(cards).map(key => ( //return 값을 표시할때는 ().
          <CardEditForm key={key} FileInput={FileInput} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
        ))}
      <CardAddForm FileInput={FileInput} onAdd={onAdd}/>
    </section>
  )
}

export default Editor;