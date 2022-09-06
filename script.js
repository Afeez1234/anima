// function Movel() {
//     var elem = document.getElementById('sphere1');
//     var pos= 0;
//     var id1 = setInterval(frame1, 5);
//     function frame1(){
//         if(pos = 90) {
//             clearInterval(id1);
//         }else{
//             pos++;
//             elem.style.left= pos + 'px';
//             elem.style.top = pos + 'px';
//             elem.style.right = pos + 'px';
//             elem.style.top = pos + 'px';
//         }
//     }
// }
// var points = [43,22,223,46,664,43,3,22,45,6,5,44,33,4,3];
// points.sort(function(a,b){return a-b});
// document.getElementById('demo').innerHTML = points;




// function Movel() {
//     const sphere = document.getElementById('sphere1');
//     sphere.style.right = Number(sphere.style.right.slice(0,-2) + 10 + 'px')
// }


var leftNUM = 0;

function Movel(){
    leftNUM += 20;
    document.getElementById('sphere1').style.marginLeft = leftNUM + 'px';
}

function Move2() {
    leftNUM -=10;
    document.getElementById('sphere1').style.marginLeft = leftNUM + 'px';
}
function Move5() {
    leftNUM -=10;
    document.getElementById('sphere3').style.marginLeft = leftNUM + 'px';
}
function Move6() {
    leftNUM +=10;
    document.getElementById('sphere3').style.marginLeft = leftNUM + 'px';
}




var rightNUM = 0;

function Move3() {
    rightNUM -=10;
    document.getElementById('sphere2').style.marginRight = rightNUM + 'px';
}
function Move4() {
    rightNUM +=10;
    document.getElementById('sphere2').style.marginRight = rightNUM + 'px';
}

