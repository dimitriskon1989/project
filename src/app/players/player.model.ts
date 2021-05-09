export class Player {
    public id: number;
    public profilImage: string;
    public name: string;
    public dateOfBirth: string;
    public age: number;
    public nationality: string;
    public secondNationality: string;
    public imageNationality: string;
    public imageSecondNationality: string;
    public foot: string;
    public height: number;
    public position: string;
    public secondPosition: string;
    public imagePositions: string;
    public team: string;
    public teamLogo: string;


    constructor (id: number, profilImage: string, name: string, dateOfBirth: string,
                age: number, nationality: string, secondNationality: string,
                imageNationality: string, imageSecondNationality: string,
                foot: string, height: number, position: string, secondPosition: string,
                imagePositions: string, team: string, teamLogo: string) {

        this.id = id;
        this.profilImage = profilImage;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.nationality = nationality;
        this.secondNationality = secondNationality;
        this.imageNationality = imageNationality;
        this.imageSecondNationality = imageSecondNationality;
        this.foot = foot;
        this.height = height;
        this.position = position;
        this.secondPosition = secondPosition;
        this.imagePositions = imagePositions;
        this.team = team;
        this.teamLogo = teamLogo;
    }
}
// Other way to assign the values :
// export class Player {
//     constructor (public imagePath: string, public name: string, public position: string, public team: string) {
//     }
// }
