import { io } from "socket.io-client";
import config from "../config";

const socket = io(config.SERVER_BASE_URL);

export default socket;