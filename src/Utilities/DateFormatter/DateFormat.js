export function DateFullFormat(tanggal){
    var n = new Date(tanggal);
    var date = n.toLocaleString("id-ID", {dateStyle:"full"});
    return date
};