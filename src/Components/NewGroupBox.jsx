import React from 'react'
import { AddGroupStore, ModalBlockActiveChange } from '../Store/Store';

function NewGroupBox(props) {
  function ClouseButtonClick() {
    ModalBlockActiveChange('NewGroup-Box', '_hide')
  }
  function AddGroup(e) {
    if (e.type === 'click') {
      let groupName = e.target.parentNode.querySelector('input').value;
      if (groupName !== '') {
        AddGroupStore(groupName);
        e.target.parentNode.querySelector('input').value = '';
      } else {
        alert('Введите имя группы')
      }
    } else {
      if (e.code === 'Enter' && !e.shiftKey) {
        let groupName = e.target.value;
        if (groupName !== '') {
          AddGroupStore(groupName);
          e.target.value = '';
        } else {
          alert('Введите имя группы')
        }
      }
    }
  }

  return (
    <div className={'NewGroup-Box ' + props.status}>
      <button
        className='NewGroup-Box__clouse'
        onClick={ClouseButtonClick}>
        X
      </button>
      <h2>Новая групп</h2>
      <div className='NewGroup-Box__form'>
        <label>Имя Группы</label>
        <input onKeyDown={AddGroup} placeholder='Введите название' maxLength={14} />
        <button onClick={AddGroup} type='button'>Добавить</button>
      </div>
    </div>
  );
}

export default NewGroupBox;