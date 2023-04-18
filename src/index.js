import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// buisness

function getDino(){
  let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=1`;

  request.open("GET",url,true);
  request.send();

  request.addEventListener("loadend", function(){
    const response = JSON.parse(this.responseText)
    console.log(response);
    if(this.status === 200){
      playGame(response);
    } else{
      printError(this,response);
    }
  });
}

// ui

function playGame(apiDinosaur){

}

function printError(request,apiDinosaur){

}