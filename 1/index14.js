function createSubscribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error', ': ', x);
        },
        complete() {
            console.log(name, ' completed');
        }
    }
}


// rxjs.throwError(() => new Error('Что-то пошло не так!'))
//     .pipe(
//         rxjs.catchError(err => rxjs.of(err))
//     )
//     .subscribe(createSubscribe('catch'));

// rxjs.interval(500)
//     .pipe(
//         rxjs.take(2)
//     ).subscribe(createSubscribe('interval'));


const s1 = rxjs.throwError(() => new Error('Что-то пошло не так!'))   
const s2 = rxjs.interval(500).pipe(rxjs.take(2))
rxjs.onErrorResumeNext(s1,s2)
    .subscribe(createSubscribe('onErrorResumeNext'));


