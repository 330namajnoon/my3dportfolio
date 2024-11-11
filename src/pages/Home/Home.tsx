import { useEffect, useRef } from "react";
import useAppScene from "../../hooks/useAppScene";
import * as Styles from "./styles";
import config from "../../config";
import * as BABYLON from "@babylonjs/core";
import { CameraScript } from "../../scripts";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appScene = useAppScene();

  useEffect(() => {
    appScene.start(canvasRef.current!);
    appScene.addScript(appScene.getCamera(), CameraScript);
    appScene.createHemisphericLight(
      "light",
      new BABYLON.Vector3(0, 3, 1)
    );
    appScene
      .loadMesh("sina", `${config.SERVER_BASE_URL}/asset/avatar.glb`)
      .then((res) => {
        res.rotate(BABYLON.Axis.Y, 4, BABYLON.Space.WORLD);
        res
          .getAnimationGroups()
          .forEach((animationGroup) => animationGroup.stop());
        res
          .getAnimationGroups()
          .find((animationGroup) => animationGroup.name === "llamame")
          ?.start(true);
      });
  }, []);

  return (
    <Styles.Container>
      <Styles.Canvas ref={canvasRef}></Styles.Canvas>
    </Styles.Container>
  );
};

export default Home;
