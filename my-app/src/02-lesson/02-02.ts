type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type govermentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBuildings: Array<govermentBuildingsType>
    citizensNumber: number
}