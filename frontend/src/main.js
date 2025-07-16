import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MapScene from './scenes/MapScene';
import OpplingScene from './scenes/OpplingScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [BootScene, MapScene, OpplingScene],
};

const game = new Phaser.Game(config); 