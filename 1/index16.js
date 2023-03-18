function getUserById(id) {
    //     const params = {
    //         access_token: '547a815314348f7693aa5d246e7f2dfc06326e659082d5b0498edc6f96c7fa390ab547e02b4ce6fde65f6',
    //         user_ids: id,
    //         fields: 'photo_big'
    //     };

    //     return $.ajax({
    //         url: 'https://api.vk.com/method/users.get?' + $.param(params),
    //         type: 'GET',
    //         dataType: 'JSONP'
    //     }).promise();
}

rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .pipe(
        rxjs.pluck('target', 'value'),
        rxjs.distinct(),
        rxjs.debounceTime(2000),
        rxjs.mergeMap(v => rxjs.from(getUserById(v))),
        rxjs.catch(error => rxjs.of(error)),
        rxjs.map(x => x.response[0]),
    )
    .subscribe(
        (user) => {
            //     $('h1').html(`${user.first_name} ${user.last_name} <i>${user.uid}</i>`);
            //     $('img').attr('src', user.photo_big);
        },
        error => console.log(error),
        () => console.log('Completed')
    );