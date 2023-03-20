const { interval } = require("rxjs");
const { filter, map, take, scan } = require("rxjs/operators");

const people = [
    { name: 'Vlad', age: 25 },
    { name: 'Elena', age: 17 },
    { name: 'Ivan', age: 18 },
    { name: 'Igor', age: 14 },
    { name: 'Lisa', age: 32 },
    { name: 'Irina', age: 23 },
    { name: 'Oleg', age: 20 }
]


const start = () => {
    let i = 0
    const canDrink = []

    const interval = setInterval(() => {
        if (people[i]) {
            if (people[i].age >= 18) {
                canDrink.push(people[i].name)
            }
            i++
        } else {
            clearInterval(interval)
            console.log(canDrink)
        }
    }, 1000)
}
// start()
// //['Vlad', 'Ivan', 'Lisa', 'Irina', 'Oleg']


interval(1000)
    .pipe(
        take(people.length),
        filter(v => people[v].age >= 18),
        map(v => people[v].name),
        scan((acc, v) => acc.concat(v), [])
    )
    .subscribe(res => console.log(res.join(' ')))//res.join(' ')
// ['Vlad']
// ['Vlad', 'Ivan']
// ['Vlad', 'Ivan', 'Lisa']
// ['Vlad', 'Ivan', 'Lisa', 'Irina']
// ['Vlad', 'Ivan', 'Lisa', 'Irina', 'Oleg']
