// // eslint-disable-next-line
// import React from 'react';
// import { TweenMax, Power2, Power4,TimelineMax,CSSPlugin,Back } from "gsap";

// const LikeButton = props => {

// 	var xmlns = 'http://www.w3.org/2000/svg', select = function (s) {
//         return document.querySelector(s);
//     }, selectAll = function (s) {
//         return document.querySelectorAll(s);
//     }, container = select('.container'), heartSVG = select('.heartSVG'), hit = select('#hit'), sparkleGrowGroup = select('#sparkleGrowGroup'), sparkleMoveGroup = select('#sparkleMoveGroup'), brokenHeartGroup = select('#brokenHeartGroup'), sparkleGrowColors = [
//         '#9E31E2',
//         '#9E31E2',
//         '#9E31E2',
//         '#92E8C5',
//         '#CDEB8E',
//         '#2AD492',
//         '#D79DF3'
//     ], sparkleMoveColors = [
//         '#E187D2',
//         '#E0A3FF',
//         '#F5BB30',
//         '#9ECA98',
//         '#35A0F0',
//         '#BADAB0',
//         '#33B6E9'
//     ];
// TweenMax.set(container, {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     xPercent: -50,
//     yPercent: -50
// });
// TweenMax.set('svg', { visibility: 'visible' });
// CSSPlugin.defaultSmoothOrigin = true;
// TweenMax.set([
//     '#breakLineL',
//     '#breakLineR'
// ], { drawSVG: '100% 100%' });
// var tl = new TimelineMax({
//     paused: true,
//     onComplete: goBack
// });
// tl.from('#pinkDot', 1, { attr: { r: 0 } }).set('#greyHeart', {
//     scale: 0,
//     transformOrigin: '50% 100%'
// }, '-=0.99').to('#pinkDot', 1, { fill: '#CD8FF7' }, '-=1').to('#hole', 1, { attr: { r: 67 } }, '-=0.5').from('#pinkHeart', 1.6, {
//     scale: 0,
//     transformOrigin: '50% 50%',
//     ease: Back.easeOut.config(1.2)
// }, '-=0.5').set([
//     '#sparkleGrowGroup',
//     '#sparkleMoveGroup'
// ], { alpha: 1 }, '-=1.5').to('#sparkleGrowGroup', 1, {
//     scale: 1.5,
//     transformOrigin: '50% 50%'
// }, '-=1.5').to('#sparkleMoveGroup', 1, {
//     scale: 1.2,
//     transformOrigin: '50% 50%'
// }, '-=1.5').staggerTo('#sparkleGrowGroup circle', 2, {
//     attr: { r: 0 },
//     cycle: {
//         fill: function (i) {
//             return sparkleGrowColors[i];
//         }
//     }
// }, 0, '-=0.9').staggerTo('#sparkleMoveGroup circle', 0.8, {
//     attr: { r: 0 },
//     cycle: {
//         fill: function (i) {
//             return sparkleMoveColors[i];
//         }
//     }
// }, 0, '-=2').addCallback(setUndoLike).set('.brokenHeartGroup', { alpha: 1 }).set('#pinkHeart', { alpha: 0 }).to([
//     '#breakLineL',
//     '#breakLineR'
// ], 3, { drawSVG: '0% 100%' }).to(['#brokenHeartL'], 4, {
//     rotation: -90,
//     transformOrigin: '110% 100%',
//     ease: Power2.easeIn
// }, '-=1.5').to(['#brokenHeartR'], 4, {
//     rotation: 90,
//     transformOrigin: '10% 100%',
//     ease: Power2.easeIn
// }, '-=4').to('#greyHeart', 3, {
//     scale: 1,
//     ease: Power4.easeInOut
// }, '-=1.6').set([
//     '#breakLineL',
//     '#breakLineR'
// ], { drawSVG: '0% 0%' }, '-=3').to([
//     '#brokenHeartL',
//     '#brokenHeartR'
// ], 0.3, { alpha: 0 }, '-=2');
// heartSVG.onclick = function () {
//     if (tl.time() === 0) {
//         tl.play(0);
//     } else {
//         tl.play();
//     }
//     hit.onmouseout();
// };
// hit.onmouseover = function () {
//     if (tl.time() === 0) {
//         TweenMax.set('.likePopup', { alpha: 1 });
//     } else {
//         TweenMax.set('.undoLikePopup', { alpha: 1 });
//     }
// };
// function setUndoLike() {
//     tl.pause();
//     TweenMax.set('.undoLikePopup', { alpha: 1 });
// }
// function goBack() {
//     tl.pause(0);
//     TweenMax.delayedCall(0.4, hit.onmouseover);
// }
// hit.onmouseout = function () {
//     TweenMax.set([
//         '.likePopup',
//         '.undoLikePopup'
//     ], { alpha: 0 });
// };
// tl.timeScale(4);


//     return (
//       <div className="container">
// <svg className="heartSVG" version="1.1"
// 	 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsAttr="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
// 	 x="0px" y="0px" width="600px" height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xmlSpace="preserve">
// <defs>
//   <mask id="dotMask">

