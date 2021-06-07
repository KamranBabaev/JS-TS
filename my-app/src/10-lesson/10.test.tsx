import {makeHairStyle, upgradeBook, moveUser, UserPropsType, UserWithLaptopType} from "./10";

test('reference type test', () => {
    let user: UserPropsType = {
        name: 'Nick',
        hair: 32,
        address: {
            title: 'SPB'
        }
    }

    const newUser = makeHairStyle(user, 2)

    expect(newUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Sam',
        hair: 32,
        address: {
            title: 'SPB'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Moscow')
})

test('change laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Sam',
        hair: 32,
        address: {
            title: 'SPB'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedBook = upgradeBook(user, 'Acer')

    expect(user).not.toBe(upgradedBook)
    expect(user.address).toBe(upgradedBook.address)
    expect(user.laptop).not.toBe(upgradedBook.laptop)
    expect(upgradedBook.laptop.title).toBe('Acer')
})