import * as THREE from "three";
import gsap from "gsap";
export default function createFlyLine(position,scene) {
    //创造飞线
    //两个参数一个代表位置，另一个代表场景
    //管道缓冲几何体创建方法
    const path = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0,0,0),
          new THREE.Vector3(position.x / 2,5,position.z / 2),
          new THREE.Vector3(position.x,position.y,position.z),
          
    ])

    //这里参数  第一个是 路径  第二个是分段数目  第三个是半径  第四个是横截面的分段数  为 1是一条线  为2 是一个平面
    let geometry = new THREE.TubeGeometry(path,100,1,2)

    //引入纹理
    let texture = new THREE.TextureLoader();
    let map = texture.load("./textures/z_11.png")
    map.repeat.set(1,2);
    //镜像重复
    map.wrapT = THREE.MirroredRepeatWrapping;
    let material = new THREE.MeshBasicMaterial({
        color:"#ffffff",
        map,
        transparent:true,
    }) 

    let mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)
    //这里设置x为-1是使得纹理坐标整个都偏移了
    //这里证书的便宜方向不对
    gsap.to(map.offset,{
        x:-1,
        duration:1,
        repeat:-1,

    })
     
}