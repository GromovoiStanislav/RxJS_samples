const { of, from, range, timer, interval, Observable } = require("rxjs");
const { scan, map, concatMap } = require("rxjs/operators");

// const stream$ = of('Hello', 'World')
// stream$.subscribe(console.log)
// // Hello
// // World

// const stream$ = of('Hello', 'World').pipe(
//   scan((acc, v) => acc.concat(v), '')
// )
// stream$.subscribe(console.log)
// // Hello
// // HelloWorld


// const stream$ = of('Hello', 'World').pipe(
// 	scan((acc, v) => acc.concat(v), [])
// )
// stream$.subscribe(val => console.log(val.join(' ')))
// // Hello
// // Hello World


// const arr$ = from([1, 2, 3, 4])
// arr$.subscribe(console.log)
// // 1
// // 2
// // 3
// // 4

// const arr$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, v) => acc.concat(v), [])
// )
// arr$.subscribe(console.log)
// // [1]
// // [1, 2]
// // [1, 2, 3]
// // [1, 2, 3, 4]


// const stream$ = new Observable(observer => {
// 	observer.next('First value')
// 	setTimeout(() => observer.next('After 1000 ms'), 1000)
// 	setTimeout(() => observer.complete(), 1500)
// 	setTimeout(() => observer.error('Something went wrong'), 2000)
// 	setTimeout(() => observer.next('After 3000 ms'), 3000)
// })

// stream$.subscribe({
// 	next: (val) => console.log('Value: ', val),
// 	error: (err) => console.log(err),
// 	complete: () => console.log('Complete')
// })

// stream$.subscribe({
//   next(val) {console.log(val)},
//   error(err) {console.log(err)},
//   complete() {console.log('Complete')}
// })



// const sub = interval(500).subscribe(console.log)
// setTimeout(() => sub.unsubscribe(), 4000)
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6

//timer(2500).subscribe(console.log)
// After 2500 ms:
// //0

// const source = of(1, 2, 3);
// timer(3000)
// 	.pipe(concatMap(() => source))
// 	.subscribe(console.log);
// // After 3000 ms:
// // 1
// // 2
// // 3



// timer(0, 1000).subscribe(n => console.log('timer', n));
// interval(1000).subscribe(n => console.log('interval', n));
// // timer 0
// // interval 0
// // timer 1
// // interval 1
// // timer 2
// // interval 2
// // timer 3
// // interval 3
// // timer 4 
// // ...




range(42, 10).subscribe(console.log)
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49
// 50
// 51