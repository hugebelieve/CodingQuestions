// Source - https://leetcode.com/problems/longest-absolute-file-path/

// Input "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
// Represents
// dir
//     subdir1
//         file1.ext
//         subsubdir1
//     subdir2
//         subsubdir2
//             file2.ext

// Output - 32 - "dir/subdir2/subsubdir2/file2.ext"
// Given a string representing the file system in the above format, 
// return the length of the longest absolute path to file in the abstracted file system.
// If there is no file in the system, return 0.

var findLongestPath = function({string}){
    let directoryMap = {};
    let maxLength = 0;

    let allLines = string.split("\n");

    allLines.forEach((element,index) => {
        let tabCount = element.split("\t");
        let name = tabCount.pop();

        if(name.includes(".")){
            //a file
            let filePath = "";
            for(let i=0; i<tabCount.length; i++){
                filePath += directoryMap[i] + "/";
            }
            filePath += name;
            if(filePath.length>maxLength){
                maxLength = filePath.length;
            }
        }else{
            //a directory
            directoryMap[tabCount.length] = name; // map will help one full deep search at a time
        }
    });

    return maxLength;
}

module.exports = {
    runAlgo: findLongestPath
}