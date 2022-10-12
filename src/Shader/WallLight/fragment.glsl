precision lowp float;
varying float heightIndex;
void main() {
     //设置混合颜色
    gl_FragColor = vec4(0.0,1.0,1.0,heightIndex);

}