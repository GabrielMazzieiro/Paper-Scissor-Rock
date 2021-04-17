const scissors = $("#scissors");
const paper = $("#paper");
const rock = $("#rock");
const triangle = $("#triangle");

// get img id

const paperID = $("#paper").attr("id");
const scissorsID = $("#scissors").attr("id");
const rockID = $("#rock").attr("id");


var chosenOption;
const gameOption = ['paper','scissors','rock']

// Rules Button

$(".rules").click(() => {
  $("#rules-bg").css("display", "block");
});

// Close rules

$(".btn-close").click(() => {
  $("#rules-bg").css("display", "none");
});

$(".circle").click((e) => {
  chosenOption = $(e.currentTarget).attr("id");
});


function houseCircle (){
  $('#'+houseChoice+'-chosen').removeClass("hide").addClass("house-choice")
}

function notChosen (){
  $("h2").removeClass("hide");
  $("#wait-circle").removeClass("hide");

}



// Game Animation

$(".circle").click(() => {
  // Tirar a função de click das imagens 
  $(".circle").off("click").removeAttr("role");


  houseChoice = Math.floor(Math.random() * 3 ) + 1;
  houseChoice = gameOption[houseChoice - 1];
  console.log(houseChoice)
  
  switch (chosenOption) {
    case paperID:

    // Regras do jogo para a opção escolhida
      switch (houseChoice){
        case 'scissors':
          $("#final").innerHTML = "you lose!";
        break;
        case 'paper':
          $("#final").innerHTML = "it's a tie";
          break;
          case 'rock':
            $("#final").innerHTML = "you win!";
            break;
      }

     // Esconder as opções não escolhidas
      scissors.addClass("hide");
      rock.addClass("hide");
      triangle.addClass("hide");
      paper.addClass("chosen");
  
      // começar a animação das opções não escolhidas
      setTimeout(() => {      
        notChosen ()
      }, 1000);

      setTimeout(()=>{
        houseCircle ()
        $("#wait-circle").addClass("hide")
        setTimeout(()=>{
          $(".house-choice").addClass("end-game")
          $("h2").addClass("end-game")
          $("#paper").addClass("end-game")          
       setTimeout(()=>{
         $("#game-result").removeClass("hide")
       },1000) 
      },1000)
      }, 2000);

      break;
    case scissorsID :
// Esconder as opções não escolhidas
      paper.addClass("hide");
      rock.addClass("hide");
      triangle.addClass("hide");
      scissors.addClass("chosen");
  
      // começar a animação das opções não escolhidas
      setTimeout(() => {
        notChosen ()
      }, 1000);


      setTimeout(()=>{
        houseCircle ()
        $("#wait-circle").addClass("hide")
        setTimeout(()=>{
          $(".house-choice").addClass("end-game")
          $("h2").addClass("end-game")
          $("#scissors").addClass("end-game")          
       setTimeout(()=>{
         $("#game-result").removeClass("hide")
       },1000) 
      },1000)
      }, 2000)

      // Regras do jogo para a opção escolhida
    switch (houseChoice){
      case 'scissors':
      break;
      case 'paper':
        break;
        case 'rock':
          break;
    }

    break;

    case rockID :
      // Esconder as opções não escolhidas
      paper.addClass("hide");
      scissors.addClass("hide");
      triangle.addClass("hide");
      rock.addClass("chosen");
  
      // começar a animação das opções não escolhidas
      setTimeout(() => {
        notChosen ()
      }, 1000);
      
      setTimeout(()=>{
        houseCircle ()
        $("#wait-circle").addClass("hide")
        setTimeout(()=>{
          $(".house-choice").addClass("end-game")
          $("h2").addClass("end-game")
          $("#rock").addClass("end-game")          
       setTimeout(()=>{
         $("#game-result").removeClass("hide")
       },1000) 
      },1000)
      }, 2000)
       // Regras do jogo para a opção escolhida
    switch (houseChoice){
      case 'scissors':
      break;
      case 'paper':
        break;
        case 'rock':
          break;
    }

    break;
  }  
  
  // } else {
  //   alert("deu errado cara");
  // }
});
