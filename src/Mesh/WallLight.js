import * as THREE from "three";
import  vertexShader from "@/Shader/WallLight/vertex.glsl";
import  fragmentShader from "@/Shader/WallLight/fragment.glsl";

export default function createWallLight(position,scene) {
    //创造光幕圆环
    let geometry = new THREE.CylinderGeometry(3,3,1.5,30,1,true);
    let material = new THREE.ShaderMaterial({
         vertexShader,
         fragmentShader,
         transparent:true,
         side:THREE.DoubleSide
    });

    let mesh = new THREE.Mesh(geometry,material);
    mesh.position.set(position.x,position.y,position.z);
    console.log("创建光墙了")
    scene.add(mesh)
}