declare var pd: feng3d.gPartial<feng3d.ParticleSystem>;
declare namespace examples {
    class ParticleSystemExampe {
        constructor();
    }
}
declare var td: feng3d.gPartial<feng3d.TrailRenderer>;
declare namespace examples {
    class TrailRendererExample {
        constructor();
        private lr;
        private viewcamera;
        private move;
        private _particleStartPosition;
        private _particleCurrentPosition;
        private _moveRadius;
        private _moveAngle;
        private _moveAngleSpeed;
        update(delta: number): void;
    }
}
declare namespace examples {
    class LineRendererExample {
        constructor();
    }
}
declare namespace examples {
}
