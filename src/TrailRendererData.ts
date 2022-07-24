import { TrailRenderer } from '@feng3d/unity';
import { gPartial } from 'feng3d';

export const td: gPartial<TrailRenderer>
= {
    __class__: 'feng3d.TrailRenderer',
    alignment: 0,
    autodestruct: false,
    colorGradient: {
        __class__: 'feng3d.Gradient',
        mode: 0,
        alphaKeys: [
            {
                alpha: 1.0,
                time: 0.0
            },
            {
                alpha: 1.0,
                time: 1.0
            }
        ],
        colorKeys: [
            {
                color: {
                    __class__: 'feng3d.Color3',
                    r: 0.4852941036224365,
                    g: 0.4852941036224365,
                    b: 0.4852941036224365
                },
                time: 0.0
            },
            {
                color: {
                    __class__: 'feng3d.Color3',
                    r: 0.4852941036224365,
                    g: 0.4852941036224365,
                    b: 0.4852941036224365
                },
                time: 1.0
            }
        ]
    },
    emitting: true,
    minVertexDistance: 0.20000000298023225,
    generateLightingData: false,
    numCapVertices: 10,
    numCornerVertices: 0,
    shadowBias: 0.0,
    textureMode: 0,
    time: 0.20000000298023225,
    widthCurve: {
        __class__: 'feng3d.AnimationCurve',
        postWrapMode: 8,
        preWrapMode: 8,
        keys: [
            {
                inTangent: 0.0,
                outTangent: 0.0,
                time: 0.0,
                value: 1.0
            }
        ]
    },
    widthMultiplier: 11.0,
    startWidth: 11.0,
    endWidth: 11.0
};
