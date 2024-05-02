export const TOTAL_PIECES = [
  { id: '1b17e53c', type: 'R1', pos: [2,3,4] },
  { id: '86c2cf80', type: 'R1', pos: [7,8,9] },
  { id: 'edc218bc', type: 'R1', pos: [42,43,44] },
  { id: 'c0290446', type: 'R1', pos: [56,57,58] },
  { id: '5a2c2984', type: 'R1', pos: [66,67,68] },
  { id: '2cf0fec1', type: 'R2', pos: [0,10,20] },
  { id: '7eec1011', type: 'R2', pos: [13,23,33] },
  { id: '3cb99505', type: 'R2', pos: [49,59,69] },
  { id: 'ea6a5243', type: 'SP', pos: [60,61,70,71] },
  { id: '19a321f9', type: 'L1', pos: [1,11,12] },
  { id: 'c254de16', type: 'L1', pos: [24,34,35] },
  { id: '8665431f', type: 'L1', pos: [37,47,48] },
  { id: '227d1947', type: 'L1', pos: [64,74,75] },
  { id: 'ee1851bc', type: 'L1', pos: [83,93,94] },
  { id: '898dd3b1', type: 'L1', pos: [88,98,99] },
  { id: '6e22cc56', type: 'L2', pos: [5,6,16] },
  { id: '8e4f34ca', type: 'L2', pos: [14,15,25] },
  { id: '39e8a4e7', type: 'L2', pos: [21,22,32] },
  { id: 'd38b189f', type: 'L2', pos: [54,55,65] },
  { id: 'd92c0fde', type: 'L2', pos: [78,79,89] },
  { id: '2d6bd662', type: 'L2', pos: [84,85,95] },
  { id: '191f6602', type: 'L3', pos: [17,26,27] },
  { id: 'ecae9301', type: 'L3', pos: [29,38,39] },
  { id: '8ec5cd51', type: 'L3', pos: [36,45,46] },
  { id: '0545e9d0', type: 'L3', pos: [41,50,51] },
  { id: '2ce24135', type: 'L3', pos: [63,72,73] },
  { id: 'ad140c85', type: 'L3', pos: [82,91,92] },
  { id: '8d5a1c8a', type: 'L3', pos: [84,93,94] },
  { id: 'e51dfc04', type: 'L4', pos: [18,19,28] },
  { id: '63fe4625', type: 'L4', pos: [30,31,40] },
  { id: '03c6faa9', type: 'L4', pos: [52,53,62] },
  { id: 'a51ab665', type: 'L4', pos: [76,77,86] },
  { id: '3011b8b5', type: 'L4', pos: [80,81,90] },
];
const auxArray = [...TOTAL_PIECES];

// let index = Math.floor(Math.random() * auxArray.length)

// console.log(auxArray.slice(index, index+1)[0])
// index = Math.floor(Math.random() * auxArray.length)
// console.log(auxArray.slice(index, index+1)[0])
// index = Math.floor(Math.random() * auxArray.length)
// console.log(auxArray.slice(index, index+1)[0])
shuffleArray(auxArray);
// console.log(auxArray)

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}