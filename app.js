
let start = document.getElementById("start");
let store = document.getElementById("store");
let stop = document.getElementById("stop");
let clear = document.getElementById("clear");

let display = document.getElementById("timer");
let ul = document.getElementById("listlap");

let second = 0;
let timer = null;

let array = [];


// =========================
// STORE TIME
// =========================

store.addEventListener("click", function () {

    array.push(display.innerText);

    console.log(array);

    ul.innerHTML = "";

    for (var value of array) {

        ul.innerHTML += `
            <li>${value}</li>
        `;
    }


    // Maximum 5 stored times

    if (array.length == 5) {

        second = 0;

        clearInterval(timer);

        start.disabled = false;

        array = [];

        store.disabled = true;

        display.innerText = "00:00:00";
    }

});


// =========================
// CLEAR
// =========================

clear.addEventListener("click", function () {

    second = 0;

    clearInterval(timer);

    start.disabled = false;

    store.disabled = true;

    display.innerText = "00:00:00";
});


// =========================
// START
// =========================

start.addEventListener("click", function () {

    timer = setInterval(() => {

        store.disabled = false;

        updateTime();

        start.disabled = true;

    }, 1000);

});


// =========================
// STOP
// =========================

stop.addEventListener("click", function () {

    clearInterval(timer);

    start.disabled = false;

});


// =========================
// UPDATE TIME
// =========================

function updateTime() {

    second = second + 1;


    let hrs = Math.floor(second / 3600);

    let mins = Math.floor(
        (second % 3600) / 60
    );

    let sec = second % 60;


    console.log(
        hrs + ":" + mins + ":" + sec
    );


    display.innerText =
        hrs.toString().padStart(2, "00") +
        ":" +
        mins.toString().padStart(2, "00") +
        ":" +
        sec.toString().padStart(2, "00");
}

