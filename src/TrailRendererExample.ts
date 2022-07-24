import { View, GameObject, Camera, FPSController, serialization, Vector3 } from 'feng3d';
import { pd } from './ParticleSystemExportData';
import { td } from './TrailRendererData';

export class TrailRendererExample
{
    constructor()
    {
        const view = new View();
        view.scene = View.createNewScene();

        const particle = GameObject.createPrimitive('TrailRenderer').getComponent(TrailRenderer);
        view.scene.gameObject.addChild(particle.gameObject);

        this.lr = particle;

        view.scene.getComponentsInChildren(Camera)[0].gameObject.addComponent(FPSController);

        serialization.setValue(particle, td);
        // const ps = serialization.deserialize(pd);

        setInterval(this.update.bind(this), 16);
    }

    private lr: TrailRenderer;
    private viewcamera = true;
    private move = true;
    private _particleStartPosition = new Vector3();
    private _particleCurrentPosition = new Vector3();
    private _moveRadius = 5;
    private _moveAngle = 0;
    private _moveAngleSpeed = 5;

    update(_delta: number)
    {
        if (this.lr)
        {
            if (this.move)
            {
                const offsetX = Math.cos(this._moveAngle / 180 * Math.PI) * this._moveRadius;
                const offsetY = (this._moveAngle % 3600) / 3600 * this._moveRadius;
                const offsetZ = Math.sin(this._moveAngle / 180 * Math.PI) * this._moveRadius;

                this._particleCurrentPosition.x = this._particleStartPosition.x + offsetX;
                this._particleCurrentPosition.y = this._particleStartPosition.y + offsetY;
                this._particleCurrentPosition.z = this._particleStartPosition.z + offsetZ;

                this.lr.transform.position = this._particleCurrentPosition;

                this._moveAngle += this._moveAngleSpeed;
            }
            this.lr.alignment = this.viewcamera ? LineAlignment.View : LineAlignment.TransformZ;
        }
    }
}
