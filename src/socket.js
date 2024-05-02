import { io } from 'socket.io-client';

const URL = import.meta.env.MODE === 'production' ? '/' : 'http://localhost:3002';

export const socket = io(URL, { autoConnect: false });