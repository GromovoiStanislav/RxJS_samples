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


// rxjs.of()
//     .pipe(
//         rxjs.defaultIfEmpty('no data')
//     )
//     .subscribe(createSubscribe('of'));


// rxjs.of(1,2,3,4,5,6)
//     .pipe(
//         rxjs.delay(4000),
//         rxjs.map(x => x * 2),
//         rxjs.every(x => x % 2 === 0)
//     )
//     .subscribe(createSubscribe('of')); //-> false or true

rxjs.of(1, 2, 3, 4)
    .pipe(
        rxjs.delay(4000),
        rxjs.tap(x => console.log('Befor: ', x)),
        rxjs.map(x => x ** 2),
        rxjs.tap(x => console.log('After: ', x)),
    )
    .subscribe(createSubscribe('of')); 
