import Phaser from 'phaser';

export default class OpplingScene extends Phaser.Scene {
  constructor() {
    super('OpplingScene');
  }

  init(data) {
    this.oppling = data.oppling || { name: 'Unknown', element: 'None', rarity: 'Common', personality: 'Neutral' };
  }

  create() {
    this.add.text(20, 20, 'Oppling Claimed!', { font: '24px Arial', fill: '#fff' });
    this.add.text(20, 60, `Name: ${this.oppling.name}`);
    this.add.text(20, 90, `Element: ${this.oppling.element}`);
    this.add.text(20, 120, `Rarity: ${this.oppling.rarity}`);
    this.add.text(20, 150, `Personality: ${this.oppling.personality}`);
    this.add.text(20, 200, 'Press SPACE to return to map', { font: '16px Arial', fill: '#0ff' });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('MapScene');
    });
  }
} 