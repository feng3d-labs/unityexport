class ParticleSystemExampe
{
    constructor()
    {
        var view = new feng3d.View();
        view.scene = feng3d.View.createNewScene();

        var particle = feng3d.GameObject.createPrimitive("Particle System").getComponent(feng3d.ParticleSystem);
        view.scene.gameObject.addChild(particle.gameObject);

        view.scene.getComponentsInChildren(feng3d.Camera)[0].gameObject.addComponent(feng3d.FPSController);

        feng3d.serialization.setValue(particle, pd);
        var ps = feng3d.serialization.deserialize(pd);

        // 移除所有灯光
        view.scene.getComponentsInChildren(feng3d.Light).forEach(l =>
        {
            l.gameObject.remove();
        });

        var material = particle.material;

        // feng3d.serialization.setValue(material.uniforms, {
        //     _MainTex: { source: { url: 'bp_df1.png' } }
        // });
        // feng3d.serialization.setValue(material.uniforms, {
        //     _MainTex: { source: { url: 'snow_negative_x.jpg' } }
        // });
        feng3d.serialization.setValue(material.uniforms, {
            _MainTex: feng3d.Texture2D.defaultParticle
        });


        // s_texture: { source: { url: 'resources/m.png' }, flipY: false
    }
}

// new ParticleSystemExampe();