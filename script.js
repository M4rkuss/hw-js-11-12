// //1) Задание 1
// const car = {
//   manufacturer: 'Mercedes',
//   model: 'E53 AMG',
//   yearOfIssue: '2021',
//   avgSpeed: 100,
//   aboutCar: function () {
//     return console.log(this)
//   },
//   timeToReach: function (distance) {
//     let avgSpeed = this.avgSpeed
//     let time = distance / avgSpeed
//     let rest = Math.floor(time /4)
//     return console.log(`${time + rest} часов - время, затраченное на дорогу`)
//   }
// }
// car.aboutCar()
// car.timeToReach(900)

// //2) Задание 2 функции в объекте
// const fraction = {
//   numerator: 5,
//   denominator: 20,
//   sumFraction: function () {
//     return console.log(this.numerator + this.denominator)
//   },
//   minusFraction: function () {
//     return console.log(this.numerator - this.denominator)
//   },
//   multiplyFraction: function () {
//     return console.log(this.numerator * this.denominator)
//   },
//   delFraction: function () {
//     return console.log(this.numerator / this.denominator)
//   },
//   reductionFraction: function () {
//     let newNumerator = this.numerator
//     let newDenominator = this.denominator
//     for (let i = 2; i <= this.numerator; i++) {
//       if (this.numerator % i === 0 &&  this.denominator % i === 0)
//       newNumerator= this.numerator / i
//       newDenominator = this.denominator / i;
//     }
//     return console.log(`Ваша сокращенная дробь:${newNumerator}/${newDenominator}`)
//   }
// }
// console.log(fraction)
// fraction.sumFraction()
// fraction.minusFraction()
// fraction.multiplyFraction()
// fraction.delFraction()
// fraction.reductionFraction()

//3) Задание 3
// const time = {
//   hours: 16,
//   minutes: 59,
//   seconds: 58,
//   timeIs: function () {
//     return console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//   },
//   changeSeconds: function (sec = 0) {
//     let timeInSec = this.hours * 3600 + this.minutes * 60 + this.seconds
//     let resultOfChangeInSec = timeInSec + sec
//     this.hours = Math.floor(resultOfChangeInSec / 3600)
//     resultOfChangeInSec %= 3600
//     this.minutes = Math.floor(resultOfChangeInSec / 60)
//     this.seconds = resultOfChangeInSec % 60
//     return console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//   },
//   changeMinutes: function (min = 0) {
//     let additionalSecFromMin = min * 60
//     let timeInSec = this.hours * 3600 + this.minutes * 60 + this.seconds
//     let resultOfChangeInSec = timeInSec + additionalSecFromMin
//     this.hours = Math.floor(resultOfChangeInSec / 3600)
//     resultOfChangeInSec %= 3600
//     this.minutes = Math.floor(resultOfChangeInSec / 60)
//     this.seconds = resultOfChangeInSec % 60
//     return console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//   },
//   changeHours: function (h = 0) {
//     return console.log(`${this.hours + h}:${this.minutes}:${this.seconds}`)
//   }
// }
//
// time.timeIs()
// time.changeSeconds()
// time.changeMinutes()
// time.changeHours()
