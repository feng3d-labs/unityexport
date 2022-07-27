import { View, GameObject, ParticleSystem, Camera, FPSController, serialization, Texture2D } from 'feng3d';
import { pd } from './ParticleSystemExportData';

export class ParticleSystemExampe
{
    constructor()
    {
        const view = new View();
        view.scene = View.createNewScene();

        const particle = GameObject.createPrimitive('Particle System').getComponent(ParticleSystem);
        view.scene.gameObject.addChild(particle.gameObject);

        view.scene.getComponentsInChildren(Camera)[0].gameObject.addComponent(FPSController);

        serialization.setValue(particle, pd);
        // const ps = serialization.deserialize(pd);

        // // 移除所有灯光
        // view.scene.getComponentsInChildren(Light).forEach(l =>
        // {
        //     l.gameObject.remove();
        // });

        const material = particle.material;

        // serialization.setValue(material.uniforms, {
        //     _MainTex: { source: { url: 'bp_df1.png' } }
        // });
        // serialization.setValue(material.uniforms, {
        //     _MainTex: { source: { url: 'snow_negative_x.jpg' } }
        // });
        serialization.setValue(material.uniforms, {
            _MainTex: <any>Texture2D.defaultParticle
        });

        // s_texture: { source: { url: 'resources/m.png' }, flipY: false
    }
}
