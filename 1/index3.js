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

// rxjs.interval(500)
//     .pipe(rxjs.operators.take(15))
//    .subscribe(createSubscribe('interval'));

// rxjs.timer(5000, 500)
//     .pipe(rxjs.operators.take(10))
//     .subscribe(createSubscribe('timer'));

rxjs.range(3, 6)
    .subscribe(createSubscribe('range'));


// rxjs.of(10, 20, 30, [1, 2, 3])
//     .subscribe(createSubscribe('of'));

