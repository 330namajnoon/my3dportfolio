import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useRef } from "react";
import useAppScene from "../../hooks/useAppScene";
import * as Styles from "./styles";
import config from "../../config";
import * as BABYLON from "@babylonjs/core";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentStep: number = useSelector(
    (state: RootState) => state.home.currentStep
  );
  const appScene = useAppScene();

  useEffect(() => {
    appScene.start(canvasRef.current!);
    appScene.getCamera().setPosition(new BABYLON.Vector3(0, 2, 5));
    appScene.getCamera().setTarget(new BABYLON.Vector3(0, 1, 0));
    const entity = appScene.createHemisphericLight(
      "light",
      new BABYLON.Vector3(0, 3, 1)
    );

    appScene
      .loadMesh("sina", `${config.SERVER_BASE_URL}/asset/avatar.glb`)
      .then((res) => {
        console.log(res.getMeshes());
        res.rotate(BABYLON.Axis.Y, -15, BABYLON.Space.WORLD);
        res
          .getAnimationGroups()
          .forEach((animationGroup) => animationGroup.stop());
        res
          .getAnimationGroups()
          .find((animationGroup) => animationGroup.name === "parado")
          ?.start(true);
        console.log(res.getAnimationGroups());
      });
  }, []);

  return (
    <Styles.Container>
      <Styles.Canvas ref={canvasRef}></Styles.Canvas>
    </Styles.Container>
  );
};

export default Home;
