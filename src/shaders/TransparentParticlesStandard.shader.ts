namespace feng3d
{

    /**
     * 线条拖尾
     */
    export class TransparentParticlesStandardUniforms
    {
        __class__: "feng3d.TransparentParticlesStandardUniforms";

        @feng3d.serialize
        @feng3d.oav()
        _BasicColor = new Color4(0.5, 0.5, 0.5, 0.5);

        @feng3d.serialize
        @feng3d.oav()
        _SaturatedColor = new Color4(0.5, 0.5, 0.5, 0.5);

        @feng3d.serialize
        @feng3d.oav()
        _MainTex = feng3d.Texture2D.white;

        @feng3d.serialize
        @feng3d.oav()
        _ColorRamp = feng3d.Texture2D.white;

        @feng3d.serialize
        @feng3d.oav()
        _NoiseTex = feng3d.Texture2D.white;

        @feng3d.serialize
        @feng3d.oav()
        _EmissionSaturation = 1.0;

        @feng3d.serialize
        @feng3d.oav()
        _OpacitySaturation = 1.0;

        @feng3d.serialize
        @feng3d.oav()
        _ColorMultiplier = 1.0;

        @feng3d.serialize
        @feng3d.oav()
        _ABOffset = 0.0;

        @feng3d.serialize
        @feng3d.oav()
        COLOR_RAMP = false;

        @feng3d.serialize
        @feng3d.oav()
        COLOR_TINT = false;

        @feng3d.serialize
        @feng3d.oav()
        APPLY_RGB_COLOR_VERTEX = false;

        @feng3d.serialize
        @feng3d.oav()
        DISSOLVE_ENABLED = false;

        @feng3d.serialize
        @feng3d.oav()
        _DissolveStep = new Vector4(0.0, 1.0, 0.0, 0.0);

        @feng3d.serialize
        @feng3d.oav()
        AUTOMATICPANNING = false;

        @feng3d.serialize
        @feng3d.oav()
        _Panning = new Vector4(0.0, 0.0, 0.0, 0.0);

        @feng3d.serialize
        @feng3d.oav()
        _TintColor = new Color4(0.5, 0.5, 0.5, 0.5);
        
        @feng3d.serialize
        @feng3d.oav()
        _GlobalAlpha = 1.0;

        @feng3d.serialize
        @feng3d.oav()
        EMISSIVEPOWER = false;

        @feng3d.serialize
        @feng3d.oav()
        _EmissivePower = 1;
        
        @feng3d.serialize
        @feng3d.oav()
        EXTENDED_PARTICLES = false;
        
        @feng3d.serialize
        @feng3d.oav()
        NOISE_TEXTURE = false;

        @feng3d.serialize
        @feng3d.oav()
        _NoisePanning = new Color4(0.5, 0.5, 0.5, 0.5);

        @feng3d.serialize
        @feng3d.oav()
        NOISE_TEXTURE_EMISSION = false;

        @feng3d.serialize
        @feng3d.oav()
        NOISE_TEXTURE_ALPHA = false;

        @feng3d.serialize
        @feng3d.oav()
        NOISE_TEXTURE_DISSOLVE = false;

        @feng3d.serialize
        @feng3d.oav()
        NOISEUV = false;
        
        @feng3d.serialize
        @feng3d.oav()
        FLOWMAP = false;
    }

    feng3d.shaderConfig.shaders["TransparentParticlesStandard"] =
    {
        vertex: TransparentParticlesStandard_vertex,
        fragment: TransparentParticlesStandard_fragment,
        cls: TransparentParticlesStandardUniforms,
        renderParams: {
            enableBlend: true,
            sfactor: feng3d.BlendFactor.ONE,
            dfactor: feng3d.BlendFactor.ONE_MINUS_SRC_ALPHA,
            colorMask: feng3d.ColorMask.RGBA,
            cullFace: feng3d.CullFace.NONE,
            depthMask: true,
        },
    }
    feng3d.Material.setDefault("TransparentParticlesStandard-Material", { shaderName: "TransparentParticlesStandard" });
}

namespace feng3d
{
    export interface UniformsTypes { "TransparentParticlesStandard": TransparentParticlesStandardUniforms }

    export interface DefaultMaterial
    {
        "TransparentParticlesStandard-Material": Material;
    }
}