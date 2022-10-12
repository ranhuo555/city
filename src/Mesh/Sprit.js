import * as THREE from "three";
export default function createSprit(position,scene,imgUrl,id){
     //添加精灵物体
   //   let imgUrl = require(imgUrlPath)
     let map = new THREE.TextureLoader().load(imgUrl);
     let material = new THREE.SpriteMaterial({
        map:map
     }) 

     let mesh = new THREE.Sprite(material)
      mesh.name = id
     scene.add(mesh)
     mesh.position.set(position[0],5,position[1])


     return mesh

}