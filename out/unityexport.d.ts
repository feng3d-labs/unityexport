declare var pd: feng3d.gPartial<feng3d.ParticleSystem>;
declare class ParticleSystemExampe {
    constructor();
}
declare var td: feng3d.gPartial<feng3d.TrailRenderer>;
declare class TrailRendererExample {
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
