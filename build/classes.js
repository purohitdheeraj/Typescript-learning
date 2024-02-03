class CreateRoom {
    constructor(roomName) {
        this.roomName = roomName;
        // Private and Public Variables
        // cleaning the constructor
        this.room1 = 'ram';
        // public room: string;
        this.family = [];
        // Private and Read-Only Variables
        this.dob2 = `2022-06-01`;
        this.dob = `2022-07-23`;
    }
    addFamilyMember(member) {
        this.family.push(member);
    }
    showFamily() {
        console.log(this.family);
    }
    cleanRoom(soap) {
        console.log(`Cleaning ${this.roomName}'s room with ${soap}`);
    }
}
const jagannath = new CreateRoom('Jagannath');
const subhadraMata = new CreateRoom('Subhadraji');
const dauBhaiya = new CreateRoom('Baldauji');
const sudharshanji = new CreateRoom('Sudarshanji');
console.log(jagannath.roomName);
jagannath.addFamilyMember('Daubhaiya');
jagannath.addFamilyMember('sudarshanji');
jagannath.addFamilyMember('subhadraji');
jagannath.addFamilyMember('laxmi mata');
jagannath.cleanRoom('panchamrit');
jagannath.showFamily();
console.log(jagannath.dob2);
console.log(jagannath.room1);
// not accesible bcoz its private and readonly
// console.log(jagannath.dob);
