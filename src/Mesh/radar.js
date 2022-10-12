import * as THREE from "three";
import vertexShader from "@/Shader/radar/vertex.glsl"
import fragmentShader from "@/Shader/radar/fragment.glsl"
import gsap from "gsap";
export default function createRadar(scene,position={x:0,y:3,z:0}) {
     let geometry = new THREE.PlaneGeometry(5,5);
     let material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent:true,
        // depthWrite:false,
        // blending:THREE.AdditiveBlending,
        side:THREE.DoubleSide,
        uniforms:{
            uTime:{
                value:0
            }
        }
     })

     
     let mesh = new THREE.Mesh(geometry,material);
     mesh.rotation.x=-Math.PI / 2;
     mesh.position.set(position.x,position.y,position.z);

     gsap.to(material.uniforms.uTime,{
        value:1,
        duration:1,
        repeat:-1,
        ease: "none",
     })

     scene.add(mesh)
}