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

class SounterStore {
  @observable item: IList | null = null
  @observable modal: boolean = false
  @observable userPath: any[] = []
  @observable distance: number = 0
  @observable roadMarkers: any = null

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
  @action setUserPath(data: any) {
    this.userPath = [...this.userPath, data]
  }
  @action setDistance(data: number) {
    this.distance = data
  }
  @action setUserMarkers(markerArr: any) {
    this.roadMarkers = markerArr
  }
}

export default new SounterStore()
