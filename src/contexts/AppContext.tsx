import { createContext } from "react";
import { AppScene } from "sm-babylonts";

const AppContext = createContext<{appScene: AppScene}>({appScene: new AppScene()});

export default AppContext;