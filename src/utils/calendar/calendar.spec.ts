import Calendar from '.'
import Node from './node'

describe('Calendar util', () => {
    const calendar = new Calendar(2022)

    it('should has first of January', () => {
        const [firstOfJanuary] = calendar

        expect(firstOfJanuary).toBeInstanceOf(Node)
        expect(firstOfJanuary.week).toBe(52)
        expect(firstOfJanuary.month).toBe<Node['month']>(0)
    })

    it('should has thirty first of December', () => {
        const thirtyFirstOfDecember = calendar.at(-1)!

        expect(thirtyFirstOfDecember).toBeInstanceOf(Node)
        expect(thirtyFirstOfDecember.week).toBe(52)
        expect(thirtyFirstOfDecember.month).toBe<Node['month']>(11)
    })
})