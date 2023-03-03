const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// selecting all items

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 2, 3, 11,00 , 00);

const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

function minsformat(minsitem) {
  if (mins < 10) {
    return minsitem = "0" + minsitem
  }
  return minsitem
};

giveaway.textContent =
  "giveaway ends on " +
  weekday +
  ", " +
  date +
  " " +
  month +
  " " +
  year +
  " , " +
  hours +
  ":" +
  minsformat(mins) +
  " AM";

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();

  const timeRemaining = futureTime - today;


  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

//   values in ms 
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMins = 60*1000;

    // calculate all value

    let remainingDays = timeRemaining/oneDay;
    remainingDays = Math.floor(remainingDays)

   let remainingHour = (timeRemaining % oneDay)/oneHour;
    remainingHour = Math.floor(remainingHour);
    
    let remmainingMins = Math.floor((timeRemaining % oneHour)/oneMins )
    let remmainingSecs = Math.floor((timeRemaining % oneMins)/1000 )

    const value = [remainingDays,remainingHour,remmainingMins,remmainingSecs];

    function format(item){
        if (item < 10) {
            return item = '0' + item
        }

        return item;
    }

    items.forEach(function(items,index) {
        items.innerHTML = format(value[index]);
    })

    if (timeRemaining < 0) {
      clearInterval(countdown);
      deadline.innerHTML ="Sorry, this giveaway has expired ";
    }

    
}

let countdown = setInterval(getRemainingTime,1000)

getRemainingTime();
