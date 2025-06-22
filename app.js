// INFINITE SCROLL 
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "0% 90%",
    end: "180% 90%",
    scrub: true,
  }
})

tl.to(".strip-left", {
  marginLeft: "0%",
}, 'a')
.to(".strip-right", {
  marginLeft: "-100%",
}, 'a');


//ARTS PAGE
let items = document.querySelectorAll('.slider .list .items');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .items');

//config param
let countItem = 4;
let itemActive = 0;
//event next click
next.onclick = function(){
  itemActive = itemActive + 1;
  if(itemActive >= countItem){
    itemActive = 0;
  }
  showSlider();
}
//event prev click
prev.onclick = function(){
  itemActive = itemActive - 1;
  if(itemActive < 0){
    itemActive = countItem - 1;
  }
  showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000)   // 5 sec auto slide

function showSlider(){
  //remove item active old
  let itemActiveOld = document.querySelector('.slider .list .items.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .items.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  //active new item
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  // clear auto run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000)  // 5 sec auto slide
}