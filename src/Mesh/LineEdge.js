
import * as THREE from "three";
export default function createLineEdge(mesh,scene){
     let lineGeometry = new THREE.EdgesGeometry(mesh.geometry);

     let line = new THREE.LineSegments(lineGeometry,new THREE.LineBasicMaterial({
        color:"#FFFFFF"
     }))
     

     //设置一样的缩放倍数
     let x = mesh.scale.x + 0.0001
     line.scale.set(x,x,x)
     scene.add(line)
}