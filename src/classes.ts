class CreateRoom {
	// Private and Public Variables

	// cleaning the constructor
	public room1: string = 'ram';

	// public room: string;
	private family: string[] = [];

	// Private and Read-Only Variables
	readonly dob2: string = `2022-06-01`;
	private readonly dob: string = `2022-07-23`;

	constructor(public roomName: string) {}

	addFamilyMember(member: string) {
		this.family.push(member);
	}

	showFamily() {
		console.log(this.family);
	}

	cleanRoom(soap: string) {
		console.log(
			`Cleaning ${this.roomName}'s room with ${soap}`
		);
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
