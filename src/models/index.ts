export interface IItem {
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

export interface IInputValue {
  title: string
  shortDescription: string
  fullDescription: string
  id: string | null
}

export interface ICompletedPath {
  title: string
  shortDescription: string
  fullDescription: string
  id: string | null
  distance: number
  favorite?: boolean
  markersArr: [] | null
}

export interface IPrint {
  id: string
  value: string
}
