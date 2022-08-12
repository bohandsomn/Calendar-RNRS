import TimeConverter from '.'

describe('TimeConverter util', () => {
    it('should convert from milliseconds to time', () => {
        expect(TimeConverter.fromMillisecondsToTime(1659301200000))
            .toBe('00:00:00')
        
        expect(TimeConverter.fromMillisecondsToTime(1659370347000))
            .toBe('19:12:27')

        expect(TimeConverter.fromMillisecondsToTime(1659387599000))
            .toBe('23:59:59')
    })

    it('should convert from milliseconds to date', () => {
        expect(TimeConverter.fromMillisecondsToDate(0))
            .toBe('1970-01-01')

        expect(TimeConverter.fromMillisecondsToDate(1659301200000))
            .toBe('2022-08-01')

        expect(TimeConverter.fromMillisecondsToDate(1672444800000))
            .toBe('2022-12-31')
    })

    it('should convert from milliseconds to smalldatetime', () => {
        expect(TimeConverter.fromMillisecondsToSmalldatetime(1659301200000))
            .toBe('2022-08-01 00:00:00')

        expect(TimeConverter.fromMillisecondsToSmalldatetime(1659370347000))
            .toBe('2022-08-01 19:12:27')

        expect(TimeConverter.fromMillisecondsToSmalldatetime(1659387599000))
            .toBe('2022-08-01 23:59:59')
    })

    it('should convert from time to milliseconds', () => {
        expect(TimeConverter.fromTimeToMilliseconds('00:00:00'))
            .toBe(0)
        
        expect(TimeConverter.fromTimeToMilliseconds('19:12:27'))
            .toBe(69147000)

        expect(TimeConverter.fromTimeToMilliseconds('23:59:59'))
            .toBe(86399000)
    })

    it('should convert from date to milliseconds', () => {
        expect(TimeConverter.fromDateToMilliseconds('1970-01-01'))
            .toBe(0)
        
        expect(TimeConverter.fromDateToMilliseconds('2022-08-01'))
            .toBe(1659312000000)

        expect(TimeConverter.fromDateToMilliseconds('2022-12-31'))
            .toBe(1672444800000)
    })

    it('should convert from smalldatetime to milliseconds', () => {
        expect(TimeConverter.fromSmalldatetimeToMilliseconds('2022-08-01 00:00:00'))
            .toBe(1659301200000)
        
        expect(TimeConverter.fromSmalldatetimeToMilliseconds('2022-08-01 19:12:27'))
            .toBe(1659370347000)

        expect(TimeConverter.fromSmalldatetimeToMilliseconds('2022-08-01 23:59:59'))
            .toBe(1659387599000)
    })

    it('should convert', () => {
        expect(TimeConverter.convert({
            from: 'smalldatetime',
            to: 'date',
            data: '2022-08-01 19:12:27'
        })).toBe('2022-08-01')
        
        expect(TimeConverter.convert({
            from: 'date',
            to: 'smalldatetime',
            data: '2022-08-01'
        })).toBe('2022-08-01 03:00:00')
    })
})
