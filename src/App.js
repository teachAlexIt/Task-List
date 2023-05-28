import './App.css';
import GroupListItem from './Components/GroupListItem';
import NewGroupBox from './Components/NewGroupBox';
import TaskItem from './Components/TaskItem';
import NewTaskBox from './NewTaskBox';
import Store, { ModalBlockActiveChange } from './Store/Store';

function App() {
  let GroupList = Store.GroupList.map((Item) =>
    <GroupListItem
      id={Item.id}
      key={Item.id}
      name={Item.name}
      status={Item.status}
      span={Item.span} />);
  let Tasks = Store.Tasks.map((task) =>
    <TaskItem
      text={task.text}
      deadline={task.deadline}
      daysLeft={task.daysLeft}
      group={task.group}

      GroupListForSrlrct={Store.GroupList} />
  )
  function wrapperClick(e) {
    if (e.target.classList.contains('wrapper')) {
      ModalBlockActiveChange('', '_hide');
    }
  }
  function newTaskButtonCkick() {
    ModalBlockActiveChange('NewTask-Box', '_show')
  }
  return (
    <div className='App'>
      <div className={'wrapper ' + Store.ModalBlocks[0].status}
        onClick={wrapperClick}>
        <NewGroupBox status={Store.ModalBlocks[1].status} />
        <NewTaskBox status={Store.ModalBlocks[2].status} />
      </div>
      <h1>Мои задачи</h1>
      <div className='Task-box'>
        <div className='Task-box__head Group-list'>
          {GroupList}
        </div>
        <div className='Task-box__body'>
          <div className='Task-box__list Task-List'>
            {Tasks}
          </div>
          <button className='Task-box__button_new-task' onClick={newTaskButtonCkick}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

