
export const predicate = (age: number) => age > 90
const oldAges = []
type CourseType = {
    title: string
    price: number
}


export const courses = [
    {title: 'CSS', price: 200},
    {title: 'HTML', price: 100},
    {title: 'JS', price: 350},]
export const cheapCourses = (course: CourseType) => course.price < 250
