const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const date = new Date();
let day = weekday[date.getDay()];

const smile = ';)'
alert('Smile cause ' + weekday[date.getDay()] + ' is a good day ' + smile);
