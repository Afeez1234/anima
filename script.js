// points testing
// var points = [43,22,223,46,664,43,3,22,45,6,5,44,33,4,3];
// points.sort(function(a,b){return a-b});
// document.getElementById('demo').innerHTML = points;



var leftNUM = 0;

function Movel() {
    leftNUM += 10;
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

function Move3() {
    leftNUM -=10;
    document.getElementById('sphere2').style.marginLeft = leftNUM + 'px';
}
function Move4() {
    leftNUM +=10;
    document.getElementById('sphere2').style.marginLeft = leftNUM + 'px';
}

function Move7(){
    leftNUM -= 10;
    document.getElementById('sphere4').style.marginLeft = leftNUM +'px';
}

function Move8(){
    leftNUM += 10;
    document.getElementById('sphere4').style.marginLeft = leftNUM + 'px';
}