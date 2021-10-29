export default interface IList {
  id?: number
  title: string
  shortDescription: string
  fullDescription?: string
  distance?: number
  favorite?: boolean
  markersArr?: []
  lat?: any
  lng?: any
}

export default interface IListCompleted {
  id?: number
  title: string
  shortDescription: string
  fullDescription?: string
  distance?: number
  favorite?: boolean
  markersArr?: []
  lat?: any
  lng?: any
}
