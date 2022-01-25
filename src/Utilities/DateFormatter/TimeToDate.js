export const TimeToDate = (date, time) => {
    return `${date} ${time}:00`
}

export const DateToTime = (date) => {
    let jam = new Date(date).toISOString().slice(10, 19).replace('T', ' ');
    return jam
}
