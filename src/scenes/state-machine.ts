import { createMachine } from 'xstate';
import { idleAnimation, jumpAnimation, runAnimation, sniff$WalkAnimation, sniffAnimation, walkAnimation } from './actions';
import { EventObject, MachineContext } from './types';

const doggieMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBED2UCCA7AlgWwEMAXHVLAYjIGkwBPNAdywG0AGAXUVAAdVYcSZLiAAeiACwAmADQhaEyZIB0ANlYBOcSskbJARgAcBvQF8TstJlyFBFanQCq3NpyQhe-W8LEIps+Qh6AOzKOgDMeqzi0QCs4jFRKmYW6Nj4xKRYSgCSEAA2YOQisETEYEoEAGZEYABOABSsAJTklmk2mTn5YC7CHgKZ3oiScUrqKgZBKpph4saSQeL+iMZKCawbKhEGiawGySBt1hlkSgBSAK543EUlZRXVdY0tR+m251fOHH18A0JuPkkaiU4lY2mMMUk0QMUKWckQYQiYzBkh2QTCQTB6hiB1eHVOl2ut1KNQeNQarCUehUL1Sx3ehK+rh4vy8AOGkKUC1m0yirEh6mWCEkYQMIJiET08SC6nRBkRZnMICwqAgcGEeJOWB+nkG7IQAFoVEKjbi6W9OrkCjq-tr9QtKSEgUEgnooTtIULguoxhLIjEDOowjoA0EzVYLQTPja2aBAZilE6VC63XN+TJ4b4wpSwjFNFpA9FNklFUA */
    id: 'Doggie',
    tsTypes: {} as import("./state-machine.typegen").Typegen0,
    schema: { context: {} as MachineContext, events: {} as EventObject },
    initial: 'Idle',
    predictableActionArguments: true,
    preserveActionOrder: true,
    states: {
        Idle: {
            entry: idleAnimation()
        },
        Jump: {
            entry: jumpAnimation()
        },
        Walk:{
            entry: walkAnimation()
        },
        Run:{
            entry: runAnimation()
        },
        Sniff:{
            entry: sniffAnimation()
        },
        SniffWalk:{
            entry: sniff$WalkAnimation()
        },
        Reset:{
            after:{
                500:{
                    target: '#Doggie.Idle'
                }
            }
        }
    },
    on: {
        onKeyDown: [
            {
                target: '#Doggie.Jump',
                cond: (_, event) => event.key === 'j' || event.key === ' '
            },
            {
                target: '#Doggie.Walk',
                cond: (_, event) => event.key === 'w' 
            },
            {
                target: '#Doggie.Run',
                cond: (_, event) => event.key === 'r' 
            },
            {
                target: '#Doggie.Sniff',
                cond: (_, event) => event.key === 's' 
            },
            {
                target: '#Doggie.SniffWalk',
                cond: (_, event) => event.key === 'z'
            },
        ],
        onKeyUp: {
            target: '#Doggie.Reset',
        }
    },
})

export default doggieMachine;