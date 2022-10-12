precision lowp float;
varying float fSize;
void main() {
     //设置点成圆
    float dis = distance(gl_PointCoord,vec2(0.5));
    float weight =1.0 - step(0.5,dis);
    if(fSize < 0.0) {
       gl_FragColor = vec4(0.0,1.0,1.0,0.0);
    }else{
        gl_FragColor = vec4(0.0,1.0,1.0,weight);
    }

}