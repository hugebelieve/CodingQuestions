module.exports = [
    {
        url: "intersection",
        description: "find intersection elements of n arrays",
        egInput: "[ [2,5,7,3], [3,6,8,2], [3,9,2,5,7] ]",
        path: "intersection_between_array"
    },
    {
        url: "moveZeroToLast",
        description: "Manipulate array by moving zero to last",
        egInput: "[2,0,5,0,7,3]",
        path: "array_manipulation"
    },
    {
        url: "binarySearchCircular",
        description: "Binary Search in circular array",
        egInput: `{"array":[16,18,20,21,4,6,7,9,12,15], "x": 12}`,
        path: "binary_search_circular"
    },
    {
        url: "binaryTreeQue",
        description: "Que a binary tree in a half pyramid string",
        egInput: "[2,3,4,1,6,5]",
        path: "binary_tree_que"
    },
    {
        url: "binaryTreeSearch",
        description: "Search in a binary tree",
        egInput: `{"input":[2,3,4,1,6,5], "x": 4}`,
        path: "binary_search_tree"
    },
    {
        url: "codeJamMonster",
        description: "Decipher CodeJam Monster String",
        egInput: `{"vocalA":["this", "is", "a", "monster", "retsnom"], "cipher": "ishtsiaarestmon"}`,
        path: "codejam_monster"
    },
    {
        url: "coinChange",
        description: "Determine minimum number of coin change for a total",
        egInput: `{"coins":[1,2,5], "amount": 11}`,
        path: "coin_change"
    },
    {
        url: "countRangeSum",
        description: "Determine count of range sum given within a limit",
        egInput: `{"nums":[-2,5,-1],"lower":-2,"upper":2}`,
        path: "count_range_sum"
    },
    {
        url: "findCycleInArray",
        description: "Determine cycle in a given array",
        egInput: `[1,2,1,3,4,8]`,
        path: "cycle_in_array"
    },
    {
        url: "deleteColumToMakeSorted",
        description: "Delete column to make sorted.",
        egInput: `["ca","bb","ac"]`,
        path: "delete_to_make_sorted"
    },
    {
        url: "parkingLot",
        description: "Parking lot for vehicles of different sizes.",
        egInput: `{"spots": {"S":0,"M":10,"L":12,"XL":7}, "cars": {"S":10,"M":6,"L":9,"XL":8} , "plate": 4 }`,
        path: "parking_lot"
    },
    {
        url: "binaryTreeDepth",
        description: "Depth of binary tree.",
        egInput: `[3,9,20,null,null,15,7]`,
        path: "depth_of_binary_tree"
    },
    {
        url: "binaryTreeBalanceHeight",
        description: "Find if binary tree is height balanced.",
        egInput: `[1,2,2,3,3,null,null,4,4]`,
        path: "height_balance_tree"
    },
    {
        url: "dijskstraPath",
        description: "Find all route time of a graph.",
        egInput: `{"graph":{
                    "vertices": {"A":1,"B":1,"C":1,"D":1,"E":1,"F":1},
                    "edges": [["A","B",5],["A","D",9],["A","E",2],["B","C",2],["C","D",3],["D","F",2],["E","F",3]]
                    }, "startVertex": "A"}`,
        path: "dijikstra_short_path"
    },
    {
        url: "cycleInDirectedGraph",
        description: "Find cycle in a directed graph.",
        egInput: `{"graph":{
                    "vertices": {"1":1,"2":1,"4":1,"5":1,"6":1},
                    "edges": {
                        "4": {"1": 1,"5": 1},
                        "1": {"2": 1},
                        "5": {"6": 1},
                        "6": {"4": 1}
                    }}}`,
        path: "cycle_in_directed_graph"
    },
    {
        url: "findDuplicate",
        description: "Find duplicate in an array.",
        egInput: `[3 , 4 , 1 , 5 , 1]`,
        path: "find_duplicate"
    },
    {
        url: "flatternArray",
        description: "Flattern given array.",
        egInput: `[ 2 , 3 , [ 10 , 8 , [ 7 , 6 , 2 , [ 9 , 10 ] ] , 4 , 6 ] , 9 , [ 12 , [13] ] ]`,
        path: "flattern_array"
    },
    {
        url: "printFolderStructure",
        description: "Print folder structure.",
        egInput: `[{"name":"File1","children":[{"name":"File3"},{"name":"File4","children":[{"name":"File6","children":[{"name":"File7"}]}]},
                        {"name":"File5"}]},{"name":"SortedSearch"},{"name":"HeapSearch"},{"name":"BinarySearch"}]`,
        path: "folder_structure"
    },
    {
        url: "gasStationCircuit",
        description: "Find start point for complete circuit of gas station travel.",
        egInput: `{"gasFills": [1, 1 , 7 , 5], "cost": [4, 3 , 5 , 4]}`,
        path: "gas_station"
    },
    {
        url: "groupAnagrams",
        description: "Group all given anagrams in a array.",
        egInput: `["eat", "tea", "tan", "ate", "nat", "bat"]`,
        path: "group_anagrams"
    },
    {
        url: "kClosestPoints",
        description: "Get K closest points to origin.",
        egInput: `{"points":[[-2,4],[0,-2],[-1,0],[3,5],[-2,-3],[3,2]], "k":3}`,
        path: "k_closest_points_to_center"
    },
    {
        url: "rectangleOverlap",
        description: "Find overlapping distance of two rectangles.",
        egInput: `{"rect1":[{"x":2,"y":1},{"x":5,"y":5}], "rect2":[{"x":3,"y":2},{"x":5,"y":7}]}`,
        path: "find_intersection_area"
    },
    {
        url: "LRUcache",
        description: "Implementing LRU cache with max cache limit.",
        egInput: `{"array":[2,4,5,7,3,4,8,9], "cacheSize":3}`,
        path: "LRU_cache"
    },
    {
        url: "createLargestNumber",
        description: "Given an array create the largest number from it.",
        egInput: `[3, 342, 34, 5, 9]`,
        path: "create_largest_number"
    },
    {
        url: "palindromicSubString",
        description: "Find the longest palindromic substring of a given string.",
        egInput: `{ "input": "forgeeksskeegfor"}`,
        path: "longest_palindromic_substr"
    },
    {
        url: "largestRectHistogram",
        description: "Find largest area in a given histogram array.",
        egInput: `[2,1,5,6,2,3]`,
        path: "largest_rect_histogram"
    },
    {
        url: "lengthOfLastWord",
        description: "Find length of last word.",
        egInput: `{"word":"Hello World"}`,
        path: "length_of_last_word"
    },
    {
        url: "binaryTreeLevel",
        description: "Level binary tree item.",
        egInput: `[3,9,20,null,null,15,7]`,
        path: "binary_tree_level_order"
    },
    {
        url: "lexicographicOrder",
        description: "Get all lexicographic order of given string.",
        egInput: `{"word":"SPTRO"}`,
        path: "lexicographic_order"
    },
    {
        url: "findLongestPrefix",
        description: "Find longest prefix in all strings in an array.",
        egInput: `["abcdefgh", "aefghijk", "abcefgh"]`,
        path: "longest_common_prefix"
    },
    {
        url: "longestAbsolutePath",
        description: "Find length of longest absolute path in a given file structure of string.",
        egInput: `{"string":"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext"}`,
        path: "longest_absolute_path"
    },
    {
        url: "wordSearch",
        description: "Search a word in a given 2d board.",
        egInput: `{"board": 
            [
                ["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]
            ], "word":"ABCCED"}`,
        path: "word_search"
    },
    {
        url: "minimumSwaps",
        description: "Get minimum swaps to sort and array.",
        egInput: `[7, 1, 3, 2, 4, 5, 6]`,
        path: "minimum_swaps"
    },
    {
        url: "maxConsecutiveSum",
        description: "Get max consecutive sum in an array.",
        egInput: `[10,  5, 10, 40, 50, 35]`,
        path: "max_consecutive_sum"
    },
    {
        url: "maxContinuousSum",
        description: "Get max continuous sum in an array.",
        egInput: `[-2,1,-3,-6,4,-9,14,-1,2,1,-5,8]`,
        path: "max_continuous_sum"
    },
    {
        url: "largestSquare",
        description: "Find largest square in given 2D array.",
        egInput: `[
            [1 ,0 ,1 ,0 ,0 ,1],
            [1 ,0 ,1 ,1 ,1 ,1],
            [1 ,1 ,1 ,1 ,1 ,0],
            [1 ,0 ,1 ,1 ,1 ,1],
            [1 ,0 ,1 ,1 ,1 ,1]
        ]`,
        path: "largest_square_in_matrix"
    },
    {
        url: "maxOfSubarray",
        description: "Get max of all subarray of k length.",
        egInput: `{"array":[ 10, 5, 2, 7, 8, 7], "k": 3}`,
        path: "max_of_subarray"
    },
    {
        url: "minCostSpanningTree",
        description: "Get min cost spanning tree.",
        egInput: `{
            "vertices": {"A": 1,"B": 1,"C": 1,"D": 1,"E": 1,"F": 1},
            "edges": [
                ["AD" , 1],["AB" , 3],["BD" , 3],["BC" , 1],["DC" , 1],
                ["DE" , 6],["EC" , 5],["CF" , 4],["EF" , 2]
            ]}`,
        path: "min_cost_spanning_tree"
    },
    {
        url: "minimum_edit_distance",
        description: "Find minimum number of edits required to convert ‘str1’ into ‘str2’.",
        egInput: `{"str1":"sunday", "str2": "saturday"}`,
        path: "minimum_edit_distance"
    },
    {
        url: "determine_health",
        description: "Determine health of DNA.",
        egInput: `{"str":"6\\na b c aa d b\\n1 2 3 4 5 6\\n3\\n1 5 caaab\\n0 4 xyz\\n2 4 bcdybc"}`,
        path: "determine_dna_health"
    },
]