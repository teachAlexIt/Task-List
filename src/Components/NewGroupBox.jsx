import React from 'react'
import { ModalBlockActiveChange } from '../Store/Store';
function NewGroupBox(props) {
  function ClouseButtonClick(){
    ModalBlockActiveChange('NewGroup-Box', '_hide')
  }
  return (
    <div className={'NewGroup-Box' + ' ' + props.status}>
      <button
        className='NewGroup-Box__clouse'
        onClick={ClouseButtonClick}>
        X
      </button>
      <h2>Новая групп</h2>
      <form>
        <label>Имя Группы</label>
        <input placeholder='Введите название' />
        <button>Добавить</button>
      </form>
    </div>
  );
}

export default NewGroupBox;