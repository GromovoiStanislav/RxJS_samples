const { Subject, BehaviorSubject, ReplaySubject } = require("rxjs");

// const stream$ = new Subject()
// stream$.subscribe(v => console.log('Value: ', v))
// stream$.next('Hello')
// stream$.next('Rx')
// stream$.next('JS')
// // Value: Hello
// // Value: Rx
// // Value: JS



// const stream$ = new BehaviorSubject('First value')
// stream$.subscribe(v => console.log('Value: ', v))
// stream$.next('Hello')
// stream$.next('Rx')
// stream$.next('JS')
// // Value:  First value
// // Value: Hello
// // Value: Rx
// // Value: JS

// const stream$ = new BehaviorSubject('First value')
// stream$.next('Hello')
// stream$.next('Rx')
// stream$.subscribe(v => console.log('Value: ', v))
// stream$.next('JS')
// // Value: Rx
// // Value: JS




// const stream$ = new ReplaySubject()
// stream$.subscribe(v => console.log('Value: ', v))
// stream$.next('Hello')
// stream$.next('Rx')
// stream$.next('JS')
// // Value: Hello
// // Value: Rx
// // Value: JS

// const stream$ = new ReplaySubject()
// stream$.next('Hello')
// stream$.next('Rx')
// stream$.next('JS')
// stream$.subscribe(v => console.log('Value: ', v))
// // Value: Hello
// // Value: Rx
// // Value: JS

const stream$ = new ReplaySubject(2)
stream$.next('Hello')
stream$.next('Rx')
stream$.next('JS')
stream$.subscribe(v => console.log('Value: ', v))
// Value: Rx
// Value: JS