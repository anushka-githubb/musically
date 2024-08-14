console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("songsssssss/song 1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let SongItems = Array.from(document.getElementsByClassName('SongItem'));

let songs = [
    {songname: "Raatan Lambiyaan", filePath: "songsssssss/song 1.mp3", coverPath:"https://i.postimg.cc/5tSWhntB/Whats-App-Image-2024-08-10-at-23-42-16-ecde814c.jpg"},
    {songname: "Tum Se Hi", filePath: "songsssssss/song2.mp3", coverPath:"https://i.postimg.cc/pLKwjqzw/Whats-App-Image-2024-08-10-at-23-29-33-2e5e2fd5.jpg"},
    {songname: "Mauja Hi Mauja", filePath: "songsssssss/song 3.mp3", coverPath:"https://i.postimg.cc/pLKwjqzw/Whats-App-Image-2024-08-10-at-23-29-33-2e5e2fd5.jpg"},
    {songname: "Ve Kamleya", filePath: "songsssssss/song4.mp3", coverPath:"https://i.postimg.cc/Hk1KTXRB/Whats-App-Image-2024-08-10-at-23-36-01-9665618a.jpg"},
    {songname: "Kabira", filePath: "songsssssss/song5.mp3", coverPath:"https://i.postimg.cc/QtCYfbKx/Whats-App-Image-2024-08-10-at-23-37-44-e0e2dc8a.jpg"},
    {songname: "Humsafar", filePath: "songsssssss/song6.mp3", coverPath:"https://i.postimg.cc/02nW1FG2/Whats-App-Image-2024-08-10-at-23-39-20-207f0e1e.jpg"},
    {songname: "Choo Loo", filePath: "songsssssss/song7.mp3", coverPath:"https://i.postimg.cc/bJ1gCBNP/Whats-App-Image-2024-08-10-at-23-40-45-72c2de0f.jpg"}
];

SongItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
   
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        astersongname.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