// <circle id="whiteDot" fill="#FFFFFF" cx="300" cy="300.5" r="66"/>
// <circle id="hole" cx="300" cy="300.5" r="0"/>    
//   </mask>
// <path id="heart"  d="M318.2,259.5c-7.5,0-14.2,3.7-18.2,9.5c-4-5.7-10.7-9.5-18.2-9.5
// 	c-12.3,0-22.3,10-22.3,22.3c0,30.4,31.6,58.7,40.5,58.7s40.5-28.4,40.5-58.7C340.5,269.5,330.5,259.5,318.2,259.5z"/>  
// </defs>
//  <use id="greyHeart" xlinkHref="#heart" fill="#AAB8C2"/> 
//  <use id="pinkHeart" xlinkHref="#heart" fill="#E2264D"/> 


//   <g mask="url(#dotMask)">
//   <circle id="pinkDot" fill="#E52951" cx="300" cy="300.5" r="66"/>
//   </g>
// <g id="sparkleGrowGroup" opacity="0">
// 	<circle fill="#91D1F9" cx="310.7" cy="239" r="5"/>
// 	<circle fill="#91D1F9" cx="235.7" cy="305" r="5"/>
// 	<circle fill="#8CE9C4" cx="254.7" cy="252" r="5"/>
// 	<circle fill="#8CE9C4" cx="359.7" cy="322" r="5"/>
// 	<circle fill="#F48DA6" cx="332.7" cy="361" r="5"/>
// 	<circle fill="#CB8EF4" cx="357.7" cy="267" r="5"/>
// 	<circle fill="#91D1F9" cx="273.7" cy="363" r="5"/>
// </g> 
// <g id="sparkleMoveGroup" opacity="0">
// 	<circle fill="#91D1F9" cx="300.7" cy="229" r="5"/>
// 	<circle fill="#91D1F9" cx="263.7" cy="353" r="5"/>
// 	<circle fill="#8CE9C4" cx="243.7" cy="257" r="5"/>
// 	<circle fill="#8CE9C4" cx="367.7" cy="312" r="5"/>
// 	<circle fill="#F48DA6" cx="320.7" cy="353" r="5"/>
// 	<circle fill="#CB8EF4" cx="233.7" cy="317" r="5"/>
// 	<circle fill="#CB8EF4" cx="353.7" cy="255" r="5"/>
// </g> 
//   <g className="likePopup" opacity="0">
// 	<path id="likePopup" fill="#30393D" stroke="#FFFFFF" stroke-miterlimit="10" d="M367.3,194.5h-49.5l-17.7,20l-19.3-20h-48
// 		c-3.3,0-6-2.7-6-6V129c0-3.3,2.7-6,6-6h134.5c3.3,0,6,2.7,6,6v59.5C373.3,191.8,370.5,194.5,367.3,194.5z"/>
// 	<text id="likeText" x="266.9794" y="170.75" fill="#FFFFFF" font-family="'Arial', sans-serif" font-size="36px">Like</text> 
//   </g>
//   <g className="undoLikePopup" opacity="0">
// 	<path id="undoLikePopup" fill="#30393D" stroke="#FFFFFF" stroke-miterlimit="10" d="M387.3,194.5h-69.5l-17.7,20l-19.3-20h-68
// 		c-3.3,0-6-2.7-6-6V129c0-3.3,2.7-6,6-6h174.5c3.3,0,6,2.7,6,6v59.5C393.3,191.8,390.5,194.5,387.3,194.5z"/>
// 	<text id="undoLikeText" x="224.9589" y="170.75" fill="#FFFFFF" font-family="'Arial', sans-serif" font-size="36px">Undo like</text>    
//   </g>
//   {/* <!--BROKEN HEART-->  */}
//   <g className="brokenHeartGroup" opacity="0">
// <path id="brokenHeartR" fill="#E2264D" d="M299.9,340.5c8.9,0,40.5-28.4,40.5-58.7c0-12.3-10-22.3-22.3-22.3
// 	c-7.5,0-14.2,3.7-18.2,9.5l4,7.3l-11.8,15.5l11.3,11.3l-7.8,12.8l7.3,9l-4,6.7L300,340.5z"/>
// <path id="brokenHeartL" fill="#E2264D" d="M300.1,269c-4-5.7-10.7-9.5-18.2-9.5c-12.3,0-22.3,10-22.3,22.3
// 	c0,30.4,31.6,58.7,40.5,58.7l-1-9l4-6.7l-7.3-9l7.8-12.8l-11.3-11.3l11.8-15.5L300,269z"/>  
// <path id="breakLineL" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" d="M300,340.5l-1-9l4-6.7l-7.3-9
// 	l7.8-12.8l-11.3-11.3l11.8-15.5l-4-7.3"/>
// <path id="breakLineR" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" d="M300,340.5l-1-9l4-6.7l-7.3-9
// 	l7.8-12.8l-11.3-11.3l11.8-15.5l-4-7.3"/>
//   </g>  
//    <use id="hit" xlinkHref="#heart" fill="red" opacity="0"/> 

// </svg>

  
// </div>
//     )
// }

// export default LikeButton