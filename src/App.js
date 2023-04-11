import './App.css';
import GroupListItem from './Components/GroupListItem';
import NewGroupBox from './Components/NewGroupBox';
import Store from './Store/Store';

function App() {
  let GroupList = Store.GroupList.map((Item) =>
    <GroupListItem
      id={Item.id}
      key={Item.id}
      name={Item.name}
      status={Item.status} />)
  return (
    <div className='App'>
    <NewGroupBox status={Store.ModalBlocks[0].status}/>
      <h1>Мои задачи</h1>
      <div className='Task-box'>
        <div className='Task-box__head Group-list'>
          {GroupList}
        </div>
        <div className='Task-box__body'>

        </div>
      </div>
    </div>
  );
}

export default App;
