let music=null;
let isplay=false;
let sname="";
let lastmusic=null;
let cardbutton=null;

function playMusic(songid,songname){
    sname=document.getElementById(songname).innerText
    music=document.getElementById(songid);
    cardbutton=music.nextElementSibling.querySelector("img");
    console.log(cardbutton)
    if(isplay==true){
        lastmusic.pause();
        music.currentTime = 0        
        if(lastmusic==music){
            music.pause();
             document.getElementById('playerbutton').src="play-button.png";
             cardbutton.src="play-button.png"
             isplay=false;
        }else{
            music.play();
            document.getElementById('playerbutton').src="pause.png";
            document.getElementById('playername').innerHTML=sname;
            cardbutton.src="pause.png"
            lastmusic=music;
            isplay=true;
        }

       
    }else{
        music.play();
        document.getElementById('playerbutton').src="pause.png";
        isplay=true;
        document.getElementById('playername').innerHTML=sname;
        lastmusic=music;
        cardbutton.src="pause.png";
        
    }
    
    // music=document.getElementById(songid);
    // music.play();
    // document.getElementById('playerbutton').src="pause.png";
    // isplay=true;

    // sname=document.getElementById(songname).innerText
    // document.getElementById('playername').innerHTML=sname;
    // lastmusic=music;
    

}


function pauseMusic(){
    if(isplay==false){
        music.play();
         document.getElementById('playerbutton').src="pause.png";
         cardbutton.src="pause.png";
         isplay=true;
    }else{
         music.pause();
         music.currentTime = 0
         document.getElementById('playerbutton').src="play-button.png";
         cardbutton.src="play-button.png"
         isplay=false;
    }
    
}