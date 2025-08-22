export function shwotimetodatetime(showtime){
    const date = showtime.split("T")[0]
    const time = showtime.split("T")[1]
    return {date, time}
}