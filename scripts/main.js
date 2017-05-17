var haiku =document.querySelector('.haikuMaker');
var resetKu = document.querySelector('.resetHaiku');

var firstLine =['Little kitten cries,', 'Spring frogs chirp with love,', 'Sad slug slides alone,', 'Leaves fall and squirrels dig,','Old dog bays at moon,', 'Monkeys howl and growl,', 'Birds peck dead man\'s eyes,', 'Rain falls, the creeks rise,', 'Piglets dance for fun,','Raindrops on roses,', 'Whiskers on kittens,', 'Bright copper kettles', 'Warm woollen mittens', 'Spiders eat the fly,', 'Old man swims alone,', 'Grubs eat roots of grass'];
var secondLine =['on a summer\'s midnight eve,', 'packs of dogs eat pizza bones,', 'lilypads float on the pond,', 'sandwiches feed lines of ants,', 'berries fall and rot away,', 'soft winds carry spiderlings,', 'wolf corpse feeds blowfly larvae,', 'dandelions spreading seed,', 'ladybugs show off their spots,', 'winter makes abandoned death', 'storms washout bunny babies', 'otters play and beavers work,', 'fields of corn drown in weavils', 'crabs crawl out of dead man\'s eyes', 'pandas lose their shit in snow,', 'bobcat kittens play with mouse,', 'when moonlight greets the stray dog', 'hollow trees hide owls and death,', 'seas full of manta ray poop'];
var thirdLine =['making small boys cry.', 'sunshine spills on day.', 'gathering in death.', 'foul-mouthed evergreens.',  'bluing skies for you.', 'lovely ladies lie.', 'acorns tumble down.', ' flower petals sigh.', 'weasels eat their young.', 'dead fish bob and float.', 'puppies chew big sticks.', 'new year comes too soon.', 'lone wolf howls to mate.','hunter shoots own foot.', 'goldfish feast on toes.', 'children laugh for you.', 'dead rat floats downstream.', 'caterpillar cries.', 'rocks in puddles cry.', 'mothers cry for wine.'];

haiku.addEventListener('click',() => {
	var firstRandom = Math.floor(Math.random()*firstLine.length);
	var secondRandom = Math.floor(Math.random()*secondLine.length);
	var thirdRandom = Math.floor(Math.random()*thirdLine.length);

	var line1 = firstLine[firstRandom];
	var line2 = secondLine[secondRandom];
	var line3 = (thirdLine[thirdRandom]);

	document.querySelector('.haiku').innerHTML = ('<div>'+line1+'</div><div>'+line2+'</div><div>'+line3+'</div>');
});

resetKu.addEventListener('click', ()=>{
	document.querySelector('.haiku').innerHTML = '';
});

