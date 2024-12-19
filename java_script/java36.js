

const max = 1000;
const min = 0;



function animation()
{
    var right = Math.floor(Math.random() * (max - min)) + min;
    
    $('#imgA').animate(
        {
            right: right,
    },3000
    );

    animation();
    
};

animation();





