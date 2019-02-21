import {action, observable} from "mobx";
import {getStatus} from "./provider";


class Store {

  @observable status: number = null;
  @observable regions = [];
  @observable cities = [];
  @observable items = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Миша'},
    {id: 4, name: 'Коля'},
    {id: 5, name: 'Толя'},
    {id: 6, name: 'Богдан'}];

  @observable banks = [];
  @observable progress: boolean = false;
  @observable error: boolean = false;
  @observable done: boolean = false;
  @observable ready: boolean = false;
  @observable name: string = 'Вася';
  @observable serverErrors = [];

  @action deleteItem(itemId: number) {
    this.items = this.items.filter(item => item.id != itemId)
  };

  @action changeName(name: string) {
    this.name = name;
  };

  @action
  async loadTestData() {
    this.progress = true;
    let {status} = await getStatus();
    this.status = status;
    this.progress = false;
  }
}

export {Store};