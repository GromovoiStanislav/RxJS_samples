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

// const result = rxjs.from(delay(3000));
// result.subscribe(x => console.log(x))


///////////////////////////////////////////////////////
// rxjs.of(10, 20, 30, [1, 2, 3])
// .pipe(rxjs.first())
// .subscribe(x => console.log(x));

// .pipe(rxjs.last())
// .subscribe(x => console.log(x));

// .pipe(rxjs.find(x=>x>15)) //20
// .subscribe(x => console.log(x));

// .pipe(rxjs.findIndex(x => x > 15)) //1
// .subscribe(x => console.log(x));

// .pipe(rxjs.take(2)) //10, 20,
// .subscribe(x => console.log(x));

// .pipe(rxjs.skip(2)) //30, [1, 2, 3]
// .subscribe(x => console.log(x));


// .pipe(rxjs.skipLast(2)) //10, 20,
// .subscribe(x => console.log(x));

// .pipe(rxjs.skipWhile(x => x < 15)) //20, 30, [1, 2, 3]
// .subscribe(x => console.log(x));

// rxjs.interval(500)
//     .pipe(
//         rxjs.skipWhile(x => x < 5),
//         //rxjs.take(10),
//         rxjs.takeWhile(x => x < 13)
//         )
//     .subscribe(x => console.log(x));

// rxjs.interval(500)
// 	.pipe(
// 		rxjs.skipUntil(rxjs.timer(3000)),
// 		rxjs.takeUntil(rxjs.timer(5000))
// 	)
// 	.subscribe(x => console.log(x));


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


/////////////////////////////////////////
// rxjs.from([1, 2, 3, 3, 3, 5, 5, 1, 1, 99, 99, 2, 4, 6])
//     .pipe(
//         rxjs.filter(x=>x>3),
//     )
//     .subscribe(x => console.log(x));


/////////////////////////////////////////
const observableValues = rxjs.(1, 2, 3, 4, 5, 6);
const [evens$, odds$] = rxjs.partition(observableValues, value => value % 2 === 0);
odds$.subscribe(x => console.log('odds', x));
evens$.subscribe(x => console.log('evens', x));
// Logs:
// odds 1
// odds 3
// odds 5
// evens 2
// evens 4
// evens 6


////////////////////////////////////////////////////////
// rxjs.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
//     .pipe(rxjs.distinct())
//     .subscribe(x => console.log(x));
// Outputs: 1, 2, 3, 4


// rxjs.of(
//     { age: 4, name: 'Foo' },
//     { age: 7, name: 'Bar' },
//     { age: 5, name: 'Foo' }
// )
//     .pipe(rxjs.distinct(({ name }) => name))
//     .subscribe(x => console.log(x));
// Outputs
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }

///////////////////////////////////////////////////////
//rxjs.of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3)
// .pipe(rxjs.distinctUntilChanged())
//  .subscribe(console.log);
// Logs: 1, 2, 1, 3

// rxjs.of(30, 31, 20, 34, 33, 29, 35, 20)
//     .pipe(
//         rxjs.distinctUntilChanged((prevHigh, temp) => {
//             return temp <= prevHigh;
//         })
//     )
//     .subscribe(console.log);
// Logs: 30, 31, 34, 35

///////////////////////////////////////////////////////
// rxjs.of(
//     { age: 4, name: 'Foo' },
//     { age: 7, name: 'Bar' },
//     { age: 5, name: 'Foo' },
//     { age: 6, name: 'Foo' }
// ).pipe(
//     rxjs.distinctUntilKeyChanged('name')
// ).subscribe(console.log);
// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }

// rxjs.of(
//     { age: 4, name: 'Foo1' },
//     { age: 7, name: 'Bar' },
//     { age: 5, name: 'Foo2' },
//     { age: 6, name: 'Foo3' }
// ).pipe(
//     rxjs.distinctUntilKeyChanged('name', (x, y) => x.substring(0, 3) === y.substring(0, 3))
// ).subscribe(x => console.log(x));
// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }

//////////////////////////////////
// rxjs.interval(500)
//     .pipe(
//         //rxjs.buffer(rxjs.interval(2000)),
//         //rxjs.bufferTime(2000),
//         //rxjs.bufferTime(2000, 5000),
//         rxjs.bufferWhen(() => rxjs.interval(1000 + Math.random() * 4000)),
//         rxjs.take(4)
//     )
//     .subscribe(createSubscribe('buffer'));

// rxjs.range(0,32)
//     .pipe(
//         rxjs.bufferCount(5),
//         //rxjs.bufferCount(5,4),
//     )
//     .subscribe(createSubscribe('buffer'));