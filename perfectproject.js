/*SONG LIST BTNS START*/

var seventiesBtn = document.getElementById("seventies-btn");
var eightiesBtn = document.getElementById("eighties-btn");
var ninetiesBtn = document.getElementById("nineties-btn");

var seventiesSongList = document.getElementById("seventies-song-list");
var eightiesSongList = document.getElementById("eighties-song-list");
var ninetiesSongList = document.getElementById("nineties-song-list");

var songListToggleCon =document.getElementById("song-list-toggle-con");
var songListToggleClick = document.getElementById("song-list-toggle-click");
var songListToggleTouch = document.getElementById("song-list-toggle-touch");
var songBlur = document.getElementById("song-blur");

seventiesBtn.addEventListener("click",changeToSeven ,{passive: true});
eightiesBtn.addEventListener("click",changeToeight ,{passive: true});
ninetiesBtn.addEventListener("click",changeToNine ,{passive: true});
songListToggleClick.addEventListener("click", disableToggle ,{passive: true});
songListToggleTouch.addEventListener("click", disableToggle ,{passive: true})

function changeToSeven(){
    seventiesBtn.style.backgroundColor="red";
    seventiesSongList.style.display="block";
    seventiesSongList.style.overflowY="auto"
    eightiesSongList.style.display="none";
    eightiesBtn.style.backgroundColor="black";
    ninetiesSongList.style.display="none";
    ninetiesBtn.style.backgroundColor="black";
    songListToggleCon.style.display="none";
    songBlur.style.filter="blur(0)";
};

function changeToeight(){
    eightiesSongList.style.display="block";
    eightiesBtn.style.backgroundColor="red";
    seventiesBtn.style.backgroundColor="black";
    seventiesSongList.style.display="none";
    ninetiesSongList.style.display="none";
    ninetiesBtn.style.backgroundColor="black";
    seventiesSongList.style.overflowY="auto"
    songListToggleCon.style.display="none";
    songBlur.style.filter="blur(0)";
};

function changeToNine(){
    ninetiesSongList.style.display="block";
    ninetiesBtn.style.backgroundColor="red";
    seventiesBtn.style.backgroundColor="black";
    seventiesSongList.style.display="none";
    eightiesSongList.style.display="none";
    eightiesBtn.style.backgroundColor="black";
    seventiesSongList.style.overflowY="auto"
    songListToggleCon.style.display="none";
    songBlur.style.filter="blur(0)";
};

function disableToggle(){
    seventiesSongList.style.overflowY="auto"
    songListToggleCon.style.display="none";
    songBlur.style.filter="blur(0)";
}

/*SONG LIST BTNS END*/

/*MEDIA VIDEO SLIDER START*/

var videoOne = document.getElementById("video-1");
var videoTwo = document.getElementById("video-2");
var videoThree = document.getElementById("video-3");

var videoOneBtns = document.getElementById("video-1-btns");
var videoOneLeftBtn = document.getElementById("video-1-left");
var videoOneRightBtn = document.getElementById("video-1-right");

var videoTwoBtns = document.getElementById("video-2-btns");
var videoTwoLeftBtn = document.getElementById("video-2-left");
var videoTwoRightBtn = document.getElementById("video-2-right");

var videoThreeBtns = document.getElementById("video-3-btns");
var videoThreeLeftBtn = document.getElementById("video-3-left");
var videoThreeRightBtn = document.getElementById("video-3-right");

videoOneLeftBtn.addEventListener("click",changeToVideoThreeFromOne ,{passive: true});
videoOneRightBtn.addEventListener("click", changeToVideoTwoFromOne ,{passive: true});

videoTwoLeftBtn.addEventListener("click",changeToVideoOneFromTwo ,{passive: true});
videoTwoRightBtn.addEventListener("click",changeToVideoThreeFromTwo ,{passive: true});

videoThreeLeftBtn.addEventListener("click",changeToVideoTwoFromThree ,{passive: true});
videoThreeRightBtn.addEventListener("click",changeToVideoOneFromThree ,{passive: true});

function changeToVideoThreeFromOne(){
    videoOne.style.display="none";
    videoOneBtns.style.display="none";
    videoThree.style.display="block";
    videoThreeBtns.style.display="flex";
};

function changeToVideoTwoFromOne(){
    videoOne.style.display="none";
    videoOneBtns.style.display="none";
    videoTwo.style.display="block";
    videoTwoBtns.style.display="flex";
};

function changeToVideoOneFromTwo(){
    videoTwo.style.display="none";
    videoTwoBtns.style.display="none";
    videoOne.style.display="block";
    videoOneBtns.style.display="flex";
};

function changeToVideoThreeFromTwo(){
    videoTwo.style.display="none";
    videoTwoBtns.style.display="none";
    videoThree.style.display="block";
    videoThreeBtns.style.display="flex";
};

function changeToVideoTwoFromThree(){
    videoThree.style.display="none";
    videoThreeBtns.style.display="none";
    videoTwo.style.display="block";
    videoTwoBtns.style.display="flex";
};

function changeToVideoOneFromThree(){
    videoThree.style.display="none";
    videoThreeBtns.style.display="none";
    videoOne.style.display="block";
    videoOneBtns.style.display="flex";
};

