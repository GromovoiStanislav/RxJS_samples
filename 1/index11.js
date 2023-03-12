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

// const s1 = rxjs.interval(1000).pipe(rxjs.map(x => 's1: ' + x))
// const s2 = rxjs.interval(500).pipe(rxjs.map(x => 's2: ' + x))
// const s3 = rxjs.interval(100).pipe(rxjs.map(x => 's2: ' + x))
// const concurrent = 2;
// from.merge(s1, s2, s3, concurrent).pipe(rxjs.take(12)).subscribe(createSubscribe('merge'));



// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.range(x, 3)))
// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.interval(1000).pipe(rxjs.take(4))))
// higherOrder.pipe(rxjs.mergeAll()).subscribe(createSubscribe('mergeAll'));


// const s1 = rxjs.from([1,2,3])
// const s2 = rxjs.from([4,5,6])
// rxjs.concat(s1, s2).subscribe(createSubscribe('concat'));

// const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.range(x, 3)))
const higherOrder = rxjs.range(1, 3).pipe(rxjs.map(x => rxjs.interval(1000).pipe(rxjs.take(4))))
higherOrder.pipe(rxjs.concatAll()).subscribe(createSubscribe('concatAll'));




