import * as BABYLON from "@babylonjs/core";
import { Entity, Script } from "sm-babylonts";

class NaveLightsScript extends Script<Entity> {
    public pointLightsColor = BABYLON.Color3.FromHexString("#8ecae6");
    public pointLights: BABYLON.PointLight[] = [];
    public spotLights: BABYLON.SpotLight[] = [];

    initial = () => {
        // this.pointLights.push(new BABYLON.PointLight("light", new BABYLON.Vector3(6, .5, 2), this.appScene.getScene()));
        // this.pointLights.push(new BABYLON.PointLight("light1", new BABYLON.Vector3(6, .5, 5.5), this.appScene.getScene()));
        // this.pointLights.push(new BABYLON.PointLight("light1", new BABYLON.Vector3(6, .5, 12), this.appScene.getScene()));
        // this.pointLights.push(new BABYLON.PointLight("light1", new BABYLON.Vector3(6, .5, 18), this.appScene.getScene()));
        this.spotLights.push(new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, .5, 5), new BABYLON.Vector3(0, -1, -1), Math.PI / 2, 2, this.appScene.getScene()));
        this.spotLights.push(new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-2, -1, 5), new BABYLON.Vector3(1.5, 0, -1), Math.PI / 2, 2, this.appScene.getScene()));
        const hemisphericLight = new BABYLON.HemisphericLight("bindLight", new BABYLON.Vector3(0, -1, 0), this.appScene.getScene());
        hemisphericLight.diffuse = this.pointLightsColor;
        hemisphericLight.intensity = 1;
        this.spotLights.forEach((light) => {
            // const gizmo = new BABYLON.LightGizmo();
            // gizmo.light = light;
            // light.diffuse = this.pointLightsColor;
            light.intensity = 5;
        });

    };
}

export default NaveLightsScript;
