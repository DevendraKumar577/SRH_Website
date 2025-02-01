let navigationBar=document.querySelector(".bar");
let navigationImg=document.querySelector(".navigation-img");
let currMode="fa_xmark";
let bar_child=navigationBar.firstElementChild;
navigationBar.addEventListener("click",()=>{
    // let bar_child=navigationBar.firstElementChild;
    if(currMode==="fa_xmark"){
        currMode="fa_bars";
        navigationImg.classList.add("fa_bars");
        navigationImg.classList.remove("fa_xmark");
    }
    else{
          currMode="fa_xmark";
          navigationImg.classList.add("fa_xmark");
          navigationImg.classList.remove("fa_bars");
    }
    if(navigationImg.classList.contains("fa_xmark")){
        //   let bar_child=navigationBar.firstElementChild;
        bar_child.classList.replace("fa-xmark","fa-bars");
    }
    else{
        bar_child.classList.replace("fa-bars","fa-xmark");
    }
    // navigationImg.classList.add("");
    // let bar_child=navigationBar.firstElementChild;
    // if(navigationImg.classList.contains("bar_active")){
    //     bar_child.classList.replace("fa-bars","fa-xmark");
    // }
    // else{
    //     bar_child.classList.replace("fa-xmark","fa-bars");
    // }
});
const updownBar=document.querySelector(".merchandise-div");
const srhMerchandises=document.querySelector(".srh-merchandises");
const updownBar_child=updownBar.lastElementChild;
const activeMode="angle_up";
updownBar.addEventListener("click",()=>{
      if(activeMode==="angle_up"){
        activeMode="angle_down";
        srhMerchandises.classList.add("angle_down");
        srhMerchandises.classList.remove("angle_up");
      }
      else{
        activeMode="angle_up";
        srhMerchandises.classList.add("angle_up");
        srhMerchandises.classList.remove("angle_down");
      }
      if(srhMerchandises.classList.contains("angle_up")){
        updownBar_child.classList.replace("fa-angle-up","fa-angle-down");
      }
      else{
        updownBar_child.classList.replace("fa-angle-down","fa-angle-up");
      }
});
// let scriptURL = 'https://script.google.com/macros/s/AKfycbynOHhUv0hveOztqTMACLgRZhYQF3BST0Nehk_6ZkS-prFsZMvLadLezIQ8xgL1VgtMlg/exec';
// let form = document.forms["submit-to-google-sheet"];
// let thankYou=document.querySelector(".thank-you");
// // let searchEmail=document.querySelector(".search-email");
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//        thankYou.innerHTML="Thank you for subscribing!";
//     //    searchEmail.addEventListener("click",()=>{
//     //     searchEmail.classList.add("show_msg");
//     // })
//        setTimeout(function(){
//         thankYou.innerHTML="";
//        },2000);
//       //  searchEmail.addEventListener("click",()=>{
//       //      searchEmail.classList.add("show_msg");
//       //  })
//        form.reset();
//     })
//     .catch(error => console.error('Error!', error.message))
// })
// let searchEmail=document.querySelector(".search-email");
// searchEmail.addEventListener("click",()=>{
//     searchEmail.classList.add("show_msg");
// })
const scriptURL = 'https://script.google.com/macros/s/AKfycbynOHhUv0hveOztqTMACLgRZhYQF3BST0Nehk_6ZkS-prFsZMvLadLezIQ8xgL1VgtMlg/exec';
const form = document.forms["submit-to-google-sheet"];
const thankYou=document.querySelector(".thank-you");
// const searchEmail=document.querySelector(".search-email")
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       thankYou.innerHTML="Thank you for subscribing!";
       setTimeout(function(){
      thankYou.innerHTML=""
      },2000);
      // searchEmail.addEventListener("click",()=>{
      // searchEmail.classList.add("show_msg");
      //     })
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});


// const d=document.querySelector("scroll-div1");
// d.setAttribute("style","display:none")
