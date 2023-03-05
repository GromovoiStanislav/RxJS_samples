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

//const set = new Set([1, 2, 3, '4', '5', {id: 6}]);
const map = new Map([[1, 2], [3, 4], [5, 6]]);
//const arr = [1,2,3,5,8,7];
// const arr = [
//     {id:1,name:'a'},
//     {id:2,name:'d'},
// ];



rxjs.from(map)
    .subscribe(createSubscribe('from'));