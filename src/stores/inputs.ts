import { IPrint } from 'models/index'
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
  @observable inputs: IPrint[] = []
  @observable inputsValues: any = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.inputs,
    //   _ => console.log(toJS(this.inputs))
    // )
  }
  @action setInputs(data: IPrint[]) {
    this.inputs = data
  }
  @action setInputsValues(data: any) {
    this.inputsValues = data
  }
}

export default new InputsStore()
