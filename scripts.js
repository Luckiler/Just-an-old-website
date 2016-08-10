"use strict" //Returns errors to the console for debugging purpose


function clickCounterCheck() {
/**  
 *  Funtion that checks if there
 *  is a locally stored value of
 *  clickcount. If no, initialises
 *  it with value 0
 */
	if (localStorage.clickcount == undefined) {
		localStorage.clickcount = 0;
	}
}

function clickCounterDisplay() {
/**  
 *  Displays the amount of clicks on
 *  the clickable button
 */
	document.getElementById("clickButton").innerHTML = "Clicks : " + localStorage.clickcount;
}

function clickCounterAdd() {
/**
 *  Adds a click to the local counter
 */
	localStorage.clickcount = Number(localStorage.clickcount)+1;
	clickHandler();
}

function clickHandler() {
/**
 *  Modifies the 
 */
	clickCounterDisplay();
	var clicks = Number(localStorage.clickcount)
	var clickButton = document.getElementById("clickButton");
	if(clicks >= 10 && clicks < 20) {
		clickButton.setAttribute("class", "button1");
	} else if(clicks >= 20 && clicks < 40) {
		clickButton.setAttribute("class", "button2");
	} else if(clicks >= 40 && clicks < 70) {
		clickButton.setAttribute("class", "button3");
	} else if(clicks >= 70 && clicks <= 100) {
		clickButton.setAttribute("class", "button4");
		CCSStylesheetRuleStyle("stylesheet.css", ".button4", "transform", "rotate(" + (clicks - 70) / 30 * 360 + "deg) scale(" + (clicks - 60) / 30 + "," + (clicks - 60) / 30 + ")");
	} else if(clicks > 100){
		clickButton.setAttribute("class", "button5");
		document.getElementById("title").innerHTML = "Just an odd Website";
		document.getElementById("subtitle").innerHTML = "Welcome to this odd and useless website.";
		CCSStylesheetRuleStyle("stylesheet.css", ".phase2_1", "display", "block");
	}
}



function phase2_1buttonEnter() {
	document.getElementById("phase2_1Button").innerHTML = "<b><i>DON'T CLICK HERE OR THE WEBSITE WILL FALL APPART!!!</i></b>";
}

function phase2_1buttonLeave() {
	document.getElementById("phase2_1Button").innerHTML = "Just don't click here... you don't want to kill this old useless website...";
}

function phase2_1buttonDown() {
	document.getElementById("phase2_1Button").innerHTML = "<b><i>NOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!";
}

function CCSStylesheetRuleStyle(stylesheet, selectorText, style, value){ //credits to mrgrenier on stackoverflow.com
/** 
 *  returns the value of the element style of the rule in the stylesheet
 *  If no value is given, reads the value
 *  If value is given, the value is changed and returned
 *  If '' (empty string) is given, erases the value.
 *  The browser will apply the default one
 *
 * string stylesheet: part of the .css name to be recognized, e.g. 'default'
 * string selectorText: css selector, e.g. '#myId', '.myClass', 'thead td'
 * string style: camelCase element style, e.g. 'fontSize'
 * string value optionnal : the new value
 */
  var CCSstyle = undefined, rules;
  for(var m in document.styleSheets){
    if(document.styleSheets[m].href.indexOf(stylesheet) != -1){
     rules = document.styleSheets[m][document.all ? 'rules' : 'cssRules'];
     for(var n in rules){
       if(rules[n].selectorText == selectorText){
         CCSstyle = rules[n].style;
         break;
       }
     }
     break;
    }
  }
    return CCSstyle[style] = value
}
