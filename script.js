window.addEventListener('load',init);

let time = 5;
let score= 0;
let isPlaying;

const message=document.querySelector('#message');
const timeleft=document.querySelector('#time');
const scores=document.querySelector('#score');
const shownword=document.querySelector('#shown-word');
const inputword=document.querySelector('#input');
const seconds=document.querySelector('#seconds');

const words = [
    'schedule',
    'position',
    'congrulations',
    'mississippi',
    'beautiful',
    'situation',
    'participant',
    'gamification',
    'recursive',
    'editor',
    'knowledge',
    'leisure',
    'library',
    'license',
    'maintenance',
    'mathematics',
    'mediocre',
    'millennium',
    'miniature',
    'miscellaneous',
    'mischievous',
    'misspell',
    'mysterious',
    'necessary',
    'neighbor',
    'nuclear',
    'occasion',
    'occurrence',
    'odyssey',
    'playwright',
    'precede'

];

function init(){
    showWord(words);
    inputword.addEventListener('input',match);
    setInterval(countdown,1000);
    setInterval(checkStatus,50);
}

function showWord(words){
    const r= Math.floor(Math.random() * words.length); 
    console.log(words[r]);
    shownword.innerHTML= words[r];

}

function countdown(){
    if(time>0){
        time--;

    }
    else if(time===0){
            isPlaying= false;
            }
    seconds.innerHTML= time;
}
        
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game Over!';
        score=-1;
    }
}

function match(){
    if(matchWords()){
        console.log('Matched');
        isPlaying=true;
        time=6;
        showWord(words);
        inputword.value= '';
        score++;
    }
    if(score===-1){
        scores.innerHTML=0;
    }
        else{ 
            scores.innerHTML= score;
        }
   
}
     
function matchWords(){
    if(inputword.value === shownword.innerHTML){
        message.innerHtml= 'Correct!';
        return true;
        
    } else{
        message.innerHtml='';
        return false;
    }
}
            