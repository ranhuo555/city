import * as THREE from "three";
import vertexShader from "@/Shader/flyLine/vertex.glsl"
import fragmentShader from "@/Shader/flyLine/fragment.glsl"
import gsap from "gsap";
export default function createFlyShader(position,scene) {
     //
     let curve = new THREE.CatmullRomCurve3([
         new THREE.Vector3(0,0,0),
         new THREE.Vector3(position.x / 2,5,position.z / 2),
         new THREE.Vector3(position.x,position.y,position.z),
     ])

     let points = curve.getPoints(1000);

     let geometry = new THREE.BufferGeometry().setFromPoints(points);
     let sizeArray = new Float32Array(1000);
     sizeArray.forEach((el,i) => {
         sizeArray[i] = i;
     })

     geometry.setAttribute("uSize",new THREE.BufferAttribute(sizeArray,1))
     let material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent:true,
        depthWrite:false,
        blending:THREE.AdditiveBlending,
        uniforms:{
            uTime:{
                value:0
            }
        }
     })


     let pointsLine = new THREE.Points(geometry,material)
     

     gsap.to(material.uniforms.uTime,{
         value:1000,
         duration:2,
         repeat:-1
     })
     scene.add(pointsLine)
}