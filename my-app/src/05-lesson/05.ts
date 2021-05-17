export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Sam Smith', age: 25},
    {name: 'Lebron James', age: 41},
    {name: 'Leo Messi', age: 33},
]

// присваиваем каждому стек и делим имя и фамилию по разным ключам
const devs3 = people.map((man: ManType) => {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
})

//поприветствовать каждого из people
const message = people.map( man => `Hello, ${man.name.split(' ')[0]}. Welcome, my friend`)