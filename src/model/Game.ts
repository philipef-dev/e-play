class Game {
    genero: string;
    title: string;
    system: string;
    infos: string[];
    description: string;
    image: string;
    id: number;

    constructor(id: number, genero: string, title: string, system: string, infos: string[], description: string, image: string) {
        this.id = id
        this.genero = genero
        this.title = title
        this.system = system
        this.infos = infos
        this.description = description
        this.image = image
    }
}


export default Game;



