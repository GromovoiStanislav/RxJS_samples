function createSubscribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error: ', x);
        },
        complete() {
            console.log(name, ' completed');
        }
    }
}


// const s1 = rxjs.of('Hello')
// const s2 = rxjs.of('world')
// rxjs.zip(s1.pipe(rxjs.delay(1000)), s2).subscribe(createSubscribe('zip'));
// //Log: ['Hello','world']


// rxjs.zip(
//     rxjs.interval(1000),
//     rxjs.interval(500).pipe(rxjs.take(3))
// )
//     .subscribe(createSubscribe('zip'));
// // Outputs
// // [0, 0]
// // [1, 1]
// // [2, 2]



// const int1 = rxjs.interval(1000)
// const int2 = rxjs.interval(500)
// int1.pipe(
//     rxjs.take(4),
//     rxjs.withLatestFrom(int2)
// ).subscribe(createSubscribe('withLatestFrom'));
// // Outputs
// // [0, 0]
// // [1, 2]
// // [2, 4]
// // [3, 6]


const t1 = rxjs.timer(1000, 2000);
const t2 = rxjs.timer(2000, 2000);
const t3 = rxjs.timer(3000, 2000);
const t4 = rxjs.timer(4000, 2000);
rxjs.combineLatest(t1, t2, t3, t4).subscribe(createSubscribe('combineLatest'));
// Outputs
// [1, 0, 0, 0]
// [1, 1, 0, 0]
// [1, 1, 1, 0]
// [2, 1, 1, 0]
// [2, 2, 1, 0]
// [2, 2, 1, 1]
// [2, 2, 2, 1]
// [3, 2, 2, 1]


