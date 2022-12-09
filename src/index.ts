import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from "./scenes/PreloadScene";
import { mobileAndTabletCheck } from "./utils/utils";

const scale = mobileAndTabletCheck()
  ? {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    }
  : { autoCenter: Phaser.Scale.CENTER_BOTH };

const SHARED_CONFIG = {
  width: window ? window.innerWidth - 20 : 600,
  height: window ? window.innerHeight - 20 : 800,
};

const Scenes = [
  PreloadScene,
  PlayScene
];

const initScenes = () => Scenes.map((scene) => new scene(SHARED_CONFIG));

const config: Phaser.Types.Core.GameConfig = {
  ...SHARED_CONFIG,
  parent: "game",
  type: Phaser.AUTO,
  scale: scale,
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      gravity: false,
      enableSleeping: true,
    },
    arcade: {
      debug: true,
      gravity: {
        x: 0,
        y: 0,
      },
    },
  },
  scene: initScenes(),
};

new Phaser.Game(config);
