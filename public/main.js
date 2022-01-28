// imports 
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// creating scene, camera, renderer
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
    )

const renderer = new THREE.WebGLRenderer({
    antialias: true
})

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio) // cleans up image, better quality
document.body.appendChild(renderer.domElement)


function onWindowResize()
{
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    //renderer.setSize(innerWidth, innerHeight)
}

// light


// mouse click
let mouse = new THREE.Vector2()
let raycaster = new THREE.Raycaster()

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

window.addEventListener( 'mousemove', onPointerMove, false );
window.addEventListener( 'resize', onWindowResize );



// create a sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(3, 50, 50),
    new THREE.MeshBasicMaterial({
        //color: 0x2266EE
        map: new THREE.TextureLoader().load('./img/globe.jpg')
    })
)
scene.add(sphere)

camera.position.z = 8


// controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.maxPolarAngle = 2 * Math.PI / 3
controls.minPolarAngle = Math.PI / 3
controls.enableDamping = true


// "main" function: entry point
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    //console.log(sphere.radius);
    controls.update()
    // addEventListener('click', () => {
    //     console.log(sphere.userData.position)
    // })
}

// calling entry point
animate()