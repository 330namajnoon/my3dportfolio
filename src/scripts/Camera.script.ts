import { Script } from "sm-babylonts";
import * as BABYLON from "@babylonjs/core";

class CameraScript extends Script<BABYLON.ArcRotateCamera> {
    initial = () => {
        this.entity.setPosition(new BABYLON.Vector3(.5, 1.7, 3));
        this.entity.setTarget(new BABYLON.Vector3(.3, 1.6, 2));
    };
}

export default CameraScript;
