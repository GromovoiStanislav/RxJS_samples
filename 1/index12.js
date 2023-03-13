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




// rxjs.of('Hello').subscribe(x => rxjs.of(x + ' world').subscribe(createSubscribe('mergeMap')));

// rxjs.of('Hello')
//     .pipe(
//         rxjs.mergeMap(x => rxjs.of(x + ' world'))
//     )
//     .subscribe(createSubscribe('mergeMap'));


// const interval = rxjs.interval(1000)
//     .pipe(
//         rxjs.mergeMap(x => rxjs.of('a', 'b', 'c').pipe(rxjs.map(i => x + i)))
//     )
//     .subscribe(x => console.log(x));

// rxjs.range(1, 10)
//     .pipe(
//         rxjs.concatMap((x, i) => rxjs.interval(100)
//             .pipe(
//                 rxjs.take(x),
//                 rxjs.map(_ => i)
//             )
//         )
//     )
//     .subscribe(createSubscribe('concatMap'))


rxjs.range(1, 10)
    .pipe(
        rxjs.mergeMap((x, i) => rxjs.interval(100)
            .pipe(
                rxjs.take(x),
                rxjs.map(_ => i)
            )
        )
    )
    .subscribe(createSubscribe('mergeMap'))