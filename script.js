    let seekBar=document.getElementById("seekBar");
    let songItem ;
    let nameBar=document.getElementById("nameBar")
    let previous=document.getElementsByClassName("buttonsdown")[0];
    let masterPlay=document.getElementsByClassName("buttonsdown")[1];
    let next=document.getElementsByClassName("buttonsdown")[2];
    let listItems=document.getElementsByClassName("listItems");
    let songs=[ 
        {songName:"Locked in", path:"songs/Bazanji - Locked In (Official Music Video).mp3"},
        {songName:"One in a Million", path:"songs/Bazanji - One In a Million (Official Audio).mp3"},
        {songName:"Loner", path:"songs/Bazanji - Loner (Official Audio).mp3"},
        {songName:"Picasso", path:"songs/Bazanji - Picasso (Official Audio).mp3"},
        {songName:"Far From Normal", path:"songs/Bazanji - Far From Normal (Official Audio).mp3"},
        {songName:"Tony Montana", path:"songs/Bazanji - Tony Montana (Official Audio).mp3"},
        {songName:"Past Life", path:"songs/Bazanji - Past Life (Official Audio).mp3"},
        {songName:"Nightmares", path:"songs/Bazanji - Nightmares (Official Audio).mp3"},
        {songName:"Demons", path:"songs/Bazanji - Demons (Official Audio).mp3"},
        {songName:"Stronger", path:"songs/Bazanji - Stronger (Official Music Video).mp3"}
    ];
for(let i=0;i<10;i++)
{
listItems[i].innerHTML=songs[i].songName;
listItems[i].addEventListener("click",()=>{
    if(songItem!=undefined)
    {songItem.pause();}
    seekBar.value=0;
songItem=new Audio(songs[i].path);
nameBar.innerText=songs[i].songName;
masterPlay.src="images/play.png";
selected();
});
}

    document.getElementById("arrow").addEventListener("click",()=>{
        document.getElementById("songBox").style.left=`${document.getElementById("songBox").style.left=="-65%"?"1%":"-65%"}`;
        });

        
        function selected(){
            songItem.addEventListener("timeupdate",()=>{
                let percentage = ((parseFloat(songItem.currentTime))/parseFloat(songItem.duration))*100;
                seekBar.value=`${percentage}`;
            });
            
            masterPlay.addEventListener("click",()=>{
                if((songItem).currentTime==0||songItem.paused)
               { songItem.play();
                masterPlay.src="images/pause.png";}
                else {
                    songItem.pause();
                    masterPlay.src="images/play.png";    
                }
            });
    seekBar.addEventListener("change",()=>{
        songItem.currentTime=((seekBar.value/100)*songItem.duration);
    });

}
// masterPlay.addEventListener("click",()=>{
//     if((songItem).currentTime==0||songItem.paused)
//    { songItem.play();
//     masterPlay.src="images/pause.png";}
//     else {
//         songItem.pause();
//         masterPlay.src="images/play.png";    
//     }