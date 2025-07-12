let musics = [
    {
        name: "tatal1",
        cover: "image/BingImageOfTheDay_20230619.jpg",
        audio: new Audio("./music/Amir Tataloo - Boht [128].mp3")
    }, {
        name: "tatal2",
        cover: "image/BingImageOfTheDay_20230620.jpg",
        audio: new Audio("./music/Amir Tataloo - Heyf Didid Raft [128].mp3")
    }, {
        name: "tatal3",
        cover: "image/BingImageOfTheDay_20230621.jpg",
        audio: new Audio("./music/amir_tataloo_hagh 128.mp3")
    }

]
let range = document.querySelector("#music-time")
let playBtn = document.querySelector("#play-btn")
let nextBtn = document.querySelector("#next-btn")
let preBtn = document.querySelector("#pre-btn")
let musicCover = document.querySelector("#music-cover")
let musicName = document.querySelector("#music-name")
let currentMusic = 0
let audio = musics[currentMusic].audio
musicCover.src = musics[currentMusic].cover
musicName.innerText = musics[currentMusic].name

audio.addEventListener("canplay", () => {
    console.log(audio.duration)
    range.max = audio.duration
})
audio.addEventListener("timeupdate", () => {
    range.value = audio.currentTime
})
range.addEventListener("input", () => {
    audio.currentTime = range.value
})
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play()
        musicCover.style.animationPlayState = "running"
        playBtn.classList.replace("fa-play", "fa-pause")
    } else {
        audio.pause()
        musicCover.style.animationPlayState = "paused"
        playBtn.classList.replace("fa-pause", "fa-play")

    }
})
preBtn.addEventListener("click", () => {
    changeMusic("pre")
})
nextBtn.addEventListener("click", () => {
    changeMusic("next")
})
function changeMusic(state) {
    audio.pause()
    range.value = 0
    playBtn.classList.replace("fa-pause", "fa-play")
    musicCover.style.animationPlayState = "paused"
    audio.currentTime=0
    if(state=="next"){
        if(currentMusic==musics.length-1){
            currentMusic=0
        }else currentMusic++
    }else{
            if(currentMusic==0){
            currentMusic=musics.length-1
        }else currentMusic--
    }

    audio = musics[currentMusic].audio
    musicCover.src = musics[currentMusic].cover
    musicName.innerText = musics[currentMusic].name



}