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


// rxjs.from(Promise.resolve([1, 2, 3])).subscribe(console.log);
// Logs:
// [1, 2, 3]


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
//     .subscribe(x => console.log(x));

// rxjs.range(0,32)
//     .pipe(
//         rxjs.bufferCount(5),
//         //rxjs.bufferCount(5,4),
//     )
//     .subscribe(console.log);

/////////////////////////////////////////
// rxjs.of()
//     .pipe(
//         rxjs.defaultIfEmpty('no data')
//     )
//     .subscribe(x => console.log(x));


// rxjs.of(1,2,3,4,5,6)
//     .pipe(
//         rxjs.delay(4000),
//         rxjs.map(x => x * 2),
//         rxjs.every(x => x % 2 === 0)
//     )
//     .subscribe(console.log); //-> false or true

// rxjs.of(1, 2, 3, 4)
//     .pipe(
//         rxjs.delay(4000),
//         rxjs.tap(x => console.log('Befor: ', x)),
//         rxjs.map(x => x ** 2),
//         rxjs.tap(x => console.log('After: ', x)),
//     )
//     .subscribe(console.log);
	
	
	
//////////////////////////////////////////////////////
// const s1 = rxjs.of('Hello')
// const s2 = rxjs.of('world')
//rxjs.merge(s1, s2).subscribe(x => console.log(x));
// Logs:
// Hello
// world


// const s1 = rxjs.interval(1000).pipe(rxjs.map(x => 's1: ' + x))
// const s2 = rxjs.interval(500).pipe(rxjs.map(x => 's2: ' + x))
// const s3 = rxjs.interval(100).pipe(rxjs.map(x => 's2: ' + x))
// const concurrent = 2;
// rxjs.merge(s1, s2, s3, concurrent).pipe(rxjs.take(12)).subscribe(x => console.log(x));



//// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.range(x, 3)))
// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.interval(1000).pipe(rxjs.take(4))))
// higherOrder.pipe(rxjs.mergeAll()).subscribe(x => console.log(x));
//// Logs: 1, 2, 3, 2, 3, 4, 3, 4, 5
// Logs: 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3


//////////////////////////////////////////////
// const s1 = rxjs.of('Hello')
// const s2 = rxjs.of('world')
//rxjs.concat(s1, s2).subscribe(x => console.log(x));
// Logs:
// Hello
// world

// const s1 = rxjs.from([1,2,3])
// const s2 = rxjs.from([4,5,6])
// rxjs.concat(s1, s2).subscribe(x => console.log(x));
// Logs: 1, 2, 3, 4, 5, 6

//// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.range(x, 3)))
// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.interval(1000).pipe(rxjs.take(4))))
// higherOrder.pipe(rxjs.concatAll()).subscribe(x => console.log(x));
//// Logs: 1, 2, 3, 2, 3, 4, 3, 4, 5
// Logs: 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3


//////////////////////////////////////
// rxjs.of('Hello').subscribe(x => rxjs.of(x + ' world').subscribe(console.log));
// Logs: Hello world'

// rxjs.of('Hello')
//     .pipe(
//         rxjs.mergeMap(x => rxjs.of(x + ' world'))
//     )
//     .subscribe(console.log);
// Logs: Hello world'

// const interval = rxjs.interval(1000)
//     .pipe(
//         rxjs.mergeMap(x => rxjs.of('a', 'b', 'c').pipe(rxjs.map(i => x + i)))
//     )
//     .subscribe(console.log);
// Logs: 0a, 0b, 0c, 1a, 1b, 1c, 2a, 2b, 2c...


// const interval = rxjs.interval(1000)
//     .pipe(
//         rxjs.concatMap(x => rxjs.of('a', 'b', 'c').pipe(rxjs.map(i => x + i)))
//     )
//     .subscribe(console.log);
// Logs: 0a, 0b, 0c, 1a, 1b, 1c, 2a, 2b, 2c...



///////////////////////////////////////
// const s1 = rxjs.of('Hello')
// const s2 = rxjs.of('world')
// rxjs.zip(s1.pipe(rxjs.delay(1000)), s2).subscribe(console.log);
// //Log: ['Hello','world']



