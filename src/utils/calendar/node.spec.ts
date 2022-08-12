import Node from './node'

describe('Node util', () => {
    it('should return thirty first week', () => {
        const firstOfApril = new Node('2022-08-01')
        expect(firstOfApril.getWeek()).toBe(31)

        const secondOfApril = new Node('2022-08-02')
        expect(secondOfApril.getWeek()).toBe(31)

        const seventhOfApril = new Node('2022-08-07')
        expect(seventhOfApril.getWeek()).toBe(31)
    })

    it('should returt week', () => {
        const firstOfJanuary = new Node('2022-01-01')
        expect(firstOfJanuary.getWeek()).toBe(52)

        const thirdOfJanuary = new Node('2022-01-03')
        expect(thirdOfJanuary.getWeek()).toBe(1)

        const thirtyFirstOfDecember = new Node('2022-12-31')
        expect(thirtyFirstOfDecember.getWeek()).toBe(52)
    })
})