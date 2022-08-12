import { months } from '.'

class Node extends Date {
    public readonly month
    public readonly week
    public readonly day
    public readonly date
    public readonly year

    constructor(...date: ConstructorParameters<typeof Date>) {
        super(...date)

        this.month = this.getMonth()
        this.week = this.getWeek()
        this.day = this.getDay()
        this.date = this.getDate()
        this.year = this.getFullYear()
    }

    public getWeek(year = this.getFullYear()): number {
        const firstOfJanuary = new Date(year, 0, 1)

        const startDayOfWeek = firstOfJanuary.getDay() - 1
        const difference = this.getTime() - firstOfJanuary.getTime()

        const days = difference / 1000 / 60 / 60 / 24

        const week = Math.floor((days + startDayOfWeek) / 7)

        return week === 0 
            ? this.getWeek(year - 1)
            : week
    }
}

export default Node
