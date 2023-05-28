import React, { useState } from 'react'
function TaskItem(props) {
  const [select, setSelect] = useState(props.group);
  const [taskText, taskTextChange] = useState(props.text);
  let Options = props.GroupListForSrlrct.map((group) =>
    <option>{group.name}</option>
  );
  return (
    <div className={'Task__item'}>
      <textarea className='Task__text' value={taskText} onInput={(e) => taskTextChange(e.currentTarget.value)}></textarea>
      <div className="Task__meneger">
        <h4>Крайний срок</h4>
        <input type="date" value={props.deadline}></input>
        <p>Осталось дней: <span>{props.daysLeft}</span></p>
        <h4>Категория</h4>
        <select onChange={(e) => setSelect(e.currentTarget.value)} value={select}>
          {Options}
        </select>
        <h4>Важность</h4>
        <span className={''}></span>
      </div>
    </div>
  );
}

export default TaskItem;