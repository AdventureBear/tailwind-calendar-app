import dayjs from 'dayjs'

export const getMonth = (month = dayjs().month(), dowStart = 0) => {
    month = Math.floor(month);
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1-dowStart)).day()
    console.log("first Day of month", firstDayOfMonth)
    let currentMonthCount = 0-firstDayOfMonth
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount ++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })
    return daysMatrix
}



export const getWeek = (selectedDate = dayjs(), dowStart = 0) => {
    const year = selectedDate.year()
    const month = selectedDate.month()
    const startOfWeek = selectedDate.subtract(selectedDate.day(), 'day');
    let currentDayCount =startOfWeek.date() + dowStart
    const weekMatrix = new Array(7).fill(null).map(()=>{
        currentDayCount ++
        return dayjs(new Date(year, month, currentDayCount))
    })
    return weekMatrix
}


export const getHours = () => {
    return Array.from({ length: 24 }).map((_, hourIndex) => hourIndex);
};


export const range = (keyCount) => [...Array(keyCount).keys()]

export const isToday = ({day}) => {
    const today = new dayjs()
   return  today.format("MM DD YY")===day.format("MM DD YY")?  true : false
}