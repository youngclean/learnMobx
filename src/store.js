import { observable, action} from 'mobx';

export default class Store {
   @observable list = []

   @action addPost(string) {
    this.list.push(string)
  }
}