// const age$ = rxjs.of(27, 25, 29);
// const name$ = rxjs.of('Foo', 'Bar', 'Beer');
// const isDev$ = rxjs.of(true, true, false);
// rxjs.zip(age$, name$, isDev$).subscribe(x => console.log(x));
// // Outputs
// // [27, 'Foo', true]
// // [25, 'Bar', true]
// // [29, 'Beer', false]


// const age$ = rxjs.of(27, 25, 29);
// const name$ = rxjs.of('Foo', 'Bar', 'Beer');
// const isDev$ = rxjs.of(true, true, false);
// rxjs.zip(age$, name$, isDev$).pipe(
//     rxjs.map(([age, name, isDev]) => ({ age, name, isDev }))
// ).subscribe(x => console.log(x));
// // Outputs
// // { age: 27, name: 'Foo', isDev: true }
// // { age: 25, name: 'Bar', isDev: true }
// // { age: 29, name: 'Beer', isDev: false }


// rxjs.zip(
//     rxjs.interval(1000),
//     rxjs.interval(500).pipe(rxjs.take(3))
// ).subscribe(console.log);
// // Outputs
// // [0, 0]
// // [1, 1]
// // [2, 2]



//////////////////////////////////////
// const int1 = rxjs.interval(1000)
// const int2 = rxjs.interval(500)
// int1.pipe(
//     rxjs.take(4),
//     rxjs.withLatestFrom(int2)
// ).subscribe(console.log);
// // Outputs
// // [0, 0]
// // [1, 2]
// // [2, 4]
// // [3, 6]


///////////////////////////////////
// const firstTimer = rxjs.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
// const secondTimer = rxjs.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
// rxjs.combineLatest([firstTimer, secondTimer]).subscribe(console.log);
// // Logs
// // [0, 0] after 0.5s
// // [1, 0] after 1s
// // [1, 1] after 1.5s
// // [2, 1] after 2s


// const t1 = rxjs.timer(1000, 2000);
// const t2 = rxjs.timer(2000, 2000);
// const t3 = rxjs.timer(3000, 2000);
// const t4 = rxjs.timer(4000, 2000);
// rxjs.combineLatest(t1, t2, t3, t4).subscribe(console.log);
// // Outputs
// // [1, 0, 0, 0]
// // [1, 1, 0, 0]
// // [1, 1, 1, 0]
// // [2, 1, 1, 0]
// // [2, 2, 1, 0]
// // [2, 2, 1, 1]
// // [2, 2, 2, 1]
// // [3, 2, 2, 1]


// const weight = rxjs.of(70, 72, 76, 79, 75);
// const height = rxjs.of(1.76, 1.77, 1.78);
// rxjs.combineLatest([weight, height]).pipe(
//     rxjs.map(([w, h]) => w / (h * h)),
// ).subscribe(x => console.log('BMI is ' + x));
// // Outputs:
// // BMI is 24.212293388429753
// // BMI is 23.93948099205209
// // BMI is 23.671253629592222


// const observables = {
//     a: rxjs.of(1).pipe(rxjs.delay(1000), rxjs.startWith(0)),
//     b: rxjs.of(5).pipe(rxjs.delay(5000), rxjs.startWith(0)),
//     c: rxjs.of(10).pipe(rxjs.delay(10000), rxjs.startWith(0))
// };
// rxjs.combineLatest(observables).subscribe(console.log);
// // Logs
// // { a: 0, b: 0, c: 0 } immediately
// // { a: 1, b: 0, c: 0 } after 1s
// // { a: 1, b: 5, c: 0 } after 5s
// // { a: 1, b: 5, c: 10 } after 10s


// const observables = [1, 5, 10].map(
//     n => rxjs.of(n).pipe(
//         rxjs.delay(n * 1000), // emit 0 and then emit n after n seconds
//         rxjs.startWith(0)
//     )
// );
// rxjs.combineLatest(observables).subscribe(console.log);
// // Logs
// // [0, 0, 0] immediately
// // [1, 0, 0] after 1s
// // [1, 5, 0] after 5s
// // [1, 5, 10] after 10s