import { useEffect, useRef } from "react";
import useAppScene from "../../hooks/useAppScene";
import * as Styles from "./styles";
import config from "../../config";
import * as BABYLON from "@babylonjs/core";
import {
  AvatarSetPosition,
  CameraScript,
  NaveLightsScript,
  NaveMaterialConfiguration,
} from "../../scripts";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appScene = useAppScene();

  const sceneInitialConfig = () => {
    const scene = appScene.getScene();
    scene.clearColor = BABYLON.Color4.FromColor3(BABYLON.Color3.Black());
    const gl = new BABYLON.GlowLayer("glow", appScene.getScene(), {
      mainTextureFixedSize: 1024,
      blurKernelSize: 64,
      mainTextureSamples: 4,
    });
    gl.intensity = 1;
  };

  useEffect(() => {
    appScene.start(canvasRef.current!);
    sceneInitialConfig();
    appScene.addScript(appScene.getCamera(), CameraScript);
    appScene
      .loadMesh("nave", `${config.SERVER_BASE_URL}/asset/nave.glb`)
      .then((nave) => {
        appScene
        .loadMesh("sina", `${config.SERVER_BASE_URL}/asset/avatar.glb`)
        .then((sina) => {
            nave.addScript(NaveLightsScript, sina);
            nave.addScript(NaveMaterialConfiguration);
            sina.addScript(AvatarSetPosition);
          });
      });
    // appScene
    //   .loadMesh("sina", `${config.SERVER_BASE_URL}/asset/avatar.glb`)
    //   .then((res) => {
    //     res.rotate(BABYLON.Axis.Y, 4, BABYLON.Space.WORLD);
    //     res
    //       .getAnimationGroups()
    //       .forEach((animationGroup) => animationGroup.stop());
    //     res
    //       .getAnimationGroups()
    //       .find((animationGroup) => animationGroup.name === "llamame")
    //       ?.start(true);
    //   });
  }, []);

  return (
    <Styles.Container>
      <Styles.Canvas ref={canvasRef}></Styles.Canvas>
    </Styles.Container>
  );
};

export default Home;
