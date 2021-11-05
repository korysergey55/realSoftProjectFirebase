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
  @observable filteredUserPath: any[] = localStorage.getItem('userPath')
    ? JSON.parse(localStorage.getItem('userPath') as string)
    : []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.item,
    //   _ => console.log(toJS(this.item))
    // )
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
    this.filteredUserPath = [...data]
    this.userPath = [...data]
    localStorage.setItem('userPath', JSON.stringify(this.userPath))
  }
  @action addUserPath(data: any) {
    this.setUserPath([...this.userPath, data])
    // this.filteredUserPath = [...this.userPath, data]
    // this.userPath = [...this.userPath, data]
    // localStorage.setItem('userPath', JSON.stringify(this.userPath))
  }
  @action removeUserPath(data: string) {
    const remuved = this.filteredUserPath.filter(item => item.id !== data)
    this.setUserPath(remuved)
    // this.filteredUserPath = remuved
    // localStorage.setItem('userPath', JSON.stringify(remuved))
  }
  @action setFavorite() {
    this.item.favorite = !this.item.favorite
  }
  @action getFilterUserPath(data: any) {
    const formatData = data.toLowerCase().trim()
    const filtered: any = this.userPath.filter(path =>
      path.title.toLowerCase().includes(formatData)
    )
    this.filteredUserPath = filtered
  }
}

export default new SounterStore()
