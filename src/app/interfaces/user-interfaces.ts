export type UserData = UserDataObject[]

export interface UserDataObject {
  id?: number
  name?: string
  username?: string
  email?: string
  address?: Address
  phone?: string
  website?: string
  company?: Company
  status?: string
}

export interface Address {
  street?: string
  suite?: string
  city?: string
  zipcode?: string
  geo?: Geo
}

export interface Geo {
  lat?: string
  lng?: string
}

export interface Company {
  name?: string
  catchPhrase?: string
  bs?: string
}

export interface NavItem {
  path: string;
  label: string;
  icon: string;
}