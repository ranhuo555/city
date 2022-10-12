precision lowp float;
//主进程
varying vec2 vUv;
void main() {
     vUv = uv;
     vec4 viewPosition =viewMatrix *  modelMatrix * vec4( position, 1.0 );
     gl_Position = projectionMatrix * viewPosition ; 
}