import { AnimatedSprite } from "pixi.js";
import { MachineContext } from "./types";
import doggie from "./utils";

export const idleAnimation = () => {
    return [
        (context: MachineContext) => {
            context.animation.textures = new AnimatedSprite(doggie.animations.idle2).textures;
            context.animation.animationSpeed = 0.16;
            context.animation.loop = true;
            context.animation.play();
        }
    ]
}

export const jumpAnimation = () => {
    return [
        (context: MachineContext) => {
            if( context.animation.textures === doggie.animations.jump) return;
            context.animation.textures = new AnimatedSprite(doggie.animations.jump).textures;
            context.animation.animationSpeed = 0.4;
            context.animation.loop = false;
            context.animation.play();
        }
    ]
}

export const walkAnimation = () => {
    return [
        (context: MachineContext) => {
            if( context.animation.textures === doggie.animations.walk) return;
            context.animation.textures = new AnimatedSprite(doggie.animations.walk).textures;
            context.animation.animationSpeed = 0.16;
            context.animation.loop = true;
            context.animation.play();
        }
    ]
}

export const sniffAnimation = () => {
    return [
        (context: MachineContext) => {
            if( context.animation.textures === doggie.animations.sniff) return;
            context.animation.textures = new AnimatedSprite(doggie.animations.sniff).textures;
            context.animation.animationSpeed = 0.16;
            context.animation.loop = true;
            context.animation.play();
        }
    ]
}

export const sniff$WalkAnimation = () => {
    return [
        (context: MachineContext) => {
            if( context.animation.textures === doggie.animations['sniff+walk']) return;
            context.animation.textures = new AnimatedSprite(doggie.animations['sniff+walk']).textures;
            context.animation.animationSpeed = 0.16;
            context.animation.loop = true;
            context.animation.play();
        }
    ]
}

export const runAnimation = () => {
    return [
        (context: MachineContext) => {
            if( context.animation.textures === doggie.animations.run) return;
            context.animation.textures = new AnimatedSprite(doggie.animations.run).textures;
            context.animation.animationSpeed = 0.16;
            context.animation.loop = true;
            context.animation.play();
        }
    ]
}
