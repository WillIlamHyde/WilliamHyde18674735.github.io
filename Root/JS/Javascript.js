window.onload = function(){
	init();
}
function init(){
	var white = document.getElementById("White-shirt");
	white.addEventListener('click',White,false);
	var black = document.getElementById("Black-shirt");
	black.addEventListener('click',SBlack,false);
	var red = document.getElementById("Red-shirt");
	red.addEventListener('click',SRed,false);
	var blue = document.getElementById("Blue-shirt");
	blue.addEventListener('click',SBlue,false);
	var rugby = document.getElementById("Rugby-shirt");
	rugby.addEventListener('click',Rugby,false);
	var cith = document.getElementById("CITH-shirt");
	cith.addEventListener('click',CITH,false);
	
	var champ = document.getElementById("champ-jacket");
	champ.addEventListener('click',Champ,false);
	var half = document.getElementById("half-jacket");
	half.addEventListener('click',Half,false);
	var old = document.getElementById("oldstyle-jacket");
	old.addEventListener('click',Oldstyle,false);
	var globe = document.getElementById("globe-jacket");
	globe.addEventListener('click',Globe,false);
	var varsity = document.getElementById("varsity-jacket");
	varsity.addEventListener('click',Varsity,false);
	var camo = document.getElementById("camo-jacket");
	camo.addEventListener('click',JCamo,false);
	
	var jean = document.getElementById("Jean-trousers");
	jean.addEventListener('click',Jean,false);
	var red = document.getElementById("Red-trousers");
	red.addEventListener('click',TRed,false);
	var workman = document.getElementById("Workman-trousers");
	workman.addEventListener('click',Workman,false);
	var camo = document.getElementById("Camo-trousers");
	camo.addEventListener('click',TCamo,false);
	var dragon = document.getElementById("Dragon-trousers");
	dragon.addEventListener('click',Dragon,false);
	var black = document.getElementById("Black-trousers");
	black.addEventListener('click',TBlack,false);
	
	var patch = document.getElementById("Patch-joggers");
	patch.addEventListener('click',Patch,false);
	var red = document.getElementById("Red-joggers");
	red.addEventListener('click',Red,false);
	var comic = document.getElementById("Comic-joggers");
	comic.addEventListener('click',Comic,false);
	var stripe = document.getElementById("Stripe-joggers");
	stripe.addEventListener('click',Stripe,false);
	var butterfly = document.getElementById("Butterfly-joggers");
	butterfly.addEventListener('click',Butterfly,false);
	var black = document.getElementById("Black-joggers");
	black.addEventListener('click',Black,false);
}

//T-shirts
function White(){
	document.getElementById("tops").src="Images/shirt.jpg";
}
function SBlack(){
	document.getElementById("tops").src="Images/shirt2.jpg";
}
function SRed(){
	document.getElementById("tops").src="Images/shirt3.jpg";
}
function SBlue(){
	document.getElementById("tops").src="Images/shirt4.jpg";
}
function Rugby(){
	document.getElementById("tops").src="Images/shirt5.jpg";
}
function CITH(){
	document.getElementById("tops").src="Images/shirt6.jpg";
}

//Jackets
function Champ(){
	document.getElementById("tops").src="Images/jacket.jpg";
}
function Half(){
	document.getElementById("tops").src="Images/jacket2.jpg";
}
function Oldstyle(){
	document.getElementById("tops").src="Images/jacket3.jpg";
}
function Globe(){
	document.getElementById("tops").src="Images/jacket4.jpg";
}
function Varsity(){
	document.getElementById("tops").src="Images/jacket5.jpg";
}
function JCamo(){
	document.getElementById("tops").src="Images/jacket6.jpg";
}

//Trousers
function Jean(){
	document.getElementById("pants").src="Images/trousers.jpg";
}
function TRed(){
	document.getElementById("pants").src="Images/trousers2.jpg";
}
function Workman(){
	document.getElementById("pants").src="Images/trousers3.jpg";
}
function TCamo(){
	document.getElementById("pants").src="Images/trousers4.jpg";
}
function Dragon(){
	document.getElementById("pants").src="Images/trousers5.jpg";
}
function TBlack(){
	document.getElementById("pants").src="Images/trousers6.jpg";
}

//Joggers
function Patch(){
	document.getElementById("pants").src="Images/joggers.jpg";
}
function Red(){
	document.getElementById("pants").src="Images/joggers2.jpg";
}
function Comic(){
	document.getElementById("pants").src="Images/joggers3.jpg";
}
function Stripe(){
	document.getElementById("pants").src="Images/joggers4.jpg";
}
function Butterfly(){
	document.getElementById("pants").src="Images/joggers5.jpg";
}
function Black(){
	document.getElementById("pants").src="Images/joggers6.jpg";
}
