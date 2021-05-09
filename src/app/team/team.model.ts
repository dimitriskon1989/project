export class Team {
  public id: number;
  public name: string;
  public teamPhoto: string;
  public backLogo: string;
  public logo: string;

  constructor (id: number, name: string, teamPhoto: string, backLogo: string, logo: string) {
      this.id = id;
      this.name = name;
      this.teamPhoto = teamPhoto;
      this.backLogo = backLogo;
      this.logo = logo;
  }
}
// Other way to assign the values :
// export class Player {
//     constructor (public imagePath: string, public name: string, public position: string, public team: string) {
//     }
// }
