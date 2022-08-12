import Node from './node'

export type Week = typeof Calendar.weeks[number]

class Calendar extends Array<Node> {
    constructor(year: number) {
        super()

        const end = new Node(`${year + 1}-01-01`)
        for (let node = new Node(`${year}-01-01`); node < end; node.setDate(node.getDate() + 1)) {
            this.push(new Node(node))
        }
    }

    static readonly weeks = [
        'sunday', 
        'monday', 
        'tuesday', 
        'wednesday', 
        'thursday', 
        'friday', 
        'saturday'
    ] as const

    static readonly months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ] as const
}

export default Calendar
