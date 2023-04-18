import { MainRnder } from "../index";
let Store = {
  GroupList: [
    { id: 0, name: 'Все', status: 'Group-list__item_active' },
    { id: 1, name: 'Собрание', status: 'Group-list__item_NotActive' },
    { id: 2, name: 'Дом', status: 'Group-list__item_NotActive' },
    { id: 3, name: 'Работа', status: 'Group-list__item_NotActive' },
    { id: 4, name: '+', status: 'New-group' }
  ],
  ModalBlocks: [
    {name: 'wrapper', status: '_hide'},
    {name: 'NewGroup-Box', status: '_hide'},
  ]
}

export function GroupItemActiveChange(itemID) {
  for (let i = 0; i < Store.GroupList.length; i++) {
    if (Store.GroupList[i].id.toString() === itemID) {
      Store.GroupList[i].status = 'Group-list__item_active';
    }else if(Store.GroupList[i].status === 'New-group'){
      Store.GroupList[i].status = 'New-group';
    }else{
      Store.GroupList[i].status = 'Group-list__item_NotActive';
    }
  }
  MainRnder();
}

export function ModalBlockActiveChange(ModalBlockName, doStatus){
  Store.ModalBlocks[0].status = doStatus;
  if (doStatus === '_show'){
    for (let i = 0; i < Store.ModalBlocks.length; i++) {
      if (Store.ModalBlocks[i].name === ModalBlockName){
        Store.ModalBlocks[i].status = doStatus;
      }
    }
  }else{
    for (let i = 0; i < Store.ModalBlocks.length; i++) {
      Store.ModalBlocks[i].status = doStatus;
    }
  }
  
  MainRnder();
}
export default Store;