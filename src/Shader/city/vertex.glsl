
precision lowp float;
varying float heightIndex;
uniform float uHeight;
varying vec3 vPosition;
//主进程
void main() {
     vPosition = position;
     heightIndex = (position.y + uHeight / 2.0) / uHeight;
     vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
     gl_Position = projectionMatrix * viewMatrix *  modelPosition; 
}