var fa=[]

function a(){
    var name1 = document.getElementById("friend_1").value;
    var name2 = document.getElementById("friend_2").value;
    var name3 = document.getElementById("friend_3").value;
    var name4 = document.getElementById("friend_4").value;
    var name5 = document.getElementById("friend_5").value;
    fa.push(name1);
    fa.push(name2);
    fa.push(name3);
    fa.push(name4);
    fa.push(name5);
    document.getElementById("output").innerHTML = fa;
    console.log(fa);
}

function b() {
    fa.sort();
    document.getElementById("output").innerHTML = fa;
    console.log(fa);
}