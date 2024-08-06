import '@g-js-api/g.js';
import $group from '@g-js-api/g.js/types/group.js';
import { vector2 } from './vector.js';

export class renderer {
    constructor(mainG, particleG) {
        // varialbes
        this.pos = new vector2(0, 0);

        // groups
        this.mainG = mainG; // main group for everything
        this.placerG = unknown_g(); // group for placing the particles
        this.spawnerG = unknown_g(); // group  for spawn particlce trigger
        this.particleG = new $group(particleG);
    
        // colors
        this.placerC = unknown_c();
        this.placerC.set(rgba(0, 0, 0, 128), 0, false);
    
        // spawn particle
        $.add(object({
            OBJ_ID: 3608, // id of spawn particle
            SPAWN_TRIGGERED: 1,
            MULTI_TRIGGER: 1,
            GROUPS: [this.spawnerG],
            // 51=particle group, 71=position group
        }).with(51, this.particleG).with(71, this.placerG));

        // placer (for the particles)
        $.add(object({
            OBJ_ID: 50,
            X: 45,
            Y: 45,
            GROUPS: [ this.placerG ],
            COLOR: this.placerC
        }));
    }

    draw() {
        this.spawnerG.call();
    }
}