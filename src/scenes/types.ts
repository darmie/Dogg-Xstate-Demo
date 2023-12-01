import { AnimatedSprite, Texture } from "pixi.js";
import { AnyEventObject } from "xstate";

export type MachineContext = {
    frames: Texture[],
    animation: AnimatedSprite
}

export type EventObject = {
    type: 'onKeyDown' | 'onKeyUp';
    key: string;
} & AnyEventObject