type TechType = {
    id: number
    title: string
}

type CityLocalType = {
    title: string
    country: string
}

type AddressType = {
    street: string
    city: CityLocalType
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    name: 'Nick',
    age: 27,
    isActive: false,
    address: {
        street: 'pr.Mira',
        city: {
            title: 'SPB',
            country: 'Russia'
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "React"},
    ],
}
