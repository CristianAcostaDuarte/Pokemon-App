
var juego = new Phaser.Game(2000, 1300, Phaser.CANVAS, "mapaalola");

var fondo; 
var boton1;
var boton2;
var boton3;
var boton4;
var foto1;
var foto2;
var foto3;
var flechaderecha;
var flechaizquierda;
var flechaarriba;
var flechaabajo;

var jugando = {
	preload: function() {        
		juego.load.image("imgfondo", "../images/backgrounds/Alola_map.jpg");
		juego.load.image("botones", "../images/map/play.png");
        juego.load.image("fotouno", "../images/cities/Melemele_island.jpg");
        juego.load.image("fotodos", "../images/cities/Poni_Island.jpg");
        juego.load.image("fototres", "../images/cities/Akala_Island.jpg");
        juego.load.image("fotocuatro", "../images/cities/Ulaula_island.jpg");
	},
	
	create: function() {           
		fondo = juego.add.sprite(0, 0, "imgfondo");
		boton1 = juego.add.button(590, 400, "botones");
		boton1.anchor.setTo(0.5);
        boton1.scale.setTo(0.4);
        boton1.rotation = -30;
        boton1.events.onInputDown.add(function(){foto1.visible=true;});  
        boton1.events.onInputUp.add(function(){foto1.visible=false;});
        
        boton2 = juego.add.button(300, 700, "botones");
		boton2.anchor.setTo(0.5);
        boton2.scale.setTo(0.4);
        boton2.rotation = 30;
        boton2.events.onInputDown.add(function(){foto2.visible=true;});  
        boton2.events.onInputUp.add(function(){foto2.visible=false;});
		
        boton3 = juego.add.button(1300, 400, "botones");
		boton3.anchor.setTo(0.5);
        boton3.scale.setTo(0.4);
        boton3.rotation = 20;
        boton3.events.onInputDown.add(function(){foto3.visible=true;});  
        boton3.events.onInputUp.add(function(){foto3.visible=false;});

        boton4 = juego.add.button(1700, 1000, "botones");
		boton4.anchor.setTo(0.5);
        boton4.scale.setTo(0.4);
        boton4.rotation = 20;
        boton4.events.onInputDown.add(function(){foto4.visible=true;});  
        boton4.events.onInputUp.add(function(){foto4.visible=false;});
        
        
        foto1 = juego.add.sprite(300, 150, "fotouno");
        foto1.scale.setTo(0.3);
        foto1.visible = false;
        
        foto2 = juego.add.sprite(180, 380, "fotodos");
        foto2.scale.setTo(0.3);
        foto2.visible = false;
        
        foto3 = juego.add.sprite(1200, 150, "fototres");
        foto3.scale.setTo(0.3);
        foto3.visible = false;

        foto4 = juego.add.sprite(1600, 350, "fotocuatro");
        foto4.scale.setTo(0.3);
        foto4.visible = false;
        
		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT); 
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);  
        flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN); 
		flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.UP);  
	},
	
	update: function(){ 	
		if(flechaderecha.isDown && fondo.position.x>-1105){          
			fondo.position.x -= 5;
            boton1.position.x -=5;
            boton2.position.x -=5;
            boton3.position.x -=5;
		}
		if(flechaizquierda.isDown && fondo.position.x<0){
			fondo.position.x += 5;
            boton1.position.x +=5;
            boton2.position.x +=5;
            boton3.position.x +=5;
		}	
        if(flechaarriba.isDown && fondo.position.y>-855){          
			fondo.position.y -= 5;
            boton1.position.y -=5;
            boton2.position.y -=5;
            boton3.position.y -=5;
		}
		if(flechaabajo.isDown && fondo.position.y<0){
			fondo.position.y += 5;
            boton1.position.y +=5;
            boton2.position.y +=5;
            boton3.position.y +=5;
		}	
	},
}

juego.state.add("activo", jugando);   
juego.state.start("activo");                 
