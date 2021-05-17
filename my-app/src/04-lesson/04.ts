
export const predicate = (age: number) => age > 90
const oldAges = []
type CourseType = {
    title: string
    price: number
}


export const courses = [
    {title: 'CSS', age: 200},
    {title: 'HTML', age: 100},
    {title: 'JS', age: 350},]
export const cheapCourses = (course: CourseType) => course.age < 250
