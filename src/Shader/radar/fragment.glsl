precision lowp float;
varying vec2 vUv;
uniform float uTime;
mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}
void main() {
    vec2 oldUv = vUv;
    oldUv -= vec2(0.5);
    vec2 newUv = rotate2d(uTime * 6.28) * oldUv;
    newUv += vec2(0.5);
    float dis = distance(newUv,vec2(0.5));
    float weight =1.0 - step(0.5,dis);
    float strength = atan(newUv.x - 0.5,newUv.y-0.5);
    strength = (strength+3.14)/6.28;
    gl_FragColor = vec4(1.0,0.0,0.0,weight * strength);
  

}