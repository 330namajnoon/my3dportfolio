import AppContext from "../contexts/AppContext";
import { AppScene } from "sm-babylonts";

export type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={{ appScene: new AppScene() }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
