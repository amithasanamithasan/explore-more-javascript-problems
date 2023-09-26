const friend =[12,45,46,50,34,6,44,23];
// remove array index elements
const partial=friend.splice(2, 5,345,4545,656,767);
// [ 46, 50, 34, 6, 44 ] output
// [ 12, 45, 23 ]
// -----------------------add array new alement add splice methode
// [
//     12,  45, 345,
//   4545, 656, 767,
//     23
// ]
console.log(partial);
console.log(friend);