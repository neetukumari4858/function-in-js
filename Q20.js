// Input:-
// 85
// 135
// Output :-
// 3
// “License suspended”


function license_checker(speed){
    var speed1=speed-70
    var points=speed1/5

    if(speed < 70){
        console.log("ok");
    }
    if(points>12){
        console.log("License suspended");
    }
    else{
        console.log(points);
    }
}
license_checker(135)


