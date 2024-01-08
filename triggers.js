//THIS IS THE FILE TO PUT YOUR TRIGGERS

//Consider your inputs, your outputs, and your interface between these

//The classes referenced below come from my trained model https://teachablemachine.withgoogle.com/models/oWA7osCuu/
//create your own model at http://teachablemachine.withgoogle.com 
//If you remix this project place the model's URL below
let URL = 'https://teachablemachine.withgoogle.com/models/Q4EN2b0uA/';


function triggers(data){
  
  //for my own model, class 0 is 'hands on head' and class 1 is 'nothing'

  //You may have to tweak the probabilities
  
  //data[0] is my 'hands on head' class
  //if the model thinks the camera shows 'hands on head' with at least 75% probability, then it will play the audio file
  
   if(data[0].probability > 0.75){
    nextSong();
}

       
  
        
  //data[1] is my 'nothing' class
  if(data[1].probability > 0.75){
    previousSong();
  }  
  
  if(data[2].probability > 0.75){
  
  song.pause();

}
  
  if(data[3].probability > 0.75){
song.play();
  }
}