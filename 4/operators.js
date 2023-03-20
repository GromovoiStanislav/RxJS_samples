const { of, interval, timer } = require("rxjs");
const { map, filter, tap, take, takeLast, takeWhile, takeUntil, scan, reduce, switchMap } = require("rxjs/operators");




// of('start')
// 	.subscribe(() => {
// 		interval(1000)
// 			.pipe(
// 				tap(v => console.log('Tap: ', v)),
// 				take(5),
// 				reduce((acc, v) => acc + v, 0)
// 			).subscribe({
// 				next: v => console.log('Next: ', v),
// 				complete: () => console.log('Complete')
// 			})
// 	})

of('start')
	.pipe(
		switchMap(value => {
			return interval(1000)
				.pipe(
					tap(v => console.log('Tap: ', v)),
					take(5),
					reduce((acc, v) => acc + v, 0)
				)
		})
	)
	.subscribe({
		next: v => console.log('Next: ', v),
		complete: () => console.log('Complete')
	})
// Tap: 0
// Tap: 1
// Tap: 2
// Tap: 3
// Tap: 4
// Next: 10
// Complete




// const stream$ = interval(1000)
//   .pipe(
//     //tap(v => console.log('Tap: ', v)),

//     // map(v => v * 3),
//     // filter(v => v % 2 === 0),
// 	// take(5),

// 	// take(10),
//     // takeLast(5)

// 	// takeWhile(v => v < 7),
// 	// takeUntil(timer(5000)),

// 	// take(5),
//     // scan((acc, v) => acc + v, 0),

// 	take(5),
//     reduce((acc, v) => acc + v, 0),
//   )

// stream$.subscribe({
//   next: v => console.log('Next: ', v),
//   complete: () => console.log('Complete')
// })