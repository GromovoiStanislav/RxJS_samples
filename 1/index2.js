const button = document.querySelector('button');

var btn$ = rxjs.fromEvent(button, 'click');

btn$.subscribe(function (e) {
    console.log(e);
});

rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .subscribe(e => console.log(e));

rxjs.fromEvent(document, 'mousemove')
    .subscribe(e => {
        document.querySelector('h1').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
    });

