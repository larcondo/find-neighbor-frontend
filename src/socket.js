import { io } from 'socket.io-client'

const URL = 'http://192.168.100.8:3002'

export const socket = io(URL, { autoConnect: false })