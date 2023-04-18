export default class Dinosaur {
  static getDino() {
    return new Promise(function(playGame, printError){
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=1`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          playGame([response]); 
        } else {
          printError([this,response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}



