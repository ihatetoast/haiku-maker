
//make three arrays of 5. 7, 5 syllables.
//build them big, vary serious with humour. mushy to innane
var firstLine =['Little kitten cries,', 'Spring frogs chirp with love,', 'Sad slug slides alone,',
 'Leaves fall and squirrels dig,','Old dog bays at moon,', 'Monkeys howl and growl,', 'Birds peck dead man\'s eyes,',
 'Rain falls, the creeks rise,', 'Piglets dance for fun,'];

var firstRandom =function(){
	return Math.floor(Math.random()*firstLine.length+1);
};
console.log(firstLine[firstRandom()]);


var secondLine =['on a summer\'s midnight eve,', 'packs of dogs eat pizza bones,', 'lilypads float on the pond',
'sandwiches feed lines of ants,', 'berries fall and rot away', 'soft winds carry spiderlings', 'wolf corpse feeds blowfly larvae',
'dandelions spreading seed,', 'ladybugs show off their spots,'];

var secondRandom =function(){
	return Math.floor(Math.random()*secondLine.length+1);
};
console.log(secondLine[secondRandom()]);



var thirdLine =['making small boys cry.', 'sunshine spills on day.', 'gathering in death.', 'foul-mouthed evergreens.', 
'bluing skies for you.', 'lovely ladies lie.', 'acorns tumble down.', ' flower petals sigh.', 'weasels eat their young', 
'dead fish bob and float', 'puppies chew big sticks.'];

var thirdRandom =function(){
	return Math.floor(Math.random()*thirdLine.length+1);
};
console.log(thirdLine[thirdRandom()]);

// //build fcn to randomly choose string from each.


// var finalHaikuArray=[];
// var finalHaiku1 = finalHaikuArray.push(haikuFirst);
// // console.log(finalHaiku1);//returns 1, so it's been pushed.
// console.log(finalHaikuArray);







// function buildHaiku(){
// 	finalHaiku.push()
// }
// var line1 = firstLine[firstRandom];
// var line2 = secondLine[secondRandom];
// var line3 = thirdLine[thirdRandom];

// var haiku =document.querySelector('.haikuMaker');
// haiku.addEventListener('click',function() {
	// console.log("this much works.");
	//use random number gen for each line to choose an index, 
	//push onto finalHaiku
	//return final haikku
	//print haiku to screen
// })
//user clicks haiku button.

//return a haiku to user. that's all.

//tools: 
//array
//Math.random to come up with index number (array.length)
//fcn k.i.s.s.












