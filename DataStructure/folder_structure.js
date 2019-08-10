// Input - 

// [
//     {
//         "name": "File 1",
//         "children":[
//             {
//                 'name': 'File 3'
//             },
//             {
//                 'name': 'File 4',
//                 'children': [
//                     {
//                         'name':'File 6',
//                         'children': [
//                             {
//                                 'name':'File 7'
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 'name': 'File 5'
//             }
//         ]
//     },
//     {
//         "name": "Sorted Search"
//     },
//     {
//         "name": "Heap Search"
//     },
//     {
//         "name": "Binary Search"
//     }
// ]

// Ouput: 

// - File 1
//     - File 3
//     - File 4
//       - File 6
//         - File 7
//     - File 5
//   - Sorted Search
//   - Heap Search
//   - Binary Search

var printFolderStructure = function(array){
    let printStr = {value: "\n"};
    recPrint(array, 1, printStr);
    return printStr.value;
}

var recPrint = function(array, level, printStr){
    array.forEach((item)=>{
        printStr.value = printStr.value + (new Array(level)).fill("").join("\t") + "-" + item.name + "\n";
        if(item.children){
            recPrint(item.children, level+1, printStr);
        }
    });
}

module.exports = {
    runAlgo: printFolderStructure
}