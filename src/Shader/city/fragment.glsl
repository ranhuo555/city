precision lowp float;
uniform float uHeight;
uniform vec3 deepColor;
uniform vec3 heightColor;
varying float heightIndex;
varying vec3 vPosition;
uniform float uWidth;
uniform float uSpreadTime;
uniform float uHeightTime;
uniform float uSidingTime;
void main() {
     //设置混合颜色
     vec3 mixColor = mix(deepColor,heightColor,heightIndex);
    gl_FragColor = vec4(mixColor, 1.0);

    //  设置光环
    //  计算距离
     float dis = distance(vec2(0,0),vPosition.xz);
     //光环显示范围
     float circleWeight = (-(dis - uSpreadTime) * (dis - uSpreadTime) + uWidth) / uWidth;
     if(circleWeight > 0.0) {
        vec3 circleColor = mix(gl_FragColor.xyz,vec3(1.0,1.0,1.0),circleWeight);
        gl_FragColor = vec4(circleColor, 1.0);
     }

     //从下到上扫射
     float heightWeight = (-(vPosition.y - uHeightTime) * (vPosition.y - uHeightTime) + uHeight) / uHeight;
     if(heightWeight > 0.0) {
        gl_FragColor = mix(gl_FragColor,vec4(1.0,1.0,1.0,1.0),heightWeight);
     }

     //平面斜着扫射
     float sidingWeight = (-(vPosition.x + vPosition.z - uSidingTime) * (vPosition.x + vPosition.z - uSidingTime) + uWidth) / uWidth;
    if(sidingWeight > 0.0) {
       gl_FragColor = mix(gl_FragColor,vec4(1.0,1.0,1.0,1.0),sidingWeight);
    }
    

}