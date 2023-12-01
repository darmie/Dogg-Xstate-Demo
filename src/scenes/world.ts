import { AnimatedSprite, Application, Container,} from "pixi.js";

import doggie from "./utils";
import doggieMachine from "./state-machine";
import { interpret } from "xstate";


export class World extends Container {
    app: Application;
    sprite: AnimatedSprite | undefined;
    state: { velocity: { x: number; y: number } };

    constructor(app: Application) {
        super();
        this.app = app;
        this.state = { velocity: { x: 1, y: 1 } };
        this.update = this.update.bind(this);

        doggie.parse(() => {
            this.sprite = new AnimatedSprite(doggie.animations.idle1);
            const machine = doggieMachine.withContext({ frames: doggie.animations.idle1, animation: this.sprite });
            const machineInterpreter = interpret(machine)
            machineInterpreter.start();

            machine.context.animation.x = window.innerWidth / 2 - machine.context.animation.width / 2;
            machine.context.animation.y = window.innerHeight / 2 - machine.context.animation.height / 2;

            document.addEventListener('keydown', (e) => {
                machineInterpreter.send('onKeyDown', { key: e.key });
                e.preventDefault();
            })
            document.addEventListener('keyup', (e) => {
                machineInterpreter.send('onKeyUp');
                e.preventDefault();
            })
           
            this.addChild(machine.context.animation);
        });


        // Handle window resizing
        window.addEventListener('resize', (e) => {
            if (this.sprite) {
                this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2;
                this.sprite.y = window.innerHeight / 2 - this.sprite.height / 2;
            }
        });

        // Handle update
        app.ticker.add(this.update);
    }

    update(_: any, delta: number) {

    }
}





