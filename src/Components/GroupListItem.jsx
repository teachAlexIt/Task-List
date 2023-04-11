import React from 'react'
import { GroupItemActiveChange } from '../Store/Store';
function GroupListItem(props) {
  function ItemClick(e) {
    if (e.target.classList.contains('New-group')) {

    } else {
      let itemID = e.target.id;
      GroupItemActiveChange(itemID)
    }
  }
  return (
    <div
      className={'Group-list__item' + ' ' + props.status}
      id={props.id}
      onClick={ItemClick}>
      {props.name}
    </div>
  );
}

export default GroupListItem;