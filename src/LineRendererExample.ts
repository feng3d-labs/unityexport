namespace examples
{
    export class LineRendererExample
    {
        constructor()
        {
            var view = new feng3d.View();
            view.scene = feng3d.View.createNewScene();

            view.scene.getComponentsInChildren('Camera')[0].gameObject.addComponent('FPSController');

            const go = new feng3d.GameObject();
            const lineRenderer = go.addComponent('LineRenderer');
            lineRenderer.SetPositions([new feng3d.Vector3(-5, 0, 0), new feng3d.Vector3(5, 0, 0), new feng3d.Vector3(5, 5, 0)]);
            lineRenderer.useCurve = true;
            lineRenderer.numCapVertices = 1;
            lineRenderer.numCornerVertices = 1;
            view.scene.gameObject.addChild(go);

        }
    }
}