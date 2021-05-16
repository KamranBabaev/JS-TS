import {cheapCourses, courses, predicate} from "./04";

test('should take old men older then 90', () => {
    const ages = [18, 19, 91, 101, 33, 97, 90]

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(3)
    expect(oldAges[0]).toBe(91)
})

test('should take courses chipper 250', () => {

    const resultCourses = courses.filter(cheapCourses)

    expect(resultCourses.length).toBe(2)
    expect(resultCourses[0].title).toBe('CSS')
})