// initailzation of matrix ended xx---xx
var trail = new Array(9);
for (var i = 0; i < trail.length; i++) {
    trail[i] = new Array(9);

}

for(let i= 0;i < 9 ; i ++){
    for(let j = 0 ;j <9 ;j++){
        trail[i][j] = 1;
    }
    console.log(trail[i]);
}


var checker = new Array(9);
for (var i = 0; i < checker.length; i++) {
    checker[i] = new Array(9);

}

for(let i= 0;i < 9 ; i ++){
    for(let j = 0 ;j <9 ;j++){
        if(i === j)
          checker[i][j] = "*";
         else 
           checker[i][j] = trail[i][j];
        }
        console.log(checker[i]);
    }
    
    var user = new Array(9);
    for (var i = 0; i < user.length; i++) {
    user[i] = new Array(9);

}

for(let i= 0;i < 9 ; i ++){
    for(let j = 0 ;j <9 ;j++){
        if(i == j)
          user[i][j] = '*';
        else 
          user[i][j] = trail[i][j];
    }
    console.log(user[i]);
}
// initailzation of matrix ended xx---xx


// genrating rand no. for dipalying
let level = 0;
// when level = 0 dificulty => easy
// when level = 1 dificulty => medium
// when level = 2 dificulty => hard
let cnt_display = 30;
function hard1(event) {
    level = 2;
    cnt_display = 30 + Math.floor((Math.random() * 10)); // genrate rand value 30-40 
    console.log(cnt_display);
}

function easy1() {
    level = 0;
    cnt_display = 50 + Math.floor((Math.random() * 10)); // genrate rand value 50-60
    console.log(cnt_display);
}
function medium1() {
    level = 1;
    cnt_display = 40 + Math.floor((Math.random() * 10)); // genrate rand value 40-50
    console.log(cnt_display);
}

document.getElementById('easy').addEventListener('click', easy1);
document.getElementById('medium').addEventListener('click', medium1);
let var_hard = document.getElementById('hard').addEventListener('click', hard1);
// var_hard.addEventListener("click"


// genrating rand no. for dipalying


// creating a matrix 
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);
// table.setAttribute("style","border:1px solid #D6CDA4" )

// Adding the entire table into the matrix class

document.querySelector('.matrix').appendChild(table);

function checkInput(ob) {
    //to check input should be 1-9
    var invalidChars = /[^1-9]/gi
    if (invalidChars.test(ob.value)) {
        ob.value = ob.value.replace(invalidChars, "");
    }
};

function create_table() {
    // function declation (this is the main part which creates the table of size(9*9) )

    for (i = 1; i <= 9; i++) {

        var row = document.createElement("tr");

        for (j = 1; j <= 9; j++) {
            cell = document.createElement("td");
            // inp = it stores the user input when the feild is empty
            let inp = '<input class="inp" maxlength="1" onChange="checkInput(this)" onKeyup="checkInput(this)" type="text" autocomplete="off"/>';

            if (checker[i-1][j-1]==='*') {
                // input for empty feilds...
                cell.innerHTML = inp;
            }
            else {
                // fixed value for rest of cell....
                cell.innerHTML = trail[i-1][j-1];
            }

            if (i % 3 == 0 && j % 3 == 0)
                cell.setAttribute("style", "border-right:3px solid black ;border-bottom:3px solid black;");
            else if (i % 3 == 0 && j % 3 != 0)
                cell.setAttribute("style", "border-bottom:3px solid black; border-right:3px solid #D6CDA4;");
            else if (j % 3 == 0 && i % 3 != 0)
                cell.setAttribute("style", "border-right:3px solid black ; border-bottom  :3px solid #D6CDA4 ;");
            else
                cell.setAttribute("style", "border-right:3px solid #D6CDA4 ; border-bottom  :3px solid #D6CDA4 ;");
            row.append(cell);


        }
        tbody.append(row);
    }

}

// matrix called and printed to a webpage (styling is still pendding....)

// calling a matrix(table , this will )
document.querySelector(".matrix").onload = create_table();


