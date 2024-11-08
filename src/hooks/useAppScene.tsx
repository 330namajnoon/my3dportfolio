import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { AppScene } from "sm-babylonts";

export type UseAppSceneReturn = {
    appScene: AppScene;
};

const useAppScene = () => {
    const appContext = useContext(AppContext);

    return appContext.appScene;
}

export default useAppScene;