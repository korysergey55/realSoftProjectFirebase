import {
  makeAutoObservable,
  observable,
  action,
  // reaction,
  // toJS,
  // configure,
  // computed,
  // runInAction,
} from 'mobx'

class InputsStore {
  @observable inputs: object[] = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.inputs,
    //   _ => console.log(toJS(this.inputs))
    // )
  }
  @action setInputs(data: object[]) {
    this.inputs = data
  }
}

export default new InputsStore()
