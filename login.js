function entergame() {
     var player1=document.getElementById("player1_name").value;
     var player2=document.getElementById("player2_name").value;
     //set playernames in the local storage
     localStorage.setItem("player1",player1)
     localStorage.setItem("player2",player2)
     //code for navigating to next page
     window.location="game_page.html"
}