import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {

  private config: object;
  private playConfig: object;

  constructor(key: string, config: object) {
    super(key);
    this.config = config;

    this.playConfig = {
      currentPlayer: 0,
      numPlayers: 4,
    };
  }

  getConfig(): Phaser.Types.Core.GameConfig {
    return this.config;
  }

  getPlayConfig() {
    return this.playConfig;
  }

  setPlayConfig(config: object) {
    this.playConfig = config;
  }

  preload(): void { }
  create(): void {
    this.matter.world.setBounds();
    this.matter.add.mouseSpring();
  }
  update(time: number, delta: number): void { }

}
