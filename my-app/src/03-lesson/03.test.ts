import {StudentType} from "../02-lesson/02";
import {addSkill} from "./03";

let student: StudentType
beforeEach( () => {
    student = {
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
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'Node.js')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('Node.js')
    expect(student.technologies[3].id).toBeDefined()

})