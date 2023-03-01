import { socket } from './connection';

interface IPropsMessage {
  message: string;
  userEmmiter: {
    name: string;
  };
}

export const SendMessage = ({ message, userEmmiter }: IPropsMessage) => {
  socket.emit('message', message);
};
