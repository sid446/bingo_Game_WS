import {
  GET_RESPONSE,
  MessageType,
  GET_GAME,
  PAYLOAD_GET_GAME,
  PAYLOAD_PUT_GET_CHECK_MARK,
  GET_CHECK_MARK,
  GET_CHECKBOXES
} from "@repo/games/client/bingo/messages";
import { WebSocket } from "ws";
MessageType;


export function sendPayload(to: WebSocket, type: MessageType, data: any): void {
  switch (type) {
    case GET_RESPONSE: {
      to.send(
        JSON.stringify({
          type,
          payload: {
            message: data,
          },
        })
      );
      break;
    }
    
    case GET_GAME: {
      to.send(JSON.stringify(data as PAYLOAD_GET_GAME))
      break;
    }

    case GET_CHECK_MARK: {
      to.send(JSON.stringify(data as PAYLOAD_PUT_GET_CHECK_MARK))
      break;
    }

    case GET_CHECKBOXES: {
      console.log('this is the sending checkboxesData',data )
        to.send(JSON.stringify(data as PAYLOAD_PUT_GET_CHECK_MARK))
    }
  }

}
