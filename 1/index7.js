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

//rxjs.of(10, 20, 30, [1, 2, 3])
// .pipe(rxjs.first())
// .subscribe(createSubscribe('first'));

// .pipe(rxjs.last())
// .subscribe(createSubscribe('last'));

// .pipe(rxjs.find(x=>x>15)) //20
// .subscribe(createSubscribe('find'));

// .pipe(rxjs.findIndex(x => x > 15)) //1
// .subscribe(createSubscribe('findIndex'));

// .pipe(rxjs.take(2)) //10, 20,
// .subscribe(createSubscribe('take'));

// .pipe(rxjs.skip(2)) //30, [1, 2, 3]
// .subscribe(createSubscribe('skip'));


// .pipe(rxjs.skipLast(2)) //10, 20,
// .subscribe(createSubscribe('skipLast'));

// .pipe(rxjs.skipWhile(x => x < 15)) //20, 30, [1, 2, 3]
// .subscribe(createSubscribe('skipWhile'));

// rxjs.interval(500)
//     .pipe(
//         rxjs.skipWhile(x => x < 5),
//         //rxjs.take(10),
//         rxjs.takeWhile(x => x < 13)
//         )
//     .subscribe(createSubscribe('takeWhile'));

rxjs.interval(500)
    .pipe(
        rxjs.skipUntil(rxjs.timer(3000)),
        rxjs.takeUntil(rxjs.timer(5000))
    )
    .subscribe(createSubscribe('skipUntil'));