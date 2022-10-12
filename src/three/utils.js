//一个类用于生成 three.js中的最基础部分内容
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
class THREEUtils {


     //创建场景
     createScene() {
         let scene = new THREE.Scene();
         let textureLoad = new THREE.CubeTextureLoader().setPath("./textures/");
         let back = textureLoad.load([
             "1.jpg",
             "2.jpg",
             "3.jpg",
             "4.jpg",
             "5.jpg",
             "6.jpg",
         ])

         scene.background = back;
         return scene;
     }

 
     //创建相机
     createCamera() {
        let camera  = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
        camera.position.set(5,10,15);
        return camera
     }


     //创建渲染器
     createRender(camera,scene) {
        let render = new THREE.WebGLRenderer({
            antialias:true
        });
        render.setSize(window.innerWidth,window.innerHeight);
        render.render(scene,camera);
        return render
     }

     //创建坐标辅助轴
     createAxhHelper() {
        let ax = new THREE.AxesHelper(30);

        return ax;
     }


     //控制器
     controls(camera,render) {
         let controls = new OrbitControls(camera,render.domElement)
         return controls
     }
}


export default THREEUtils;