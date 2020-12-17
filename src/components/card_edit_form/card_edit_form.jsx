import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card, updateCard, deleteCard}) => {
  const {id, name, company, them, title, email, message, fileName, fileURL} = card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    if(event.currentTarget == null){
      return;
    };
    event.preventDefault();
    deleteCard({
      ...card,
      [event.currentTarget.name] : event.currentTarget.value,
    });
  };

  const onChange = (event) => {
    if(event.currentTarget == null){
      return;
    };
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name] : event.currentTarget.value,
    });

  };
  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name='name' value={name} onChange={onChange}/>
      <input ref={companyRef} className={styles.input} type="text" name='company' value={company} onChange={onChange}/>
      <select ref={themRef} className={styles.select} name="them" value={them} onChange={onChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name='title' value={title} onChange={onChange}/>
      <input ref={emailRef} className={styles.input} type="text" name='email' value={email} onChange={onChange}/>
      <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
        <Button name="Delete" onClick={onSubmit} />
    </form>
  );  
};

export default CardEditForm;