export function GetTime(date) {
    const time = new Date(date).toGMTString();
    var result = time.slice(16, 22);
    return result;
}