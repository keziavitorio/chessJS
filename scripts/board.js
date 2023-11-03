export class Board {
    constructor() {
        this.tileSide = 80
    }

    draw(ctx) {
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                ctx.fillStyle = (i + j) % 2 == 1 ? '#000000' : '#fc7632'
                ctx.fillRect(i * this.tileSide, j * this.tileSide, this.tileSide, this.tileSide)
            }
        }
    }
}
