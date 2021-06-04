
const increaseAge = (u: userType) => {
    u.age++
}

// два микротеста, у юзера есть возраст, функция increaseAge увеличивает его на 1
// и мы проверям, что после вызова этой функции приходит новый age, на 1 больше
// во втором тесте проверяем, что объект это ссылочный тип данных, поэтому по ссылке
// мы меняем age, а тестом проверяем, что он изменился
type userType = {
    name: string
    age: number
}

test('obj test', () => {

    let user: userType = {
        name: 'Kam',
        age: 27,
    }

    increaseAge(user)

    expect(user.age).toBe(28)

    const superman = user

    superman.age = 1000
    expect(user.age).toBe(1000)
})


// пушим новый объект в массив и тестируем, что под нужным индексом точно
// лежит нужный нам объект
type UsersType = Array<userType>

test('array test', () => {

    let users: UsersType = [
        {name: 'Kam', age: 27,},
        {name: 'Sam', age: 33,},
    ]

    let admins = users
    admins.push( {name: 'Katya', age: 29} )

    expect(users[2]).toEqual({name: 'Katya', age: 29})

})