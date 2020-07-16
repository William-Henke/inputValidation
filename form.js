let name = document.getElementById('name');
let password = document.getElementById('password');
name.addEventListener('keyup', validName);
password.addEventListener('keyup', validPassword);

// function isSubstring() {
//     namecheck.every(function(substring)
// }
function validName() {
    let nameCheck = str.search(" ");

    if(nameCheck < name.length){
        console.log('green');
        // display red x mark
    }
    else {
        console.log('red');
        // display the green check mark
    }
}

function validPassword() {
    let passwordCheck = document.getElementById('password').value;

    if(passwordCheck.length >= 8 && passwordCheck.length <= 12) {
        document.getElementById('invalidPassword').style.display = "none";
        // console.log('yes');
        // display red x mark
    }
    else {
        document.getElementById('invalidPassword').style.display = "block";
        // console.log('no');
        // display green check mark
    }
}
// var poa = str.search("space";)
// poa < name.length