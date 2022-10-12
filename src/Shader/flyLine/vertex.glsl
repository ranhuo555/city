precision lowp float;
//主进程
attribute float uSize;
uniform float uTime;
varying float fSize;
void main() {
     vec4 viewPosition =viewMatrix *  modelMatrix * vec4( position, 1.0 );
     gl_Position = projectionMatrix * viewPosition ; 
     
     //开始进行点大小变更设置
     
     float aSize = uSize - uTime;
     
     if(aSize < 0.0) {
          aSize = aSize + 1000.0;
     }

     aSize = (aSize - 500.0) * 0.1;
     fSize = aSize;
     gl_PointSize = -aSize / viewPosition.z;
}