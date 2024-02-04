class Room {
    constructor(room) {
        this.room = room;
        this.room7 = 'guestRoom';
        this.room8 = 'meditation hall';
        this.family = [];
        this.dob = '2022-07-23';
        this.dob2 = '1999-06-01';
    }
    addFamilyMember(member) {
        if (typeof member === 'string') {
            this.family.push(member);
        }
        else {
            this.family.push(...member);
        }
    }
    showFamily() {
        console.log(this.family);
    }
    cleanRoom(soap) {
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
