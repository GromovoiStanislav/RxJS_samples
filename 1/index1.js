const stream$ = new rxjs.Observable((observer)=> {
    observer.next('One');

    setTimeout(function() {
        observer.complete();
        observer.error('Error');
    }, 5000);

    setTimeout(function() {
        observer.next('2 secs');
    }, 2000);

    observer.next('Two');
});


stream$
    .subscribe({
        next(data) {
            console.log('subscribe', data);
        },
        error(err) {
            console.log('Error', err);
        },
        complete() {
            console.log('Completed');
        }
    });

rxjs.fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));


