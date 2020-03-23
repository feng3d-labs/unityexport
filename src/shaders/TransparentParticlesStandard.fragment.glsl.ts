namespace feng3d
{
    export var TransparentParticlesStandard_fragment = `
precision mediump float;

uniform sampler2D _MainTex;

uniform vec4 u_color;

#ifdef EXTENDED_PARTICLES
    uniform float _EmissionSaturation;
    uniform float _OpacitySaturation;
    uniform float _ColorMultiplier;

    #ifdef COLOR_RAMP
        uniform sampler2D _ColorRamp;
        uniform vec4 _ColorRamp_ST;
    #else
        #if defined(COLOR_TINT)
            uniform vec4 _BasicColor;
        #else
            uniform vec4 _BasicColor;
            uniform vec4 _SaturatedColor;
        #endif
    #endif

    #ifdef DISSOLVE_ENABLED
        uniform vec4 _DissolveStep;
    #endif

    #ifdef NOISE_TEXTURE
        uniform sampler2D _NoiseTex;
        uniform vec4 _NoiseTex_ST;
        uniform vec4 _NoisePanning;
    #endif
#else
    uniform vec4 _TintColor;

    #ifdef EMISSIVEPOWER
        uniform float _EmissivePower;
    #endif
#endif

uniform vec2 _Panning;

#ifdef BLENDMODE_ADDITIVEALPHABLEND
    uniform float _ABOffset;
#endif

uniform float _GlobalAlpha;

varying vec2 v_uv;
varying vec4 v_color;

#ifdef EXTENDED_PARTICLES
    varying vec2 v_particledata;
#endif

#ifdef NOISE_TEXTURE
    varying vec2 v_noiseuv;
#endif

void main() 
{
    vec4 tex = texture2D(_MainTex, v_uv);

    vec4 col = vec4(1.0, 1.0, 1.0, 1.0);


    #ifdef EXTENDED_PARTICLES

        #ifdef APPLY_RGB_COLOR_VERTEX
            vec4 vcolor = v_color;
        #else
            vec4 vcolor = vec4(1.0, 1.0, 1.0, v_color.w);
        #endif
    
        #ifdef NOISE_TEXTURE
        
            float3 noise = tex2D(_NoiseTex, v_noiseuv);
        
            #ifdef NOISE_TEXTURE_EMISSION
                float nEmission = noise.x;
            #else
                float nEmission = 1.0;
            #endif
            
            #ifdef NOISE_TEXTURE_ALPHA
                float nAlpha = noise.y;
            #else
                float nAlpha = 1.0;
            #endif
            
            #ifdef NOISE_TEXTURE_DISSOLVE
                float nDissolve = noise.z;
            #else
                float nDissolve = 1.0;
            #endif
        
        #else
            float nEmission = 1.0;
            float nAlpha = 1.0;
            float nDissolve = 1.0;
        #endif
    
        #ifdef DISSOLVE_ENABLED
            float ramp = -1.0 + (v_particledata.x * 2.0);
            col.a = clamp(tex.g * smoothstep(_DissolveStep.x, _DissolveStep.y, (tex.b + ramp) * nDissolve) * _OpacitySaturation * vcolor.w * nAlpha, 0.0, 1.0);
        #else
            col.a = clamp(tex.g * _OpacitySaturation * vcolor.w, 0.0, 1.0) * nAlpha;
        #endif
    
        #if !defined(COLOR_TINT)
            float lerpValue = clamp(tex.r * v_particledata.y * _ColorMultiplier * nEmission, 0.0, 1.0);
        #endif
    
        #ifdef BLENDMODE_ALPHABLEND
            #ifdef COLOR_RAMP
                col.xyz = tex2D(_ColorRamp, vec2((1.0 - lerpValue), 0.0)) * vcolor.xyz * _EmissionSaturation;
            #else
                #ifdef COLOR_TINT
                    col.xyz = tex.x * _BasicColor.xyz * vcolor.xyz * nEmission * _EmissionSaturation;
                #else
                    col.xyz = lerp(_BasicColor.xyz * vcolor.xyz, _SaturatedColor, lerpValue) * _EmissionSaturation;
                #endif
            #endif
            col.a *= _GlobalAlpha;
        #else
            #ifdef COLOR_RAMP
                col.xyz = tex2D(_ColorRamp, vec2((1.0 - lerpValue), 0.0)) * vcolor.xyz * col.a * _EmissionSaturation;
            #else
                #ifdef COLOR_TINT
                    col.xyz = tex.x * _BasicColor.xyz * vcolor.xyz * nEmission * _EmissionSaturation * col.a;
                #else
                    col.xyz = lerp(_BasicColor.xyz * vcolor.xyz, _SaturatedColor, lerpValue) * col.a * _EmissionSaturation;
                #endif
            #endif
            col *= _GlobalAlpha;
        #endif
    
    #else
    
        #ifdef BLENDMODE_ADDITIVEALPHABLEND
            tex *= _TintColor;
            float luminance = clamp(dot(tex, vec4(0.2126, 0.7152, 0.0722, 0.0)) * tex.a * _ABOffset, 0.0, 1.0);
            fixed4 one = fixed4(1, 1, 1, 1);
            col = lerp(2.0 * (v_color * tex), one - 2.0 * (one - v_color) * (one - tex), luminance);
        #else
            col = v_color * tex;
            col *= _TintColor;
        
            #ifdef EMISSIVEPOWER
                col *= _EmissivePower;
            #endif
            
            #ifdef BLENDMODE_SOFTADDITIVE
                col.rgb *= col.a;
            #else
                #ifdef BLENDMODE_ALPHABLEND
                    col *= 2.0;
                #else
                    #elifdef BLENDMODE_ADDITIVEDOUBLE
                        col *= 4.0;
                    #endif
                #endif
            #endif
        
        #endif
    
        col *= _GlobalAlpha;

    #endif

    gl_FragColor = col;
}
    `;
}