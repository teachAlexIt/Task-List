import React from 'react'
import { DeleteGroupStore, GroupItemActiveChange, ModalBlockActiveChange } from '../Store/Store';
function GroupListItem(props) {
  function ItemClick(e) {
    console.log(e.target.tagName);
    if (e.target.tagName != 'SPAN') {
      if (e.target.classList.contains('New-group')) {
        ModalBlockActiveChange('NewGroup-Box', '_show')
      } else {
        let itemID = e.target.id;
        GroupItemActiveChange(itemID)
      }
    }
  }
  function deleteSpanCcick(e) {
    let groupId = e.target.parentNode.id;
    alert('Группа удалится, задачи перенесуться в группу "Все"')
    DeleteGroupStore(groupId);
  }
  return (
    <div
      className={'Group-list__item' + ' ' + props.status}
      id={props.id}
      onClick={ItemClick}>
      {props.name}
      <span onClick={deleteSpanCcick}>{props.span}</span>
    </div>
  );
}

export default GroupListItem;