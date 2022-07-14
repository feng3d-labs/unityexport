namespace examples
{
    export class TrailRendererExample
    {
        constructor()
        {
            var view = new feng3d.View();
            view.scene = feng3d.View.createNewScene();

            var particle = feng3d.GameObject.createPrimitive("TrailRenderer").getComponent(feng3d.TrailRenderer);
            view.scene.gameObject.addChild(particle.gameObject);

            this.lr = particle;

            view.scene.getComponentsInChildren(feng3d.Camera)[0].gameObject.addComponent(feng3d.FPSController);

            feng3d.serialization.setValue(particle, td);
            var ps = feng3d.serialization.deserialize(pd);

            setInterval(this.update.bind(this), 16);
        }

        private lr: feng3d.TrailRenderer;
        private viewcamera = true;
        private move = true;
        private _particleStartPosition = new feng3d.Vector3();
        private _particleCurrentPosition = new feng3d.Vector3();
        private _moveRadius = 5;
        private _moveAngle = 0;
        private _moveAngleSpeed = 5;

        update(delta: number)
        {
            if (this.lr)
            {
                if (this.move)
                {
                    var offsetX = Math.cos(this._moveAngle / 180 * Math.PI) * this._moveRadius;
                    var offsetY = (this._moveAngle % 3600) / 3600 * this._moveRadius;
                    var offsetZ = Math.sin(this._moveAngle / 180 * Math.PI) * this._moveRadius;

                    this._particleCurrentPosition.x = this._particleStartPosition.x + offsetX;
                    this._particleCurrentPosition.y = this._particleStartPosition.y + offsetY;
                    this._particleCurrentPosition.z = this._particleStartPosition.z + offsetZ;

                    this.lr.transform.position = this._particleCurrentPosition;

                    this._moveAngle += this._moveAngleSpeed;
                }
                this.lr.alignment = this.viewcamera ? feng3d.LineAlignment.View : feng3d.LineAlignment.TransformZ;
            }
        }
    }
}