import BaseScene from "./BaseScene";

export default class PreloadScene extends BaseScene {
    constructor(config: object) {
        super('PreloadScene', config);
    }

    preload(): void {
        // load assets
    }

    create(): void {
         this.scene.start('PlayScene');
    }
}
