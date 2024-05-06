import { io } from 'socket.io-client';

export const URL = import.meta.env.MODE === 'production' ? '/' : 'http://192.168.100.8:3002';

export const socket = io(URL, { autoConnect: false, });