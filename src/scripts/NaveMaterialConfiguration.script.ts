import * as BABYLON from "@babylonjs/core";
import { Entity, Script } from "sm-babylonts";

class NaveMaterialConfiguration extends Script<Entity> {
    initial = () => {
        const screens = this.appScene.getScene().getMaterialById("Screens") as BABYLON.PBRMaterial;
        screens.emissiveIntensity = 0.2;
    };
}

export default NaveMaterialConfiguration;