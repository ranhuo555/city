<template>
  <div>
    <div class="home" ref="home" @click="getEventList">
    </div>
    <BigScreen :infoList="infoList" :eventList="eventList" :showEvent = "showEvent" />
  </div>
</template>

<script>
// @ is an alias to /src
import THREEUtils from "../three/utils"
import createCity from "../Mesh/City"
import createWallLight from "@/Mesh/WallLight";
import createFlyLine from "@/Mesh/FlyLine";
import createFlyShader from "@/Mesh/FlyShader"
import createRadar from "@/Mesh/radar"
import createSprit from "@/Mesh/Sprit";
import BigScreen from "@/components/BigScreen.vue";
import * as THREE from "three"
import { getInfoList, getEventList } from "@/Mock/index"
import gsap from "gsap"
export default {
  name: 'HomeView',
  components: {
    BigScreen,
  },
  data() {
    return {
      imgUrlArr: [
        require("@/assets/bg/dianli.svg"),
        require("@/assets/bg/fire.svg"),
        require("@/assets/bg/jingcha.svg")
      ],
      infoList: [],
      eventList: [],
      meshList: [],
      clickEventList:[]
    }
  },

  methods: {
    getEvent(e,mesh) {
      //光线折射
      let mouse = new THREE.Vector2();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      let ray = new THREE.Raycaster();
      ray.setFromCamera(mouse, this.camera)
      let meshArr = ray.intersectObject(mesh);
      // console.log(meshArr)
      return meshArr
    },

    getList(scene) {
      setInterval(() => {
        this.meshList.forEach(el => {
           scene.remove(el);
           el.remove();
           el.clear();
           el.material.dispose();
           el.geometry.dispose();
        })
        let arr = getInfoList();
        if (this.infoList.length === 0) {
          this.infoList = arr;
        } else {
          this.infoList.forEach((el, idx) => {
            gsap.to(el, {
              num: arr[idx].num,
              duration: 1,
              repeat: 1
            })
          })
        }
       let arr1 = getEventList();
        arr1.forEach(el => {
          switch (el.name) {
            case "ele":
              el.zhName = "电力"
              el.imgUrl = this.imgUrlArr[0]
              break
            case "fire":
              el.zhName = "火警"
              el.imgUrl = this.imgUrlArr[1]
              break
            case "police":
              el.zhName = "治安"
              el.imgUrl = this.imgUrlArr[2]
              break
          }
        })

        this.eventList = arr1;
        let meshArr = [];
        this.eventList.forEach(el => {
          let mesh = createSprit(el.position, scene, el.imgUrl,el.id);

          meshArr.push(mesh)
        })
        this.meshList = meshArr;

      }, 10000)
    },


    getEventList(e) {
        console.log("aaa")
        //这里每次点击一次时间总览
        this.meshList.forEach(el => {
            let arr = this.getEvent(e,el);
            if(arr.length != 0) {
                 this.eventList[arr[0].object.name].chooseFlag = true
            }
        })
    },


    showEvent(idx) {
         this.meshList.forEach((el,i) => {
             if(idx === i) {
                 el.visible = true
             }else{
                 el.visible = false
             }
         })

         //让相机看向物体
         let position = this.meshList[idx].position;
         
         gsap.to(this.controls.target,{
            x:position.x,
            y:position.y,
            z:position.z,
            duration:1
         })

         setTimeout(() => {
          console.log(this.controls)
         }, 1000);
    }
  },


  mounted() {
    let three = new THREEUtils();
    let scene = three.createScene();
    let camera = three.createCamera();
    let ax = three.createAxhHelper();
    scene.add(ax);

    let render = three.createRender(camera, scene)
    this.$refs.home.appendChild(render.domElement)
    //  three.animate(render,scene,camera);

    this.controls = three.controls(camera, render);


   
    //创造城市
    createCity(scene);
    //创造雷达
    createWallLight({
      x: 0, y: 1, z: 0
    }, scene)

    //创造飞线物体
    createFlyLine({
      x: 9, y: 0, z: 0
    }, scene)

    //创建飞线 着色器实现
    createFlyShader({
      x: 10, y: 0, z: 10
    }, scene)

    //创建雷达
    createRadar(scene)
    //创建精灵图
    this.getList(scene)



    this.scene = scene;
    this.camera = camera;
    let that = this;
    animate();
    function animate(){
      requestAnimationFrame(animate);
      if(that.controls) {
         that.controls.update()
      }
      render.render(scene, camera)
    }
  }
}
</script>
