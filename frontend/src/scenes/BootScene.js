import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Placeholder: load assets here
    this.load.image('player', 'assets/player.png');
    this.load.image('map', 'assets/map.png');
  }

  create() {
    this.scene.start('MapScene');
  }
} 