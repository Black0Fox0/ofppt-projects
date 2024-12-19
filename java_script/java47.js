
let dd1 = $('.div1');
let dd2 = $('.div2');
let div = $('div')

div.text("Hello");

dd1.css('background','red')
dd2.css('background','blue')

$('#d1').click(()=>
{
    dd1.toggle()
})
$('#d2').click(()=>
{
    dd2.toggle()
})
