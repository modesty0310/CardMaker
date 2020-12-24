import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css'

const CardAddForm = ({ FileInput, onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({fileName:null, fileURL:null});

  const onFileChange = file => {
    setFile({
      fileName:file.name,
      fileURL:file.url
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name : nameRef.current.value || "", 
      company : companyRef.current.value || "", 
      them : themRef.current.value || "", 
      title : titleRef.current.value || "", 
      email : emailRef.current.value || "", 
      message : messageRef.current.value || "",
      fileName : file.fileName || "",
      fileURL : file.fileURL || "", 
    };
    onAdd(card);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name='name' placeholder='Name'/>
      <input  ref={companyRef} className={styles.input} type="text" name='company' placeholder='Company'/>
      <select ref={themRef} className={styles.select} name="them" placeholder='them'>
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name='title' placeholder='Title'/>
      <input ref={emailRef} className={styles.input} type="text" name='email' placeholder='Email'/>
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder='Message'></textarea>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={file.fileName} />
      </div>
        <Button name="Add" onClick={onSubmit} />
    </form>
  );  
};

export default CardAddForm;