export class Coach {
    public imagePath: string;
    public name: string;
    public team: string;

    constructor (imagePath: string, name: string, team: string) {
        this.imagePath = imagePath;
        this.name = name;
        this.team = team;
    }
}