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


// rxjs.from([1, 2, 3, 3, 3, 5, 5, 1, 1, 99, 99, 2, 4, 6])
//     .pipe(
//         rxjs.filter(x=>x>3),
//     )
//     .subscribe(createSubscribe('filter'));


rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .pipe(
        rxjs.map(e => e.target.value),
        rxjs.debounceTime(1000),
        rxjs.distinct(),
    )
    .subscribe(createSubscribe('debounceTime'));




// rxjs.from([1, 2, 3, 3, 3, 5, 5, 1, 1, 99, 99, 2, 4, 6])
//     .pipe(
//         rxjs.distinct(),
//     )
//     .subscribe(createSubscribe('filter'));



// rxjs.from([1, 2, 3, 3, 3, 5, 5, 1, 1, 99, 99, 2, 4, 6])
//     .pipe(
//         rxjs.distinctUntilChanged(),
//     )
// .subscribe(createSubscribe('from'))