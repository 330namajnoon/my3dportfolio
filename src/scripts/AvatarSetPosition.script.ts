import * as BABYLON from "@babylonjs/core";
import { Entity, Script } from "sm-babylonts";

class AvatarSetPosition extends Script<Entity> {
    initial = () => {
        this.entity.setPosition(new BABYLON.Vector3(0, -2.5, 4));
        this.entity.rotate(BABYLON.Axis.Y, -90, BABYLON.Space.LOCAL);
        this.entity.scale(new BABYLON.Vector3(1.2, 1.2, 1.2));
        this.entity.getAnimationGroups().forEach((animationGroup) => animationGroup.stop());
        this.entity.getAnimationGroups().find((animationGroup) => animationGroup.name === "parado")?.start(true);
    };
}

export default AvatarSetPosition;