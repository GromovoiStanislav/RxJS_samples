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

rxjs.fromEvent(document.querySelector('input'), 'keyup').pipe(
    rxjs.tap(x => console.log('tap: ', x.target.value)),
    //rxjs.map(x => x.target.value),  
    rxjs.pluck('target', 'value'),
    rxjs.map(x => x.toUpperCase()),
    rxjs.map(x => ({ value: x, length: x.length})),
    
    
).subscribe(createSubscribe('map'));