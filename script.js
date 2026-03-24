const videos = document.querySelectorAll('.video');
const popup = document.getElementById('popup');
const popupVideo = document.getElementById('popupVideo');
const closeBtn = document.getElementById('close');

let currentIndex = 0;
let videoList = [];

// Store all video sources
videos.forEach(video => {
    videoList.push(video.getAttribute('src'));
});

// Open video
videos.forEach((video, index) => {
    video.addEventListener('click', () => {
        currentIndex = index;
        openVideo();
    });
});

// Open function
function openVideo() {
    popup.style.display = "flex";
    popupVideo.src = videoList[currentIndex];
    popupVideo.play();
}

// Auto play next video when one ends
popupVideo.addEventListener('ended', () => {
    nextVideo();
});

// Next video
function nextVideo() {
    currentIndex++;
    if (currentIndex >= videoList.length) {
        currentIndex = 0; // loop
    }
    popupVideo.src = videoList[currentIndex];
    popupVideo.play();
}

// Previous video
function prevVideo() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = videoList.length - 1;
    }
    popupVideo.src = videoList[currentIndex];
    popupVideo.play();
}

// Close
closeBtn.onclick = () => {
    popup.style.display = "none";
    popupVideo.pause();
};

// Click outside closes
popup.onclick = (e) => {
    if (e.target !== popupVideo) {
        popup.style.display = "none";
        popupVideo.pause();
    }
};