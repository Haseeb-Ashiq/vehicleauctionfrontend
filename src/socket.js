import {io} from 'socket.io-client';

export const SocketInit= async ()=>{
    const option={
        'force new connection':true,
        reconnectionAttempt:'Infinity',
        timeout:10000,
        transport:['websocket']

    }
    return io('http://localhost:5000',option);
}