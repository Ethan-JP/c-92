var player1=localStorage.getItem("player1")
var player2=localStorage.getItem("player2")
questionturn="p1"
answerturn="p2"
document.getElementById("p1name").innerHTML=player1
document.getElementById("p2name").innerHTML=player2
var p1score=0
var p2score=0
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("qturn").innerHTML="Question turn - "+player1
document.getElementById("aturn").innerHTML="Answer turn - "+player2

function send(){
    var getword=document.getElementById("word").value;
    qword=getword.toLowerCase()
    console.log(qword)

    //code for replacing the first letter

 letter1=qword.charAt(1)
 console.log(letter1)
replace1=qword.replace(letter1," _ ")
console.log(replace1)

//code for replacing the second letter

x=qword.length-1
console.log(x)
letter2=qword.charAt(x)
console.log(letter2)
replace2=replace1.replace(letter2," _ ")
console.log(replace2)

//code for replacing the third letter

y=Math.floor(qword.length/2)
console.log(y)
letter3=qword.charAt(y)
console.log(letter3)
replace3=replace2.replace(letter3," _ ")
console.log(replace3)

//creating tags to show the question

qtag=`<h4>Q. ${replace3}</h4> <br>`
//creating tags for getting the answers

atag=`A. <input type="text" id="answerinput"> <br> <br>`
buttontag=`<button onclick="check()" class="btn btn-primary">Check</button> `
document.getElementById("output").innerHTML=qtag+atag+buttontag

document.getElementById("word").value=" ";
}
function check() {
    getanswer=document.getElementById("answerinput").value;
    answer=getanswer.toLowerCase();
    console.log(answer)
    if (answer==qword) {
        if (answerturn=="p1") {
            p1score=p1score+1
            document.getElementById("p1score").innerHTML=p1score
        }
        else{
            p2score=p2score+1
            document.getElementById("p2score").innerHTML=p2score
        }
    }
    //code for changing the question turn
    if (questionturn=="p1") {
        questionturn="p2"
        document.getElementById("qturn").innerHTML="Question turn - "+player2
    }
    else{
        questionturn="p1"  
          questionturn="p2"
          document.getElementById("qturn").innerHTML="Question turn - "+player1
    }
    //code for changing the answer turn
    if (answerturn=="p1") {
        answerturn="p2"
        document.getElementById("aturn").innerHTML="Answer turn - "+player2
        
    }
    else{
        answerturn="p1"
        document.getElementById("aturn").innerHTML="Answer turn - "+player1
    }
    document.getElementById("output").innerHTML=" "
}