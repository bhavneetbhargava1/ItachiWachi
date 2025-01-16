class Shadoow { 
    constructor(game) { 
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./shadoow.png"), 0, 0, 126, 183, 5, 0.1);
        this.x = 0;
        this.y = 0;
        this.speed = 175;
    }

    update() {
        this.x += this.game.clockTick * this.speed;
        if (this.x > 1024) this.x = 0;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }
} 