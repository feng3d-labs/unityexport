import { LineRenderer } from '@feng3d/unity';
import { Camera, FPSController, GameObject, Vector3, View } from 'feng3d';

export class LineRendererExample
{
    constructor()
    {
        const view = new View();
        view.scene = View.createNewScene();

        view.scene.getComponentsInChildren(Camera)[0].gameObject.addComponent(FPSController);

        const go = new GameObject();
        const lineRenderer = go.addComponent(LineRenderer);
        lineRenderer.SetPositions([new Vector3(-5, 0, 0), new Vector3(5, 0, 0), new Vector3(5, 5, 0)]);
        lineRenderer.useCurve = true;
        lineRenderer.numCapVertices = 1;
        lineRenderer.numCornerVertices = 1;
        view.scene.gameObject.addChild(go);
    }
}
