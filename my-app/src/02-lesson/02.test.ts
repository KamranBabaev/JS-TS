import {CityType} from "./02-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'London',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'white street'}}
            },
        ],
        govermentBuildings: [{type: "HOSPITAL"}],
        citizensNumber: 1000000
    }
})

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(1)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('white street')

    expect(city.govermentBuildings[0].type).toBe('HOSPITAL')
})