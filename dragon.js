class Dragon {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./dragon.png"), 0, 59, 72, 54, 3, 0.2);
        
        this.x = 0;
        this.y = 59;
        this.speed = 100;
    
    }

    update() {
        // Logic to update the entity each frame
        // If no update logic is needed, leave it empty
        this.x += this.speed * this.game.clockTick;
        if(this.x >= 768) this.x = 0;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}
