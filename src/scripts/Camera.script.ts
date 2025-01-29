import { Script } from "sm-babylonts";
import * as BABYLON from "@babylonjs/core";

class CameraScript extends Script<BABYLON.DeviceOrientationCamera> {
    initial = () => {
        this.entity.position = new BABYLON.Vector3(-2.9697379614979327, -0.04120125488185955, 8.021399484660058);
        this.entity.setTarget(new BABYLON.Vector3(-0.29179276183505537, -0.8157846972716623, 4.949014138065336));

        window.addEventListener("keydown", (event) => {
            if (event.key === " ") {
                console.log(`${this.entity.position.x}, ${this.entity.position.y}, ${this.entity.position.z}`);
                console.log(`${this.entity.getTarget().x}, ${this.entity.getTarget().y}, ${this.entity.getTarget().z}`);
            }
        });
    };
}

export default CameraScript;
