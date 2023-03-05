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

function delay(ms = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

//delay(3000).then(() => {
//    console.log('Resolved!');
//});

const p$ = rxjs.from(delay(4000));

p$.subscribe(createSubscribe('fromPromise'))