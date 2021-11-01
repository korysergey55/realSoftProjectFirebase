// import IList from 'models/index'
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
  @observable modal: boolean = false
  @observable item: any = null
  @observable distance: number = 0
  @observable userArrMarkers: any = null
  @observable userPath: any[] = []
  @observable filteredUserPath: any[] = []

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.item,
      _ => console.log(toJS(this.item))
    )
  }
  @action setModal() {
    this.modal = !this.modal
  }
  @action setItem(itemData: any) {
    this.item = itemData
  }
  @action setDistance(data: number) {
    this.distance = data
  }
  @action setUserMarkers(markerArr: any) {
    this.userArrMarkers = markerArr
  }
  @action setUserPath(data: any) {
    this.filteredUserPath = [...this.userPath, data]
    this.userPath = [...this.userPath, data]
  }
  @action getFilterUserPath(data: any) {
    const formatData = data.toLowerCase().trim()
    const filtered: any = this.userPath.filter(path =>
      path.title.toLowerCase().includes(formatData)
    )
    this.filteredUserPath = filtered
  }
  @action removeUserPath(data: string) {
    const remuve = this.filteredUserPath.filter(item => item.id !== data)
    this.filteredUserPath = remuve
  }
  @action setFavorite() {
    this.item.favorite = !this.item.favorite
  }
}

export default new SounterStore()
