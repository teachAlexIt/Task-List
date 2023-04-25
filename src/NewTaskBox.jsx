import React from 'react';
import { ModalBlockActiveChange } from './Store/Store';
function NewTaskBox(props) {
  function ClouseButtonClick() {
    ModalBlockActiveChange('NewGroup-Box', '_hide')
  }
  function AddTask(e) {
    if (e.type === 'click') {
      let taskText = e.target.parentNode.querySelector('textarea').value;
      if (taskText !== '') {
        // 
        e.target.parentNode.querySelector('textarea').value = '';
      } else {
        alert('Введите описание задачи')
      }
    } else {
      if (e.code === 'Enter' && !e.shiftKey) {
        let taskText = e.target.value;
        if (taskText !== '') {
          // 
          e.target.value = '';
        } else {
          alert('Введите описание задачи')
        }
      }
    }
  }
  return (
    <div className={'NewTask-Box ' + props.status}>
      <button
        className='NewGroup-Box__clouse'
        onClick={ClouseButtonClick}>
        X
      </button>
      <h2>Новая задача</h2>
      <div className='NewTask-Box__form'>
        <label>Оришите задачу</label>
        <textarea onKeyDown={AddTask} placeholder='Введите задачу' maxLength={14}></textarea>
        <label>Важная задача</label>
        <input type='checkbox'></input>
        <label>Категория задачи</label>
        <select>
          <option></option>
        </select>
        <label>Крайний срок</label>
        <input type='date'></input>
        <button onClick={AddTask} type='button'>Добавить задачу</button>
      </div>
    </div>
  );
}
export default NewTaskBox;