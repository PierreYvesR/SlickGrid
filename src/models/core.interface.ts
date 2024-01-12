import { type SlickEventData } from '../slick.core';

export type Handler<ArgType = any> = (e: SlickEventData, args: ArgType) => void;

export interface ElementEventListener {
  element: Element | Window;
  eventName: string;
  listener: EventListenerOrEventListenerObject;
  groupName?: string;
}

export interface EditController {
  /** Commit Current Editor command */
  commitCurrentEdit: () => boolean;

  /** Cancel Current Editor command */
  cancelCurrentEdit: () => boolean;
}