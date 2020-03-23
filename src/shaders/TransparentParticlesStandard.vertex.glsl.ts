namespace feng3d
{
    export var TransparentParticlesStandard_vertex = `

attribute vec3 a_position;
attribute vec2 a_uv;
attribute vec4 a_color;

uniform vec4 _MainTex_ST;

uniform vec2 _Panning;
uniform vec2 _Time;

#ifdef NOISE_TEXTURE
    uniform vec4 _NoiseTex_ST;
    uniform vec4 _NoisePanning;
#endif

#ifdef EXTENDED_PARTICLES
    varying vec2 v_particledata;
#endif

#ifdef NOISE_TEXTURE
    varying vec2 v_noiseuv;
#endif

uniform mat4 u_modelMatrix;
uniform mat4 u_viewProjection;

varying vec2 v_uv;
varying vec4 v_color;

void main() 
{
    vec3 position = a_position;
    gl_Position = u_viewProjection * u_modelMatrix * vec4(position, 1.0);
    v_uv = a_uv * _MainTex_ST.xy + _MainTex_ST.zw + (_Panning.xy * _Time.yy);
    v_color = a_color;

    #ifdef NOISE_TEXTURE
        #if NOISEUV
            v_noiseuv = a_uv * _NoiseTex_ST.xy + _NoiseTex_ST.zw + (_NoisePanning.xy * _Time.yy);
        #else
            v_noiseuv = a_uv * _MainTex_ST.xy + _MainTex_ST.zw + (_NoisePanning.xy * _Time.yy);
        #endif
    #endif

    #ifdef EXTENDED_PARTICLES
	    v_particledata = a_uv.zw;
    #endif
}
    `;
}