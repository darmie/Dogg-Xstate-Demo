import { BaseTexture, Spritesheet } from "pixi.js";

function dogAnimation() {
    // Create object to store sprite sheet data
    const atlasData: any = {
        frames: {

        },
        meta: {
            image: 'assets/corgi-assetnotail.png',
            format: 'RGBA8888',
            size: { w: 704, h: 512 },
            scale: 1
        },
        animations: {
            jump: [],
            idle1: [],
            idle2: [],
            sit: [],
            walk: [],
            run: [],
            sniff: [],
            ['sniff+walk']: []
        }
    }

    // jump frames
    for (let i = 0; i < 11; i++) {
        atlasData.frames[`jump${i}`] = {
            frame: { x: i * 64, y: 0, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.jump.push(`jump${i}`)
    }
    // idle1 frames
    for (let i = 0; i < 5; i++) {
        atlasData.frames[`idle1-${i}`] = {
            frame: { x: i * 64, y: 64, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.idle1.push(`idle1-${i}`)
    }
    // idle2 frames
    for (let i = 0; i < 5; i++) {
        atlasData.frames[`idle2-${i}`] = {
            frame: { x: i * 64, y: 128, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.idle2.push(`idle2-${i}`)
    }
    // sit frames
    for (let i = 0; i < 9; i++) {
        atlasData.frames[`sit${i}`] = {
            frame: { x: i * 64, y: 192, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.sit.push(`sit${i}`)
    }

    // walk frames
    for (let i = 0; i < 5; i++) {
        atlasData.frames[`walk${i}`] = {
            frame: { x: i * 64, y: 256, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.walk.push(`walk${i}`)
    }

    // run frames
    for (let i = 0; i < 8; i++) {
        atlasData.frames[`run${i}`] = {
            frame: { x: i * 64, y: 320, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.run.push(`run${i}`)
    }
    // sniff frames
    for (let i = 0; i < 8; i++) {
        atlasData.frames[`sniff${i}`] = {
            frame: { x: i * 64, y: 384, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations.sniff.push(`sniff${i}`)
    }

    // sniff+walk frames
    for (let i = 0; i < 8; i++) {
        atlasData.frames[`sniff+walk${i}`] = {
            frame: { x: i * 64, y: 448, w: 64, h: 64 },
            sourceSize: { w: 32, h: 28 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 28 }
        };
        atlasData.animations['sniff+walk'].push(`sniff+walk${i}`)
    }

    return new Spritesheet(
        BaseTexture.from(atlasData.meta.image),
        atlasData
    );
}

const dogAnim = dogAnimation();
export default dogAnim;