const endDate = "25 September 2023 5:13 pm"
document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000

    if (diff < 0) {
        document.getElementById("1").innerHTML = "HAPPY BIRTHDAY"
        document.getElementById("").innerHTML = ""
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24)
    // days
    inputs[1].value = Math.floor(diff / 3600) % 24
    // Hours
    inputs[2].value = Math.floor(diff / 60) % 60
    // minutes
    inputs[3].value = Math.floor(diff) % 60
    //  second

}
// call to clock
clock()

setInterval(() => {
    clock()
}, 100000);