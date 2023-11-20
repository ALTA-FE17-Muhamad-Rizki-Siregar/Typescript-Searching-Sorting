function binarySearchByName(arr: Array<{ id: number, name: string }>, targetName: string): number {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle].name === targetName) {
            return middle;
        } else if (arr[middle].name < targetName) {
            first = middle + 1;
        } else {
            last = middle - 1;
        }
    }

    return -1; 
}

const dataKaryawan = [
    { id: 101, name: "Rani" },
    { id: 201, name: "Andi" },
    { id: 305, name: "Budi" },
    { id: 410, name: "Cindy" },
    { id: 520, name: "Dodi" },
    { id: 635, name: "Eka" },
    { id: 742, name: "Fani" },
];


const result = binarySearchByName(dataKaryawan, "Budi");

if (result !== -1) {
    console.log(`Nama ditemukan pada indeks ke-${result}`);
    console.log(`ID: ${dataKaryawan[result].id}`);
} else {
    console.log(`Nama tidak ditemukan`);
}
