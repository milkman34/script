// ==UserScript==
// @name         Ae86 2.8
// @author       FZ/IMPACT/OIRD
// @description  try to take over the world
// @version      2.8
// @match           *://*.moomoo.io/*
// @match        *://mohmoh.onrender.com/*
// @icon https://cdn.discordapp.com/attachments/1174756625349881998/1180462011629445250/initial-d-ae86-thumbnail.png?ex=657d81eb&is=656b0ceb&hm=d475caef715037ceb270249d11973ade96d5f3f5e8c9ec0238acc7b460c17453&
// @grant           none
// ==/UserScript==
/* Credits & Changelog
0.0 =
Goals: Best combat, Best visuals


what we doin tsk tsk tsk
*/
/*var scaleFactor = 0.8;
var gameUI = document.getElementById('gameUI');
var elementsToScale = Array.from(gameUI.children).filter(function(child) {
  return child.id !== 'resDisplay';
});
elementsToScale.forEach(function(element) {
  element.style.transform = `scale(${scaleFactor})`;
});*/


// // INVISIBLE IFRAME TO SIMULATE TAB ACTIVE
// let visibilityChange = function() {
//     let state = document.visibilityState;
//     if (state === "hidden") {
//         let iframe = document.createElement('iframe');
//         iframe.src = 'data:text/plain,';
//         iframe.style.display = 'none';
//         document.body.appendChild(iframe);
//         setTimeout(function() {
//             document.body.removeChild(iframe);
//         }, 3000);
//     } else {
//         let iframes = document.querySelectorAll('iframe');
//         setTimeout(()=>{
//             iframes.forEach((iframe) => {
//                 document.body.removeChild(iframe);
//             });
//         }, 120);
//     }
// };
// document.addEventListener('visibilitychange', visibilityChange, false);
(function() {
})();var moomooVer = $('#linksContainer2 .menuLink').html(),
    hideSelectors = ['#mobileDownloadButtonContainer',
                     '#followText',
                     '#smallLinks',
                     '#linksContainer1',
                     '#twitterFollow',
                     '#youtubeFollow',
                     '#cdm-zone-02',
                     '#youtuberOf',
                     '#downloadButtonContainer',
                     '#promoImg',
                     '.menuHeader',
                     '.menuLink',
                     '.menuHeader:nth-child(5)',
                     '.menuHeader:nth-child(6)',
                     '.menuText',
                     '#adCard',
                     '#promoImgHolder',
                    ],

    css = '#rightCardHolder {display: block!important}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

for ( let i = 0; i < hideSelectors.length; i++ ) {
    $(hideSelectors[i]).hide();
}

head.appendChild(style);
$('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">' + moomooVer + '</a>');

// document.getElementById('promoImgHolder').innerHTML = '</iframe><iframe width="420px" height="236.25px" src="https://www.youtube-nocookie.com/embed/GPATUFiWoTI" frameborder="0" allowfullscreen></iframe>';
// document.getElementById('adCard').innerHTML = '<iframe width="420px" height="236.25px" src="https://www.youtube-nocookie.com/embed/D3_2AIOEnZQ" frameborder="0" allowfullscreen></iframe>';
// document.getElementById('downloadButtonContainer').innerHTML = '</iframe><iframe width="420px" height="236.25px" src="http://icecast3.play.cz/evropa2-128.mp3"></iframe>';
// Function to handle mouse enter event for the "enter game box"
// Function to handle mouse enter event for the boxes
function onBoxMouseOver() {
    this.style.transform = 'scale(1.1)'; // Increase size by 10%
    this.style.borderRadius = '10px'; // Add rounded corners
    this.style.boxShadow = '0 0 0 1px #0c3fcc'; // Add orange outline with 1px width
}

// Function to handle mouse leave event for the boxes
function onBoxMouseLeave() {
    this.style.transform = 'scale(1)'; // Restore original size
    this.style.borderRadius = '0'; // Remove rounded corners to make the box square again
    this.style.boxShadow = 'none'; // Remove the orange outline
}

// Function to handle mouse enter event for the "enter game box"
function onEnterGameMouseOver() {
    const enterGameBox = document.getElementById('enterGame');
    enterGameBox.style.transform = 'scale(1.05)'; // Increase size by 5%
    enterGameBox.style.backgroundColor = 'rgba(11, 133, 189, 0.7)'; // Change background color to yellow
    enterGameBox.style.borderRadius = '20px'; // Add more rounded corners
}

// Function to handle mouse leave event for the "enter game box"
function onEnterGameMouseLeave() {
    const enterGameBox = document.getElementById('enterGame');
    enterGameBox.style.transform = 'scale(1)'; // Restore original size
    enterGameBox.style.backgroundColor = '#00FF00'; // Change background color back to green
    enterGameBox.style.borderRadius = 