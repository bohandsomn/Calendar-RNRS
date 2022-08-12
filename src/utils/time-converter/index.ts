export interface DataType {
    time: string // hh:mm:ss
    date: string // YYYY-MM-DD
    smalldatetime: string // YYYY-MM-DD hh:mm:ss
    milliseconds: number
}

interface ToMilliseconds<D extends keyof DataType> {
    from: D
    data: DataType[D]
}

interface ToFormat<D extends keyof DataType> {
    to: D
    milliseconds: number
}

interface Convert<From extends keyof DataType, To extends keyof DataType> {
    from: From
    to: To
    data: DataType[From]
}

class TimeConverter {
    private static readonly dateSeparator = '-'
    private static readonly timeSeparator = ':'
    private static readonly dateTimeSeparator = ' '

    private static readonly difference = 3 * 60 * 60 * 1000
 
    static convert<From extends keyof DataType, To extends keyof DataType>({ from, to, data }: Convert<From, To>): DataType[To] {
        const milliseconds = this.toMilliseconds({ from, data })
        const format = this.toFormat({ to, milliseconds })

        return format
    }

    static toFormat<D extends keyof DataType>({ to, milliseconds }: ToFormat<D>): DataType[D] {
        switch (to) {
            case 'milliseconds': 
                return milliseconds as DataType[D]
            case 'time':
                return this.fromMillisecondsToTime(milliseconds) as DataType[D]
            case 'date':
                return this.fromMillisecondsToDate(milliseconds) as DataType[D]
            case 'smalldatetime':
                return this.fromMillisecondsToSmalldatetime(milliseconds) as DataType[D]
            default:
                throw new Error(`Invalid format ${to}`)
        }
    }

    static toMilliseconds<D extends keyof DataType>({ from, data }: ToMilliseconds<D>): number {
        switch (from) {
            case 'milliseconds': 
                return data as number
            case 'time':
                return this.fromTimeToMilliseconds(data as string)
            case 'date':
                return this.fromDateToMilliseconds(data as string)
            case 'smalldatetime':
                return this.fromSmalldatetimeToMilliseconds(data as string)
            default:
                throw new Error(`Invalid format ${from}`)
        }
    }

    static fromMillisecondsToTime(milliseconds: number) {
        const separator = this.timeSeparator

        const date = new Date(milliseconds)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        return this.alight(hours) + separator + this.alight(minutes) + separator + this.alight(seconds)
    }

    static fromTimeToMilliseconds(time: string) {
        return Date.parse('1970-01-01GMT' + time)
    }
    
    static fromMillisecondsToDate(milliseconds: number) {
        const date = new Date(milliseconds)

        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        return this.alight(year) + this.dateSeparator + this.alight(month) + this.dateSeparator + this.alight(day)
    }

    static fromDateToMilliseconds(date: string) {
        return Date.parse(date + 'GMT00:00:00')
    }
    
    static fromMillisecondsToSmalldatetime(milliseconds: number) {
        const date = this.fromMillisecondsToDate(milliseconds)
        const time = this.fromMillisecondsToTime(milliseconds)

        return date + this.dateTimeSeparator + time
    }

    static fromSmalldatetimeToMilliseconds(smalldatetime: string) {
        const [date, time] = smalldatetime.split(this.dateTimeSeparator)

        return Date.parse(date + 'GMT' + time) - this.difference
    }

    static alight(number: number): string {
        return number < 10 
            ? '0' + number 
            : number.toString()
    }
}

export default TimeConverter
