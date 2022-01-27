import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


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

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    //console.log(sphere.radius);
    controls.update()
}


animate()