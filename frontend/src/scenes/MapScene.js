import Phaser from 'phaser';

export default class MapScene extends Phaser.Scene {
  constructor() {
    super('MapScene');
  }

  create() {
    this.add.text(20, 20, 'Map Scene - Move with arrow keys', { font: '18px Arial', fill: '#fff' });
    this.player = this.add.rectangle(400, 300, 32, 32, 0x00ff00);
    this.cursors = this.input.keyboard.createCursorKeys();

    // QR Scan button
    const scanBtn = this.add.text(650, 20, 'Scan QR', { font: '18px Arial', fill: '#0ff', backgroundColor: '#222' })
      .setInteractive()
      .on('pointerdown', () => {
        // Placeholder: transition to OpplingScene (simulate scan)
        this.scene.start('OpplingScene', { oppling: { name: 'Testling', element: 'Fire', rarity: 'Rare', personality: 'Brave' } });
      });
  }

  update() {
    if (this.cursors.left.isDown) this.player.x -= 2;
    if (this.cursors.right.isDown) this.player.x += 2;
    if (this.cursors.up.isDown) this.player.y -= 2;
    if (this.cursors.down.isDown) this.player.y += 2;
  }
} 