import Phaser from 'phaser';

import backgroundSprite from '../../assets/sprites/court.png';
import ballSprite from '../../assets/sprites/ball.png';
import hoopSprite from '../../assets/sprites/basket.png';


export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
    this.ball = null;
  }

  preload() {
    this.load.image('ball', ballSprite);
    this.load.image('background', backgroundSprite);
    this.load.image('hoop', hoopSprite);
  }

  create() {

    this.matter.world.setBounds();

    // Background
    this.add.image(0, 0, 'background')
      .setOrigin(0).
      setDisplaySize(this.game.config.width, this.game.config.height);
    
    // Hoop
    let hoop = this.add.image(this.game.config.width / 2, 170, 'hoop');
    hoop.setScale(0.4)

    // Ball
    this.ball = this.matter.add.image(400, 100, 'ball', null, { chamfer: 16 });
    this.ball.setCircle();
    this.ball.setScale(0.3);
    this.ball.setBounce(0.4);
    // Let the ball draggable
    this.matter.add.mouseSpring({ length: 0.2, stiffness: 0.08 });
    
    // Rim collisions
    let rimRight = this.matter.add.rectangle(this.game.config.width / 2 + 55, 150, 10, 10, {
      isStatic: true
    });
    let rimLeft = this.matter.add.rectangle(this.game.config.width / 2 - 55, 150, 10, 10, {
      isStatic: true
    });
    
  }

  update() {
    
  }
}