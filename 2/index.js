const interval = require('rxjs').interval;
const map = require('rxjs').map;
const filter = require('rxjs').filter;
const range = require('rxjs').range;
const of = require('rxjs').of;
const scan = require('rxjs').scan;
const throttleTime = require('rxjs').throttleTime;
const take = require('rxjs').take;
const rxjs = require('rxjs');



const Subject = require('rxjs').Subject;
const Observable = require('rxjs').Observable;


// const subject = new Subject();
// subject.subscribe({
// 	next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
// 	next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(1);
// subject.next(2);

/////////////////////////////////////
// const intervalStream$ = interval(500)
// console.log('interval start');
// const sub = intervalStream$
// .pipe(
// 	// filter(value => value % 2 === 0),
// 	// map((value) =>value*2),
// 	// map((value) =>value+0.5)
// 	throttleTime(2000),
// 	scan((count) => count + 1, 0)
// )
// .subscribe((count) => console.log(`Clicked ${count} times`))
// .subscribe((value) => {
// 	console.log(value);
// 	if (value>20) { sub.unsubscribe()}
// })

///////////////////////////////////////////
// rxjs.timer(3000, 500)
//     .pipe(rxjs.take(10))
// 	.subscribe({
// 		next: value => console.log('next:', value),
// 		error: err => console.log('error:', err),
// 		complete: () => console.log('the end'),
// 	});



///////////////////////////////////////////
// range(1, 200)
// 	.pipe(
// 		//filter(x => x % 2 === 1),
// 		take(15),
// 		map(x => x + x)
// 	)
// 	.subscribe(x => console.log(x));

// range(3, 6)
// 	.subscribe(x => console.log(x));


///////////////////////////////////////////
// of(10, 20, 30, [1, 2, 3])
// 	.subscribe({
// 		next: value => console.log('next:', value),
// 		error: err => console.log('error:', err),
// 		complete: () => console.log('the end'),
// 	});

// Outputs
// next: 10
// next: 20
// next: 30
// next: [1, 2, 3]
// the end

///////////////////////////////
//const set = new Set([1, 2, 3, '4', '5', {id: 6}]);
//const map_ = new Map([[1, 2], [3, 4], [5, 6]]);
//const arr = [1,2,3,5,8,7];
// const arr = [
//     {id:1,name:'a'},
//     {id:2,name:'d'},
// ];

// rxjs.from(map_)
// 	.subscribe({
// 		next: value => console.log('next:', value),
// 		error: err => console.log('error:', err),
// 		complete: () => console.log('the end'),
// 	});



function* generateDoubles(seed) {
	let i = seed;
	while (true) {
		yield i;
		i = 2 * i; // double it
	}
}

// const iterator = generateDoubles(3);
// const result = rxjs.from(iterator).pipe(rxjs.take(10));
// console.log('start');
// result.subscribe(x => console.log(x));
// console.log('end');
// Logs:
// 'start'
// 3
// 6
// 12
// 24
// 48
// 96
// 192
// 384
// 768
// 1536
// 'end'

// const array = [10, 20, 30];
// const result = rxjs.from(array, rxjs.asyncScheduler);
// console.log('start');
// result.subscribe(x => console.log(x));
// console.log('end');
// Logs:
// 'start'
// 'end'
// 10
// 20
// 30

function delay(ms = 1000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(ms);
		}, ms);
	});
}
const result = rxjs.from(delay(3000));
result.subscribe(x => console.log(x))



////////////////////////////////////////////////////////////////////
// const observable = new Observable((subscriber) => {
// 	subscriber.next(-2);
// 	subscriber.next(-1);
// 	subscriber.next(0);

// 	setTimeout(() => {
// 		subscriber.next(1);
// 	}, 1000);
// 	setTimeout(() => {
// 		subscriber.next(2);
// 	}, 2000);
// 	setTimeout(() => {
// 		subscriber.next(3);
// 		subscriber.error('opps')
// 		//subscriber.complete();
// 	}, 3000);
// 	setTimeout(() => {
// 		subscriber.next(4);
// 	}, 4000);
// 	setTimeout(() => {
// 		subscriber.next(5);
// 	}, 5000);
// });

// console.log('just before subscribe');
// observable.subscribe({
// 	next(x) {
// 		console.log('got value ' + x);
// 	},
// 	error(err) {
// 		console.error('something wrong occurred: ' + err);
// 	},
// 	complete() {
// 		console.log('done');
// 	},
// });
// console.log('just after subscribe');


// observable.subscribe((data)=>{console.log(data);})
 //observable.subscribe((data)=>{console.log(data);})

 