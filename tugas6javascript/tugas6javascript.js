function printTable(data) {
    // Print header
    console.log("| Index   || Name    | Value | Tanggal Lahir       |");
    console.log("|---------||---------|-------|---------------------|");

    // Print data rows
    for (let index = 0; index < data.length; index++) {
        let item = data[index];
        let formattedDate = new Date(item.tglLahir).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        console.log('| ${index.toString().padEnd(8)} | ${item.name.padEnd(8)} | ${item.value.toString().padEnd(5)} | ${formattedDate.padEnd(20)} |');
    }
}

let data1 = [
    { name: "rangga", value: 21, tglLahir: "February 03, 2023" },
    { name: "sabilah", value: 37, tglLahir: "November 20, 2005" },
    { name: "lena", value: 45, tglLahir: "November 22, 2005" },
    { name: "putri", value: -12, tglLahir: "February 12, 2005" },
    { name: "nazya", value: 13, tglLahir: "April 20, 2005" },
    { name: "adit", value: 37, tglLahir: "September 24, 2005" }
];
// data.sort(function(a,b){
//     // Turn your strings into dates, and then subtract them
//     // to get a value that is either negative, positive, or zero.
//     return new Date(b.date) - new Date(a.date);
//   });

//   function compare( a, b ) {
//     if ( a.tglLahir < b.tglLahir ){
//       return -1;
//     }
//     if ( a.tglLahir > b.tglLahir ){
//       return 1;
//     }
//     return 0;
//   }
  
//   data.sort( compare );
// let dataSort = data.sort();
// Call the function to print the table
console.table(data1.sort((a,b) => new Date(a.tglLahir)- new Date(b.tglLahir)));