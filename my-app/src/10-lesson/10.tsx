export type UserPropsType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserPropsType & {
    laptop: LaptopType
}

export const makeHairStyle = (users: UserPropsType, power: number) => {
    return {...users, hair: users.hair / power}
}

export const moveUser = (users: UserWithLaptopType, newAddress: string) => {
    return {
        ...users,
        address: {
            ...users.address,
            title: newAddress
        }
    }
}

export const upgradeBook = (users: UserWithLaptopType, newBook: string) => {
    return {
        ...users,
        laptop: {
            ...users.laptop,
            title: newBook
        }
    }
}