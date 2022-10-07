$(() => {
    console.log("loaded");
})

function showanswer() {
    console.log("submited");

    $('body').html('');

    $.get('../showanswer.html').then(function(html) {
        let head = $(html).find('head');
        let body = $(html).find('body');
        console.log(body.text());
        // $('head').html(head.text());
        // $('body').html($(html).find('body'));
    });

    let score = 0;
    let q11 = $(($('input'))[0]).prop('checked');
    let q12 = $(($('input'))[1]).prop('checked');
    let q13 = $(($('input'))[2]).prop('checked');
    let q14 = $(($('input'))[3]).prop('checked');

    let q21 = $(($('input'))[4]).prop('checked');
    let q22 = $(($('input'))[5]).prop('checked');
    let q23 = $(($('input'))[6]).prop('checked');
    let q24 = $(($('input'))[7]).prop('checked');
}