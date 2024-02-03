class Room {
	public room7: string = 'guestRoom';
	private room8: string = 'meditation hall';

	private family: string[] = [];
	readonly dob: string = '2022-07-23';
	private readonly dob2: string = '1999-06-01';
	constructor(public room: string) {}

	addFamilyMember(member: string | string[]) {
		if (typeof member === 'string') {
			this.family.push(member);
		} else {
			this.family.push(...member);
		}
	}

	showFamily() {
		console.log(this.family);
	}

	cleanRoom(soap: string) {
		console.log(`cleaning ${this.room}'s with  ${soap}`);
	}
}

const dauji = new Room('Dauji');

dauji.addFamilyMember([
	'Jagannathji',
	'Subhadraji',
	'Dauji',
	'LaxmiMata',
	'Sudharshanji',
]);

dauji.showFamily();

dauji.cleanRoom('panchamrit');



console.log(dauji.room7);

