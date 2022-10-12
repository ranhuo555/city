import * as THREE from "three";
import vertex from "../Shader/city/vertex.glsl"
import fragment from "../Shader/city/fragment.glsl"

import {
   GLTFLoader
} from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap"
import createLineEdge from "./LineEdge";
export default function createCity(scene) {
   //首先引入模型

   let gltfLoader = new GLTFLoader();

   let params = {
      //顶部颜色
      topColor: "#87CEFA",
      //底部颜色
      bottomColor: "#330066",
      //光带宽度
      uWidth: 50,
      //传播速度
      uSpreadTime: 0,
      //高度传播速度
      uHeightTime: 0,
      //斜率传播  这个需要是负数，因为他的初始点在负数位置上
      uSidingTime: -1500
   }
   gltfLoader.load("city.glb", (gltf) => {
      //对物体的材质进行处理
      gltf.scene.traverse(el => {
         if (el.type === "Mesh") {
            //拿物体最高和最低点
            el.geometry.computeBoundingBox();
            let {
               max,
               min
            } = el.geometry.boundingBox;
            let height = max.y - min.y;
            console.log(max,min)
            let material = new THREE.ShaderMaterial({
               vertexShader: vertex,
               fragmentShader: fragment,
               uniforms: {
                  uHeight: {
                     value: height
                  },
                  heightColor: {
                     value: new THREE.Color(params.topColor)
                  },
                  deepColor: {
                     value: new THREE.Color(params.bottomColor)
                  },
                  uWidth: {
                     value: params.uWidth
                  },
                  uSpreadTime: {
                     value: params.uSpreadTime
                  },
                  uHeightTime: {
                     value: params.uHeightTime
                  },
                  uSidingTime: {
                     value: params.uSidingTime
                  }

               }
            })

            el.material = material;
            gsap.to(material.uniforms.uSpreadTime, {
               value: 800,
               duration: 3,
               repeat: -1
            })


            gsap.to(material.uniforms.uHeightTime, {
               value: 300,
               duration: 3,
               repeat: -1
            })

            gsap.to(material.uniforms.uSidingTime, {
               value: 1500,
               duration: 3,
               repeat: -1
            })




            if(el.name === "Layerbuildings") {
                //给建筑物添加线框
                console.log(el)
                createLineEdge(el,scene)
            }
         }

      })
      scene.add(gltf.scene);


   })



}