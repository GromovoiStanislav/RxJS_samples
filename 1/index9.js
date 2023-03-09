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
//     .pipe(
//         //rxjs.buffer(rxjs.interval(2000)),
//         //rxjs.bufferTime(2000),
//         //rxjs.bufferTime(2000, 5000),
//         rxjs.bufferWhen(() => rxjs.interval(1000 + Math.random() * 4000)),
//         rxjs.take(4)
//     )
//     .subscribe(createSubscribe('buffer'));

// rxjs.range(0,32)
//     .pipe(
//         rxjs.bufferCount(5,),
//         //rxjs.bufferCount(5,4),
//     )
//     .subscribe(createSubscribe('buffer'));


// rxjs.interval(1000)
//     .pipe(
//        rxjs.buffer(rxjs.fromEvent(document, 'click')),
//         //rxjs.map(x => x.length)
//     )
// .subscribe(createSubscribe('buffer'));


// const clicks = rxjs.fromEvent(document, 'click');
// const intervalEvents = rxjs.interval(1000);
// const buffered = intervalEvents.pipe(
//     rxjs.buffer(clicks),
//     rxjs.map(x => x.length));
// buffered.subscribe(x => console.log(x));


