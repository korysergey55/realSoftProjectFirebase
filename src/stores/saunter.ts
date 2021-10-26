import IList from 'models/index'
import {
  makeAutoObservable,
  observable,
  action,
  // configure,
  // computed,
  // runInAction,
  reaction,
  toJS,
} from 'mobx'

class SounterState {
  @observable item: any | null = null
  @observable modal: boolean = false

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.item,
      _ => console.log(toJS(this.item))
    )
  }
  @action setItem(itemData: IList) {
    this.item = { ...itemData }
  }
  @action setModal() {
    this.modal = !this.modal
  }
}

export default new SounterState()
