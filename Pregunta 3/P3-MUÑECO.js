
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS
	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x000000 );//111111

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x000000, 0.5 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT

	var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF ,wireframe:false} );

	var cabeza1= new THREE.SphereGeometry(0.3,20,15);
	var mcabeza1= new THREE.Mesh(cabeza1,material);
	mcabeza1.position.y=1.65;

	
	var cabeza2=new THREE.CylinderGeometry(0.3,0.1,0.4);
	var mcabeza2=new THREE.Mesh(cabeza2,material);
	mcabeza2.position.y=1.4;
	//cara
	var materialn = new THREE.MeshBasicMaterial( { color: 0xED6500 ,wireframe:false} );
	var nariz=new THREE.CylinderGeometry(0,0.06,0.3);
	var mnariz=new THREE.Mesh(nariz,materialn);
	
	mnariz.position.y=1.58;
	mnariz.position.z=0.35;

	mnariz.rotation.x=33;
	
	 //boca
    var boca=new THREE.CircleGeometry(0.1,30);
    var mboca = new THREE.Mesh(boca, material1);
 
    mboca.position.y=1.42;
    mboca.position.z=0.2;
    //diente
    var diente = new THREE.Geometry();
	diente.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	diente.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	diente.vertices.push( new THREE.Vector3( 0.3, 0.3, 0.0 ) );
	diente.vertices.push( new THREE.Vector3( 0.0, 0.3, 0.0 ) );

	diente.faces.push( new THREE.Face3( 0, 1, 2 ) );
	diente.faces.push( new THREE.Face3( 2, 3, 0 ) );

	var mdiente = new THREE.Mesh (diente, material);
	mdiente.position.x=-0.065;
	mdiente.position.y=1.4;
	mdiente.position.z=0.21;
	
	mdiente.scale.x=0.45;
	mdiente.scale.y=0.25;

	
	//----- Ojos-------
	var material1 = new THREE.MeshBasicMaterial( { color: 0x000000 ,wireframe:false} );

	var circulo=new THREE.CircleGeometry(0.020,30);
    var mcirculo = new THREE.Mesh(circulo, material1);
    mcirculo.position.x=0.065;
    mcirculo.position.y=1.68;
    mcirculo.position.z=0.299;

    var sojo=new THREE.CircleGeometry(0.04,30);
    var msojo = new THREE.Mesh(sojo, material);
    msojo.position.x=0.079;
    msojo.position.y=1.69;
    msojo.position.z=0.298;

    var sojo2=new THREE.CircleGeometry(0.05,30);
    var msojo2 = new THREE.Mesh(sojo2, material1);
    msojo2.position.x=0.08;
    msojo2.position.y=1.7;
    msojo2.position.z=0.297;
    //Izquierdo
    var circuloi=new THREE.CircleGeometry(0.020,30);
    var mcirculoi = new THREE.Mesh(circuloi, material1);
    mcirculoi.position.x=-0.065;
    mcirculoi.position.y=1.68;
    mcirculoi.position.z=0.299;

    var sojoi=new THREE.CircleGeometry(0.04,30);
    var msojoi = new THREE.Mesh(sojoi, material);
    msojoi.position.x=-0.079;
    msojoi.position.y=1.69;
    msojoi.position.z=0.298;

    var sojo2i=new THREE.CircleGeometry(0.05,30);
    var msojo2i = new THREE.Mesh(sojo2i, material1);
    msojo2i.position.x=-0.08;
    msojo2i.position.y=1.7;
    msojo2i.position.z=0.297;
	
   

	//botones
	var boton=new THREE.CircleGeometry(0.05,30);
    var mboton = new THREE.Mesh(boton, material1);
    // mboton.position.x=-0.08;
     mboton.position.y=0.75;
     mboton.position.z=0.499;

    var boton2=new THREE.CircleGeometry(0.05,30);
    var mboton2 = new THREE.Mesh(boton2, material1);
    // mboton.position.x=-0.08;
     mboton2.position.y=0.55;
     mboton2.position.z=0.499;

    var boton3=new THREE.CircleGeometry(0.05,30);
    var mboton3 = new THREE.Mesh(boton3, material1);
     mboton3.position.y=1.08;
     mboton3.position.z=0.299;

	//manos

	var materialc = new THREE.MeshBasicMaterial( { color: 0x482103 ,wireframe:true} );
	var brazo =new THREE.CylinderGeometry(0.020,0.020,0.5,20);
	var mbrazo=new THREE.Mesh(brazo,materialc);
	mbrazo.position.x=0.4;
	mbrazo.position.y=1.1;
	mbrazo.rotation.z=20;
	
	var brazoi =new THREE.CylinderGeometry(0.020,0.020,0.5,20);
	var mbrazoi=new THREE.Mesh(brazoi,materialc);
	mbrazoi.position.x=-0.4;
	mbrazoi.position.y=1.1;
	mbrazoi.rotation.z=-20;
	
	var msomb = new THREE.MeshBasicMaterial( { color: 0x07185C ,wireframe:false} );
	var pelo =new THREE.CylinderGeometry(0.08,0.08,0.5,20);
	var mpelo=new THREE.Mesh(pelo,msomb);
	mpelo.position.y=1.8;
	mpelo.rotation.z=10;


	// ---------------- Cuerpo -------------------

	//cuerpo1
	var cuerpo1= new THREE.SphereGeometry(0.3,0.5,10,);
	var mcuerpo1= new THREE.Mesh(cuerpo1,material);
	mcuerpo1.position.y=1;
	//cuerpo2
	var cuerpo2= new THREE.SphereGeometry(0.5,0.1,10);
	var mcuerpo2= new THREE.Mesh(cuerpo2,material);
	mcuerpo2.position.y=0.6;

	// nieve
	var material = new THREE.MeshBasicMaterial( { color: 0x59748C ,wireframe:true} );
	var cilindro =new THREE.CylinderGeometry(0.5,1,0.5,20);
	var mcilindro=new THREE.Mesh(cilindro,material);


	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	//cara
	scene.add(mnariz);
	scene.add(mcirculo);
	scene.add(msojo);
	scene.add(msojo2);
	scene.add(mcirculoi);
	scene.add(msojoi);
	scene.add(msojo2i);
	scene.add(mboca);
	scene.add(mdiente);
	scene.add(mpelo);

	scene.add(mbrazo);
	scene.add(mbrazoi);
	//boton
	scene.add(mboton);
	scene.add(mboton2);
	scene.add(mboton3);


	scene.add(mcabeza1);
	scene.add(mcabeza2);
	scene.add(mcuerpo1);
	scene.add(mcuerpo2);
	scene.add(mcilindro);



}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
