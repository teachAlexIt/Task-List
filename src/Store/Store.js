import { MainRnder } from "../index";
let Store = {
  GroupList: [
    { id: '', name: 'Все', status: 'Group-list__item_active' },
    { id: '', name: 'Важные', status: 'Group-list__item_NotActive' },
    { id: '', name: 'Срочные', status: 'Group-list__item_NotActive' },
    { id: '', name: 'Собрание', status: 'Group-list__item_NotActive' },
    { id: '', name: 'Дом', status: 'Group-list__item_NotActive' },
    { id: '', name: 'Работа', status: 'Group-list__item_NotActive' },
    { id: '', name: '+', status: 'New-group' }
  ],
  ModalBlocks: [
    { name: 'wrapper', status: '_hide' },
    { name: 'NewGroup-Box', status: '_hide' },
    { name: 'NewTask-Box', status: '_hide' },
  ]
}

changeID(Store.GroupList);

export function GroupItemActiveChange(itemID) {//переклюсает активную гркапу
  for (let i = 0; i < Store.GroupList.length; i++) {
    if (Store.GroupList[i].id.toString() === itemID) {
      Store.GroupList[i].status = 'Group-list__item_active';
    } else if (Store.GroupList[i].status === 'New-group') {
      Store.GroupList[i].status = 'New-group';
    } else {
      Store.GroupList[i].status = 'Group-list__item_NotActive';
    }
  }
  MainRnder();
}

export function ModalBlockActiveChange(ModalBlockName, doStatus) {//вкулючает или отеключает мпонадьные окна
  Store.ModalBlocks[0].status = doStatus;
  if (doStatus === '_show') {
    for (let i = 0; i < Store.ModalBlocks.length; i++) {
      if (Store.ModalBlocks[i].name === ModalBlockName) {
        Store.ModalBlocks[i].status = doStatus;
      }
    }
  } else {
    for (let i = 0; i < Store.ModalBlocks.length; i++) {
      Store.ModalBlocks[i].status = doStatus;
    }
  }
  MainRnder();
}

export function AddGroupStore(nameGroup) {//добавляет новую группу
  let NewGroup = {
    id: 0,
    name: nameGroup,
    status: 'Group-list__item_active'
  };
  Store.GroupList.splice(-1, 0, NewGroup)
  changeID(Store.GroupList);
  NewGroupActive(Store.GroupList);
}

export function AddTaskStore(){
  
}
function changeID(array) {// меняет Id
  for (let i = 0; i < array.length; i++) {
    array[i].id = i;
  }
}
function NewGroupActive(array){//делает новую группу аетивной
  GroupItemActiveChange((array.length - 2).toString());
  ModalBlockActiveChange('', '_hide');
}
export default Store;