/*MEDIA VIDEO SLIDER END*/

/*MEDIA IMAGE SLIDER START*/

let activeMediaImage = document.getElementById("active-media-image");

var imageOneLeftBtn = document.getElementById("image-1-left");
var imageOneRightBtn = document.getElementById("image-1-right");

var imageTwoLeftBtn = document.getElementById("image-2-left");
var imageTwoRightBtn = document.getElementById("image-2-right");

var imageThreeLeftBtn = document.getElementById("image-3-left");
var imageThreeRightBtn = document.getElementById("image-3-right");

var imageFourLeftBtn = document.getElementById("image-4-left");
var imageFourRightBtn = document.getElementById("image-4-right");

var imageFiveLeftBtn = document.getElementById("image-5-left");
var imageFiveRightBtn = document.getElementById("image-5-right");

var sliderImagesOne = document.getElementById("desk-media-images-content-one");
var sliderImagesTwo = document.getElementById("desk-media-images-content-two");
var sliderImagesThree = document.getElementById("desk-media-images-content-three");
var sliderImagesFour = document.getElementById("desk-media-images-content-four");
var sliderImagesFive = document.getElementById("desk-media-images-content-five");

imageOneLeftBtn.addEventListener("click",slideToImageFiveFromOne ,{passive: true});
imageOneRightBtn.addEventListener("click",slideToImageTwoFromOne ,{passive: true});

imageTwoLeftBtn.addEventListener("click",slideToImageOneFromTwo ,{passive: true});
imageTwoRightBtn.addEventListener("click",slideToImageThreeFromTwo ,{passive: true});

imageThreeLeftBtn.addEventListener("click",slideToImageTwoFromThree ,{passive: true});
imageThreeRightBtn.addEventListener("click",slideToImageFourFromThree ,{passive: true});

imageFourLeftBtn.addEventListener("click",slideToImageThreeFromFour ,{passive: true});
imageFourRightBtn.addEventListener("click",slideToImageFiveFromFour ,{passive: true});

imageFiveLeftBtn.addEventListener("click",slideToImageFourFromFive ,{passive: true});
imageFiveRightBtn.addEventListener("click",slidetoImageOneFromFive ,{passive: true});

function slideToImageFiveFromOne(){
    sliderImagesOne.style.display="none";
    sliderImagesFive.style.display="flex";
};

function slideToImageTwoFromOne(){
    sliderImagesOne.style.display="none";
    sliderImagesTwo.style.display="flex";
};
function slideToImageOneFromTwo(){
    sliderImagesTwo.style.display="none";
    sliderImagesOne.style.display="flex";
};
function slideToImageThreeFromTwo(){
    sliderImagesTwo.style.display="none";
    sliderImagesThree.style.display="flex";
};
function slideToImageTwoFromThree(){
    sliderImagesThree.style.display="none";
    sliderImagesTwo.style.display="flex";
};
function slideToImageFourFromThree(){
    sliderImagesThree.style.display="none";
    sliderImagesFour.style.display="flex";
};
function slideToImageThreeFromFour(){
    sliderImagesFour.style.display="none";
    sliderImagesThree.style.display="flex";
};
function slideToImageFiveFromFour(){
    sliderImagesFour.style.display="none";
    sliderImagesFive.style.display="flex";
};
function slideToImageFourFromFive(){
    sliderImagesFive.style.display="none";
    sliderImagesFour.style.display="flex";
};
function slidetoImageOneFromFive(){
    sliderImagesFive.style.display="none";
    sliderImagesOne.style.display="flex";
};

sliderImagesOne.addEventListener("click", changeActiveImgOne ,{passive: true});

function changeActiveImgOne(event){
    let clickedImage= event.target;
    if(clickedImage.className=="media-images"){
        activeMediaImage.src=clickedImage.src.replace(".webp","full.webp");

    }
};
sliderImagesTwo.addEventListener("click", changeActiveImgTwo) ,{passive: true};

function changeActiveImgTwo(event){
    let clickedImage= event.target;
    if(clickedImage.className=="media-images"){
        activeMediaImage.src=clickedImage.src.replace(".webp","full.webp");
    }
};
sliderImagesThree.addEventListener("click", changeActiveImgThree ,{passive: true});

function changeActiveImgThree(event){
    let clickedImage= event.target;
    if(clickedImage.className=="media-images"){
        activeMediaImage.src=clickedImage.src.replace(".webp","full.webp");
    }
};
sliderImagesFour.addEventListener("click", changeActiveImgFour ,{passive: true});

function changeActiveImgFour(event){
    let clickedImage= event.target;
    if(clickedImage.className=="media-images"){
        activeMediaImage.src=clickedImage.src.replace(".webp","full.webp");
    }
};
sliderImagesFive.addEventListener("click", changeActiveImgFive ,{passive: true});

function changeActiveImgFive(event){
    let clickedImage= event.target;
    if(clickedImage.className=="media-images"){
        activeMediaImage.src=clickedImage.src.replace(".webp","full.webp");
    }
};


/*MEDIA IMAGE SLIDER END*/