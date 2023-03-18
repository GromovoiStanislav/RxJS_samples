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



// const subject = new rxjs.Subject();
// subject.subscribe(createSubscribe('Subject'));
// subject.next(1);
// subject.next(2);
// setTimeout(() => {
//     subject.next(3)
//     subject.complete()
// },2000);
// // Subject: 1
// // Subject: 2
// // Subject: 3
// // Subject  completed


// const subject = new rxjs.Subject();
// const int = rxjs.interval(1000)
// int.subscribe(subject)
// subject.subscribe(createSubscribe('Subject1'));
// subject.subscribe(createSubscribe('Subject2'));
// setTimeout(() => {
//     subject.subscribe(createSubscribe('Subject3'));
// },2000);


// const subject = new rxjs.BehaviorSubject(Hello')
// subject.subscribe(createSubscribe('BehaviorSubject'))
// subject.next('world')
// // BehaviorSubject: Hello
// // BehaviorSubject: world
// console.log(subject.getValue())
// //world

// const subject = new rxjs.ReplaySubject(2)//буфер
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.complete()
// subject.subscribe(createSubscribe('ReplaySubject'))
// // ReplaySubject: 3
// // ReplaySubject: 4
// // ReplaySubject  completed

const subject = new rxjs.AsyncSubject();//только последнее значение и только если completed
subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();
subject.subscribe(createSubscribe('AsyncSubject'));
// AsyncSubject: 3
// AsyncSubject  completed