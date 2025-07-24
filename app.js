const music = new Audio('audio/Husn(PagalWorld.com.sb).mp3');
//music.play();

const songs = [
    {
        id: "1",
        songName: `Husn<br> 
        <div class="subtitle">Anuv Jain</div>`,
        poster: "images/husn.jpg"

    },
    {
        id: "2",
        songName: `Main Rang Sharbathon Ka<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "images/main rang sharbaton ka.jpg"

    },
    {
        id: "3",
        songName: `What makes you beautiful<br> 
        <div class="subtitle">One Direction</div>`,
        poster: "images/beautiful.png"

    },
    {
        id: "4",
        songName: `Life Goes On<br> 
        <div class="subtitle">BTS</div>`,
        poster: "images/life goes on.jpg"

    },
    {
        id: "5",
        songName: `Samajavaragamana<br> 
        <div class="subtitle">Sid Sriram</div>`,
        poster: "images/samajavaragamana.jpg"

    },
    {
        id: "6",
        songName: `Perfect<br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "images/divide.jpg"

    },
    {
        id: "7",
        songName: `Still With You<br> 
        <div class="subtitle">Jeon Jungkook</div>`,
        poster: "images/still with you.jpg"

    },
    {
        id: "8",
        songName: `Tu Jane Na<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "images/tu jane na.jpg"

    },
    {
        id: "9",
        songName: `Urike Urike<br> 
        <div class="subtitle">Sid Sriram</div>`,
        poster: "images/urike urike.jpg"

    },
    {
        id: "10",
        songName: `Run<br> 
        <div class="subtitle">BTS</div>`,
        poster: "images/run.jpg"

    },
    {
        id: "11",
        songName: `Steal My Girl<br> 
        <div class="subtitle">One Direction</div>`,
        poster: "images/steal my girl.png"

    },
    {
        id: "12",
        songName: `Ve Kamleya<br> 
        <div class="subtitle">Arijith Singh</div>`,
        poster: "images/ve kamleya.jpg",

    },
    {
        id: "13",
        songName: `Badass<br> 
        <div class="subtitle">Anirudh</div>`,
        poster: "images/badass.jpg"

    },
    {
        id: "14",
        songName: `Baitikochi Chusthe<br> 
        <div class="subtitle">Anirudh</div>`,
        poster: "images/baitikochi chusthe.jpg"

    },
    {
        id: "15",
        songName: `Dynamite<br> 
        <div class="subtitle">BTS</div>`,
        poster: "images/dynamite.png"

    },
    {
        id: "16",
        songName: `Thinking Out Loud<br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "images/cross.jpg",
        music: "audio/Thinking-Out-Loud.mp3",
        


    },
    {
        id: "17",
        songName: `Love Story<br> 
        <div class="subtitle">Taylor Swift</div>`,
        poster: "images/love story.png"

    },
    {
        id: "18",
        songName: `Night Changes<br> 
        <div class="subtitle">One Direction</div>`,
        poster: "images/night changes.jpg"

    },
    {
        id: "19",
        songName: `Nijamene Chebuthunna<br> 
        <div class="subtitle">Sid Sriram</div>`,
        poster: "images/nijamene chebuthunna.jpg"

    },
    {
        id: "20",
        songName: `Chaleya<br> 
        <div class="subtitle">Arijith Singh</div>`,
        poster: "images/chaleya.jpg"

    },
    {
        id: "21",
        songName: `Butter<br> 
        <div class="subtitle">BTS</div>`,
        poster: "images/butter.png"

    },
    {
        id: "22",
        songName: `Hoyna Hoyna<br> 
        <div class="subtitle">Anirudh</div>`,
        poster: "images/hoyna hoyna.png"

    },
    {
        id: "23",
        songName: `Hukum<br> 
        <div class="subtitle">Anirudh</div>`,
        poster: "images/hukum.jpg"

    },
    {
        id: "24",
        songName: `Lover<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "images/lover.jpg"
    

    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

//search data start
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
    const {id, songName, poster} = element;
   // console.log(poster);
   let card = document.createElement('a');
   card.classList.add('card');
   card.href = "#" + id;

   card.innerHTML = `   <img src="${poster}" alt="">
   <div class="content">
   ${songName}
       
   </div>`;
   search_results.appendChild(card);
    
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
            
        } else {
            items[index].style.display = "none";

        }

        if (input.value == 0) {
            search_results.style.display = "none";
            
        } else {

               search_results.style.display = "";

        }
        
    }
})
//search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click' , () =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
});
const makeAllplay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';

    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');

let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        //console.log(index);
        music.src = "audio/Thinking-Out-Loud.mp3"
        poster_master_play.src = "images/cross.jpg"
        music.play();

       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
       download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
        return els.id == index;

       });
        songTitles.forEach(elss =>{
        let { songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index -1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplay();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');




    })

});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];




music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    //console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
        
    } 

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
        
    } 


    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
   // console.log(seek.value);
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;

});
let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click',()=>{
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = "audio/Thinking-Out-Loud.mp3"
    poster_master_play.src = "images/cross.jpg"
    music.play();

   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
    return els.id == index;

   });
    songTitles.forEach(elss =>{
    let { songName} = elss;
    title.innerHTML = songName;
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index -1].style.background ="rgb(105, 105, 105, .1)";
   makeAllplay();
   el.target.classList.add('bi-pause-circle-fill');
   el.target.classList.remove('bi-play-circle-fill');
   wave.classList.add('active1');


})

next.addEventListener('click',()=>{
    index++;

    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }

    music.src = "audio/Thinking-Out-Loud.mp3"
    poster_master_play.src = "images/cross.jpg"
    music.play();

   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
    return els.id == index;

   });
    songTitles.forEach(elss =>{
    let { songName} = elss;
    title.innerHTML = songName;
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index -1].style.background ="rgb(105, 105, 105, .1)";
   makeAllplay();
   el.target.classList.add('bi-pause-circle-fill');
   el.target.classList.remove('bi-play-circle-fill');
   wave.classList.add('active1');

});


let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});








































