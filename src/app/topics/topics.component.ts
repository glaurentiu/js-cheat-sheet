import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  @Input() topicName = '';

  topics = [
    {
      name: 'Algorithms > Sorting > Bubble Sort',
      code: `function sort(arr) {
        var items = arr.slice();
        for (var i = 0; i < items.length; i++) {
            for (var j = i + 1; j < items.length; j++) {
                if (items[j] < items[i]) {
                    var tmp = items[j];
                    items[j] = items[i];
                    items[i] = tmp;
                }
            }
        }
        return items;
    }


    var items = [4, 1, 5, 3, 2];
    var sortItems = sort(items);

    // sortItems is [1, 2, 3, 4, 5]
    console.log('Sort Items:',sortItems);`,
    },
    {
      name: 'Algorithms > Sorting > Counting Sort',
      code: ` function sort(arr) {
        let items = new Array(arr.length);

        let min = Math.min.apply(Math, arr);
        let max = Math.max.apply(Math, arr);

        let counts = Array(max - min + 1)
            .fill(0);

        for (let x of arr) {
            counts[x - min]++;
        }

        let total = 0;
        for (let i = min; i <= max; i++) {
            let oldCount = counts[i - min];
            counts[i - min] = total;
            total += oldCount;
        }

        for (let x of arr) {
            items[counts[x - min]] = x;
            counts[x - min]++;
        }
        return items;
    }

    let items = [4, 1, 5, 3, 2];
    let sortItems = sort(items);
    // sortItems is [1, 2, 3, 4, 5]
    console.log(sortItems);`,
    },
    {
      name: 'Algorithms > Sorting > Merge Sort',
      code: `function sort(items) {
        let result = [];
        if (items.length === 1)
            return items;

        let lLeft = Math.floor(items.length / 2);
        let lRight = items.length - lLeft;
        let left = sort(items.slice(0, lLeft));
        let right = sort(items.slice(lLeft, items.length));

        let l = 0; let r = 0;

        while (l < lLeft && r < lRight) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            } else {
                result.push(right[r++]);
            }
        }

        while (l < lLeft) {
            result.push(left[l++]);
        }

        while (r < lRight) {
            result.push(right[r++]);
        }

        return result;
    }

    let items = [4, 1, 5, 3, 2];
    let sortItems = sort(items);
    // sortItems is [1, 2, 3, 4, 5]
    console.log(sortItems);`,
    },
    {
      name: 'Algorithms > Sorting > Quick Sort',
      code: `
      function doSort(items, fst, lst) {
          if (fst >= lst)
              return;
          let i = fst;
          let j = lst;
          let x = items[Math.floor((fst + lst) / 2)];

          while (i < j) {
              while (items[i] < x) i++;
              while (items[j] > x) j--;
              if (i <= j) {
                  let tmp = items[i];
                  items[i] = items[j];
                  items[j] = tmp;
                  i++;
                  j--;
              }
          }
          doSort(items, fst, j);
          doSort(items, i, lst);
      }

      function sort(arr) {
          let items = arr.slice();
          doSort(items, 0, items.length - 1);
          return items;
      }

      let items = [4, 1, 5, 3, 2];
      let sortItems = sort(items);
      // sortItems is [1, 2, 3, 4, 5]
      console.log(sortItems);
      `,
    },
    {
      name: 'Algorithms > Sorting > Radix Sort',
      code: `function listToBuckets(items, cBase, i) {
        let buckets = Array
            .apply(null, Array(cBase))
            .map(function () { return [] });

        let pBase = Math.pow(cBase, i);
        for (let x of items) {
            //Isolate the base-digit from the number
            let digit = Math.floor(x / pBase) % cBase;
            //Drop the number into the correct bucket
            buckets[digit].push(x);
        }

        return buckets;
    }

    function bucketsToList(buckets) {
        let result = [];

        for (let bucket of buckets) {
            //add the numbers in a bucket
            //sequentially to the returned array
            result = result.concat(bucket);
        }

        return result;
    }

    function sort(arr, cBase = 10) {
        let maxVal = Math.max.apply(Math, arr);
        let i = 0;

        while (Math.pow(cBase, i) <= maxVal) {
            arr = bucketsToList(listToBuckets(arr, cBase, i));
            i++;
        }

        return arr;
    }

    let items = [4, 1, 5, 3, 2];
    let sortItems = sort(items);
    // sortItems is [1, 2, 3, 4, 5]
    console.log(sortItems);`,
    },
    {
      name: 'Algorithms > Search > Binary Search',
      code: `//works when the array is sorted
      function search(arr, x)
      {
          let i = 0;
          let j = arr.length;
          while (i !== j)
          {
              let m = Math.floor((i + j) / 2);
              if (x === arr[m])
                  return m;
              if (x < arr[m])
                  j = m;
              else
                  i = m + 1;
          }
          return null;
      }

      let items = [ 2, 3, 5, 7, 11, 13, 17 ];

      console.log(search(items, 1));
      //print null
      console.log(search(items, 7));
      //print 3
      console.log(search(items, 19));
      //print null`,
    },
    {
      name: 'Algorithms > Search > Fast linear Search',
      code: `function search(arr, x)
      {
          let i = 0;
          let count = arr.length;
          arr.push(x);
          while (true) {
              if (arr[i] == x) {
                  delete arr[count];
                  return i < count ? i : null;
              }
              i++;
          }
      }

      let items = [ 2, 3, 5, 7, 11, 13, 17 ];

      console.log(search(items, 1));
      //print null
      console.log(search(items, 7));
      //print 3
      console.log(search(items, 19));
      //print null`,
    },
    {
      name: 'Algorithms > Search > Interpolation Search',
      code: `//works when the array is sorted
      function search(arr, x)
      {
          let low = 0;
          let high = arr.length - 1;

          while ((arr[low] < x) && (x < arr[high]))
          {
              let mid = low + ((x - arr[low])*(high - low))/(arr[high] - arr[low]);

              if (arr[mid] < x)
                  low = mid + 1;
              else if (arr[mid] > x)
                  high = mid - 1;
              else
                  return mid;
          }

          if (arr[low] == x)
              return low;
          if (arr[high] == x)
              return high;
          return null;
      }

      let items = [ 2, 3, 5, 7, 11, 13, 17 ];

      console.log(search(items, 1));
      //print null
      console.log(search(items, 7));
      //print 3
      console.log(search(items, 19));
      //print null
      `,
    },
    {
      name: 'Algorithms > Search > Linear Search',
      code: `function search(arr, x)
      {
          let i = 0;
          let count = arr.length;
          while (i < count)
          {
              if (arr[i] == x)
                  return i;
              i++;
          }
          return null;
      }

      let items = [ 2, 3, 5, 7, 11, 13, 17 ];

      console.log(search(items, 1));
      //print null
      console.log(search(items, 7));
      //print 3
      console.log(search(items, 19));
      //print null`,
    },
    {
      name: 'Arrays > Adding and removing of elements',
      code: `let primeNumbers = [2, 5, 7];
      primeNumbers.push(11);
      //primeNumbers is [2, 5, 7, 11]
      console.log(primeNumbers);

      primeNumbers.splice(0, 0, 3);
      //primeNumbers is [3, 2, 5, 7, 11]
      console.log(primeNumbers);

      delete primeNumbers[2];
      //primeNumbers is [3, 2,, 7, 11]
      console.log(primeNumbers)
      //primeNumbers[2] is undefined
      console.log(primeNumbers[2]);

      primeNumbers.splice(2, 1);
      //primeNumbers is [3, 2, 7, 11]
      console.log(primeNumbers);

      primeNumbers.push(13, 17);
      //primeNumbers is [3, 2, 7, 11, 13, 17]
      console.log(primeNumbers);

      primeNumbers.splice(0, 2, 2, 3, 5);
      //primeNumbers is [2, 3, 5, 7, 11, 13, 17]
      console.log(primeNumbers);

      primeNumbers = [];
      //primeNumbers is []
      console.log(primeNumbers);`,
    },
    {
      name: 'Arrays > Array copying',
      code: `let numbers1 = [ 1, 2, 3, 4, 5 ]
      let numbers2 = numbers1.slice()
      //numbers2 is [ 1, 2, 3, 4, 5 ]

      //ECMAScript 6 feature
      let numbers3 = [...numbers1];
      //numbers3 is [ 1, 2, 3, 4, 5 ]

      numbers1[0] = 100
      console.log('numbers1 is ',numbers1)
      console.log('numbers2 is ',numbers2)
      console.log('numbers3 is' ,numbers3)`,
    },
    {
      name: 'Arrays > Array length',
      code: `let numbers = [ 1, 2, 3 ];
      let len = numbers.length;
      //len is 3

      console.log('len is ',len);`,
    },
    {
      name: 'Arrays > Array with a default value',
      code: `var value = 5;
      var count = 3;

      var array1 = Array
          .apply(null, Array(count))
          .map(function () { return value });
      //array1 is [5, 5, 5]
      console.log(array1);

      //ECMAScript 6 feature
      let fives = new Array(count)
          .fill(value);
      //fives is [5, 5, 5]
      console.log("fives is", fives)`,
    },
    {
      name: 'Arrays > Arrays comparing',
      code: `let ar1 = [ 1, 2, 4, 3 ];
      let ar2 = [ 1, 2, 3, 4, 5 ];

      let diff = ar2.filter(i => ar1.indexOf(i) < 0);
      //diff is [ 5 ]
      console.log('diff is', diff);`,
    },
    {
      name: 'Arrays > Arrays initialization',
      code: `//Empty array
      let n1 = [];
      let n2 = new Array();

      // Single-dimensional array
      let n3 = [1, 2, 3];
      let s1 = ["1", "2", "3"];

      // Multidimensional array.
      let n4 = [[1, 2], [3, 4, 5]];
      n4[1][2] = 7;

      console.log("n4 is", n4);`,
    },
    {
      name: 'Arrays > Arrays merging ',
      code: `let numbers1 = [2, 3, 5];
      let numbers2 = [7, 11, 13];

      let allNumbers1 = numbers1
          .concat(numbers2);
      //allNumbers is [2, 3, 5, 7, 11, 13]

       //ECMAScript 6 feature
      let allNumbers2 = [
          ...numbers1,
          ...numbers2];
      //allNumbers is [2, 3, 5, 7, 11, 13]

      console.log("allNumbers1 is", allNumbers1);
      console.log("allNumbers2 is", allNumbers2);`,
    },
    {
      name: 'Arrays > Checking equality of arrays',
      code: `let n1 = [1, 2, 3];
      let n2 = [1, 2, 3];
      let n3 = [3, 2, 1];

      let equal1 = n1.join() === n2.join();
      //equal1 is true

      let equal2 = arraysEqual(n1, n3);
      //equal2 is false

      console.log('equal1 is ', equal1);
      console.log('equal2 is ',equal2);

      function arraysEqual(a, b) {
          if (a === b) return true;
          if (a == null || b == null)
              return false;
          if (a.length !== b.length)
              return false;

          for (let i = 0; i < a.length; i++) {
              if (a[i] !== b[i]) return false;
          }
          return true;
      }`,
    },
    {
      name: 'Arrays > Converting of an array',
      code: `let numbers = [1, 2, 3, 4, 5];
      let numbers2 = numbers
          .map(function (n) { return n * 2 });
      //numbers2 is [ 2, 4, 6, 8, 10 ]
      console.log('numbers2 is ',numbers2);

      //ECMAScript 6 feature
      let numbers3 = numbers.map(n => n * 3);
      //numbers3 is [ 3, 6, 9, 12, 15 ]
      console.log('numbers3 is ',numbers3)`,
    },
    {
      name: 'Arrays > Dynamic arrays',
      code: `let count = 15;
      let arInt1 = new Array(count);
      arInt1[0] = 1;
      //arInt1 is [1,,,,,,,,,,,,,,]
      console.log('arInt1 is ',arInt1);

      //ECMAScript 6 feature
      let arInt2 = new Array(count).fill(0);
      arInt2[0] = 1;
      //arInt2 is [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      console.log('arInt2 is ',arInt2);`,
    },
    {
      name: 'Arrays > Filtering of elements',
      code: `let numbers = [1, 2, 3, 4, 5];
      let oddItems = numbers.filter(function(i) {
              return i % 2 === 1;
      });
      //oddItems is [ 1, 3, 5 ]
      console.log('oddItems is ',oddItems);

      //ECMAScript 6 feature
      let evenItems = numbers.filter(i => i % 2 === 0)
      //evenItems is [ 2, 4 ]
      console.log('evenItems is ',evenItems);`,
    },
    {
      name: 'Arrays > Finding an array element',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17];

      let contain2 = numbers.indexOf(2) !== -1;
      //contain2 is true

      let contain3 = 3 in numbers;
      //contain3 is true

      let index5 = numbers.indexOf(5);
      //index5 is 2

      //ECMAScript 6 feature
      let contain5 = numbers.includes(5);
      //contain5 is true

      console.log('contain2 is ', contain2);
      console.log('contain3 is ',contain3);
      console.log('contain5 is ',contain5);
      console.log('index5 is ',index5);`,
    },
    {
      name: 'Arrays > Getting Min and Max values',
      code: `let numbers = [2, 3, 5, 7, 11];
      let min = Math.min( ...numbers )
      //min is 2
      let max = Math.max( ...numbers )
      //max is 11

      console.log("min = " + min);
      console.log("max = " + max);`,
    },
    {
      name: 'Arrays > Getting part of an array',
      code: `let numbers = [2, 3, 5, 7, 11];
      let first2 = numbers.slice(0, 2);
      //first2 is [ 2, 3 ]
      let last3 = numbers.slice(2, numbers.length);
      //last3 is [ 5, 7, 11 ]

      console.log('first2 is ',first2);
      console.log('last3 is ',last3);`,
    },
    {
      name: 'Arrays > Getting unique values',
      code: `let numbers = [1, 3, 2, 1, 3];

      function isUnique(value, index, self) {
          return self.indexOf(value) === index;
      }

      let unique = numbers.filter(isUnique);
      //unique is [1, 3, 2]

      console.log('unique is' ,unique);`,
    },
    {
      name: 'Arrays > Iterating over an array',
      code: `Array.prototype.foo = "foo!";

      var numbers = [2, 3, 5, 7];
      var str1 = "";
      for (var i in numbers) {
          str1 += (str1 === "" ? "" : "; ") + numbers[i];
      }
      //str1 is "2; 3; 5; 7; foo!"
      console.log('str1 is',str1);

      str1 = "";
      for (var i in numbers) {
          if (numbers.hasOwnProperty(i)) {
              str1 += (str1 === "" ? "" : "; ") + numbers[i];
          }
      }
      //str is "2; 3; 5; 7"
      console.log('str1 is ',str1);

      let str2 = "";
      //ECMAScript 6 feature
      for (let n of numbers) {
          str2 += (str2 === "" ? "" : "; ") + n;
      }
      //str2 is "2; 3; 5; 7"
      console.log('str2 is ',str2);`,
    },
    {
      name: 'Arrays > Iterating over an array with index',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17];
      let str = "";
      let len = numbers.length;
      for (let i = 0; i < len; i++) {
          str += (str === "" ? "" : "; ") + numbers[i];
          //Do something
      }
      //str is "2; 3; 5; 7; 11; 13; 17"

      console.log('str is ',str);`,
    },
    {
      name: 'Arrays > Sorting of elements',
      code: `var numbers1= [11, 2, 5, 7, 3];
      numbers1.sort();
      //numbers is [11, 2, 3, 5, 7]
      console.log(numbers1);

      numbers1.sort(function (a,b){
          return a - b;
      });
      //numbers is [2, 3, 5, 7, 11]
      console.log(numbers1);

      //descending
      numbers1.sort(function (a, b) {
          return b - a;
      });
      //numbers is [11, 7, 5, 3, 2]
      console.log(numbers1);

      //ECMAScript 6 feature
      let numbers = [11, 2, 5, 7, 3]

      numbers.sort((a, b) => a - b)
      //numbers is [2, 3, 5, 7, 11]
      console.log('numbers is ', numbers);

      //descending
      numbers.sort((a, b) => b - a)
      //numbers is [11, 7, 5, 3, 2]
      console.log('numbers is ', numbers);`,
    },
    {
      name: 'Arrays > every() and some() methods',
      code: `var numbers = [1, 2, 3, 4, 5];

      //ECMAScript 6 feature
      let allLess10 = numbers.every(x => x < 10);
      //everyLess10 is true

      let someMore3 = numbers.some(x => x > 3);
      //someMore3 is true

      let allOdd = numbers.every(x => x % 2 == 1);
      //allOdd is false

      console.log(allLess10);
      console.log(someMore3);
      console.log(allOdd);`,
    },
    {
      name: 'Dictionaries > Adding and removing of elements',
      code: `
      //using objects
      var dic = {
          1: "one", 2: "two"
      };

      dic[3] = "tree";
      //dic is { 1: "one", 2: "two", 3: "tree" }
      console.log("dic is", dic);

      dic[3] = "three";
      //dic is { 1: "one", 2: "two", 3: "three" }
      console.log("dic is", dic);

      delete dic[3];
      //dic is { 1: "one", 2: "two" }
      console.log("dic is", dic);

      dic = {};
      console.log("dic is", dic);

      //using maps (ES6 feature)
      let map = new Map([
          [ 1, "one" ],
          [ 2, "two" ]]);

      map.set(3, "tree");
      //dic is { 1: "one", 2: "two", 3: "tree" }
      console.log("map is", map);

      map.set(3, "three");
      //dic is { 1: "one", 2: "two", 3: "three" }
      console.log("map is", map);

      map.delete(3);
      //dic is { 1: "one", 2: "two" }
      console.log("map is", map);

      map.clear();
      console.log("map is", map);`,
    },
    {
      name: 'Dictionaries > Amount of elements',
      code: `//using objects
      let numbers1 = {
          1: "one", 2: "two"
      };

      let count1 = Object
          .keys(numbers1).length;
      //count1 is 2
      console.log("count1 is", count1)

      //using maps (ES6 feature)
      let numbers2 = new Map([
          [ 1, "one" ],
          [ 2, "two" ]
      ])

      let count2 = numbers2.size
      //count1 is 2
      console.log("count2 is", count2)`,
    },
    {
      name: 'Dictionaries > Checking of presence of a key',
      code: `//* using objects *
      let dic = {
          1: "one",
          2: "two"
      };

      let dExists1 = 1 in dic;
      //exists1 is true

      let dExists2 = dic[2] !== undefined;
      //exists2 is true

      let dExists3 = 3 in dic;
      //exists3 is false

      console.log('dExists1 is ', dExists1);
      console.log('dExists2 is ', dExists2);
      console.log('dExists3 is ', dExists3);

      //* using maps (ES6 feature) *
      let map = new Map([
          [ 1, "one" ],
          [ 2, "two" ]]);

      let mExists1 = map.get(1) !== undefined;
      //exists1 is true

      let mExists2 = map.get(2) !== undefined;
      //exists2 is true

      let mExists3 = map.get(3) !== undefined;
      //exists3 is false

      console.log(mExists1);
      console.log(mExists2);
      console.log(mExists3);`,
    },
    {
      name: 'Dictionaries > Converting of a dictionary',
      code: `let map = new Map([
        [ 1, "one" ], [ 2, "two" ]]);

    let upperMap = Array.from(map.keys())
        .reduce(function (result, key) {
            let value = String(map.get(key))
                .toUpperCase();
            result.set(key, value) ;
            return result;
    }, new Map());
    //oddMap is  [[1, "ONE"], [3, "TWO"]]

    console.log("upperMap is", upperMap);`,
    },
    {
      name: 'Dictionaries > Dictionary Initialization',
      code: `//using objects
      let d1 = {};

      //init with some data
      let numbers1 = {
          1: "one", 2: "two"
      };

      //using maps (ES6 feature)
      let d2 = new Map()

      let numbers2 = new Map([
          [ 1, "one" ],
          [ 2, "two" ]
      ])
      numbers2.set(3, "three")

      console.log("d1 is", d1)
      console.log("d2 is", d2)
      console.log("numbers1 is", numbers1)
      console.log("numbers2 is", numbers2)`,
    },
    {
      name: 'Dictionaries > Dictionary Merge',
      code: `//using objects
            let d1 = {1: "one", 2: "two"};
            let d2 = {3: "three"};

            let dAll = {...d1, ...d2};
            //dAll is { '1': 'one', '2': 'two' }
            console.log("dAll is", dAll);

            //using maps (ES6 feature)
            let m1 = new Map([
                [ 1, "one" ],
                [ 2, "two" ]])
            let m2 = new Map([[3, "three"]]);

            let mAll = new Map(
                [...m1.entries(), ...m2.entries()]);
            //mAll is { '1': 'one', '2': 'two', '3': 'three' }
            console.log("mAll is", mAll);`,
    },
    {
      name: 'Dictionaries > Filtering of elements',
      code: `//using objects
      let dic = {
          1: "one",  2: "two", 3: "three"
      };

      let oddDic = Object.keys(dic)
          .reduce(function (result, key) {
          if (key % 2 === 1)
              result[key] = dic[key];
          return result;
      }, {});
      //oddDic is [[1, "one"], [3, "three"]]
      console.log("oddDic is", oddDic);

      //using maps (ES6 feature)
      let map = new Map([
          [ 1, "one" ], [ 2, "two" ], [ 3, "three" ]])

      let oddMap = Array.from(map.keys())
          .reduce(function (result, key) {
              if (key % 2 === 1)
                  result.set(key, String(map.get(key)))
              return result
      }, new Map())
      //oddMap is  [[1, "one"], [3, "three"]]

      console.log("oddMap is", oddMap)`,
    },
    {
      name: 'Dictionaries > Get value by key',
      code: `//using objects
      let d = {
          1: "one", 2: "two"
      };

      var one = d[1];
      //one is "one"

      let three = d[3];
      //three is undefined

      console.log(one);
      console.log(three);

      //using maps (ES6 feature)
      let m = new Map([
          [ 3, "three" ],
          [ 4, "four" ]
      ])

      let four = m.get(4)
      //four is "four"

      let five = m.get(5)
      //five is undefined

      console.log(four);
      console.log(five);`,
    },
    {
      name: 'Dictionaries > Getting keys by value',
      code: `let value = "A";

      //using objects
      let dic = {
          1: "A", 2: "B", 3: "A"
      };

      let keys1 = Object.keys(dic)
          .filter(key => dic[key] === value);
      //keys1 is [1, 3]
      console.log(keys1);

      //using maps (ES6 feature)
      let map = new Map([
          [ 1, "A" ], [ 2, "B" ], [ 3, "A" ]]);

      let keys2 = Array.from(map.keys())
          .filter(key => map.get(key) === value);
      //keys2 is [1, 3]
      console.log(keys2);`,
    },
    {
      name: 'Dictionaries > Getting of a list of keys',
      code: `//* using objects *
      let dic = {
          1: "one", 2: "two"
      };

      let keys1 = Object.keys(dic);
      //keys is [1, 2]
      console.log("keys1 is", keys1);

      //* using maps (ES6 feature) *
      let map = new Map([
          [ 1, "one" ],
          [ 2, "two" ]]);

      let keys2 = Array.from(map.keys());
      //keys is [ 1, 2 ]
      console.log("keys2 is", keys2); `,
    },
    {
      name: 'Dictionaries > Getting of a list of values',
      code: `//* using objects *
      let dic = {
          1: "one", 2: "two"
      };

      let values1 = Object.keys(dic)
          .map(function (key) {
          return dic[key];
      });
      //values1 is ["one", "two"]
      console.log("values1 is", values1);

      //* using maps (ES6 feature) *
      let map = new Map([
          [ 1, "one" ],
          [ 2, "two" ]])

      let values2 = Array.from(map.values())
      //values2 is [ 'one', 'two' ]
      console.log("values2 is", values2) `,
    },
    {
      name: 'Dictionaries > Grouping collection',
      code: `let numbers = [ 1, 2, 3, 4, 5 ];
      let map = numbers.reduce(function (result, i) {
          let key = i % 2 === 0 ? "even" : "odd";
          let value = result.get(key) ?? [];
          value.push(i);
          result.set(key, value);
          return result;
      }, new Map());
      //map is { 'odd' => [ 1, 3, 5 ], 'even' => [ 2, 4 ] }

      console.log("map is", map);`,
    },
    {
      name: 'Dictionaries > Indexed Object',
      code: `let numbers = {
        [3]: "three", [1]: "one", [2]: "two"
    };

    let str = "";
    for (const key in numbers) {
        str += (str === "" ? "" : ", ") +
            key +' '+ numbers[key];
    }
    //str is { 1, "one" }, { 2, "two" }, { 3, "three" }
    console.log("str is", str);`,
    },
    {
      name: 'Dictionaries > Iterating over a dictionary',
      code: `//* using objects *
      let dic = {
          1: "one", 2: "two"
      };

      let str = "";
      Object.keys(dic).forEach(function (key) {
          let value = dic[key];
          str += (str === "" ? "" : ", ") +
              key + ' '+ value
      });
      //str is "{ 1, "one" }, { 2, "two" }"
      console.log(str);

      str = "";
      for (let key in dic) {
          if (dic.hasOwnProperty(key)) {
              let value = dic[key];
              str += (str === "" ? "" : ", ") +
                 key + ' ' + value
          }
      }
      //str is "{ 1, "one" }, { 2, "two" }"
      console.log(str);

      //ECMAScript 6 feature
      //Support: TC39: Stage 4, Node: 12+, Chrome: 73+, Firefox: 63+
      str = "";
      for (let pair of Object.entries(dic)) {
          str += (str === "" ? "" : ", ") +
             pair[0] + ' ' + pair[1]
      }
      //str is "{ 1, "one" }, { 2, "two" }"
      console.log(str);

      //* using maps (ES6 feature) *
      let map = new Map([
          [ 1, "one" ],
          [ 2, "two" ]]);

      str = "";
      map.forEach((value, key) => {
          str += (str === "" ? "" : ", ") +
              key+' '+ value;
      });
      //str is "{ 1, "one" }, { 2, "two" }"
      console.log(str);`,
    },
    {
      name: 'Dictionaries > Map class',
      code: `let map = new Map([
        [ 3, "three" ],
        [ 1, "one" ],
        [ 2, "two" ]])

    let str = ""
    map.forEach((value, key) => {
        str += (str === "" ? "" : ", ") +
           key + ' ' + value;
    })
    //str is "{3, "three"}, {1, "one"}, {2, "two"}"
    console.log(str);`,
    },
    {
      name: 'Dictionaries > Sort dictionary by keys',
      code: `//using objects
      let dic = {
          3: "B", 1: "C", 2: "A"
      };

      let sortedItems = Object.keys(dic)
          .map(function (key) {
          return [key, dic[key]];
      });

      // Sort the array based on the first element
      sortedItems.sort(function(a, b) {
          return a[0] - b[0];
      });
      //sortedItems is [[1, 'C'], [2, 'A'], [3, 'B']]

      console.log("sortedItems is", sortedItems);

      //using maps (ES6 feature)
      let map = new Map([
          [ 3, "B" ], [ 1, "C" ], [ 2, "A" ]])

      let sortedMap = new Map([...map.entries()]
          .sort((a, b) => a[0] - b[0]));
      //sortedMap is [[1, 'C'], [2, 'A'], [3, 'B']]

      console.log("sortedMap is", sortedMap); `,
    },
    {
      name: 'Dictionaries > Sort dictionary by values',
      code: `//using objects
      let dic = {
          3: "B", 1: "C", 2: "A"
      };

      let sortedItems = Object.keys(dic)
          .map(function (key) {
          return [key, dic[key]];
      });

      // Sort the array based on the second element
      sortedItems.sort(function(a, b) {
          return a[1] > b[1] ? 1 : -1;
      });
      //sortedItems is [[2, "A"], [3, "B"], [1, "C"]]

      console.log("sortedItems is", sortedItems);

      //using maps (ES6 feature)
      let map = new Map([
          [ 3, "B" ], [ 1, "C" ], [ 2, "A" ]])

      let sortedMap = new Map([...map.entries()]
          .sort((a, b) => a[1] > b[1] ? 1 : -1));
      //sortedMap is  [[2, "A"], [3, "B"], [1, "C"]]

      console.log("sortedMap is", sortedMap); `,
    },
    {
      name: 'Iterators > Reverse generator',
      code: `function* reverse(data) {
        let current = data.length;
        while (current >= 1) {
            current -= 1;
            yield data[current];
        }
    }

    for (let c of reverse("string")) {
        console.log(c);
    }
    //printed g, n, i, r, t, s

    for (let i of reverse([1, 2, 3])) {
        console.log(i);
    }
    //printed 3, 2, 1`,
    },
    {
      name: 'Iterators > Simple generator',
      code: `function* counter(low, high, step) {
        let current = low;
        while (current <= high) {
            yield current;
            current += step;
        }
    }

    for (let c of counter(3, 9, 2)) {
        console.log(c);
    }
    //printed 3, 5, 7, 9`,
    },
    {
      name: 'Queue<T> (FIFO)',
      code: `let intQueue = [];
      intQueue.push(1);
      intQueue.push(3);
      intQueue.push(5);

      let top = intQueue[0];
      //top is 1
      let first = intQueue.shift();
      //first is 1
      let second = intQueue.shift();
      //second is 3
      let third = intQueue.shift();
      //third is 5

      console.log("top =", top);
      console.log("first =", first);
      console.log("second =", second);
      console.log("third =", third);`,
    },
    {
      name: 'Sets > Adding and removing of elements',
      code: `//ECMAScript 6 feature
      let set = new Set(["A", "B", "C"]);
      set.add("D");
      //set is ["A", "B", "C", "D"]
      console.log(Array.from(set).join(' '));

      set.delete("A");
      //set is ["B", "C", "D"]
      console.log(Array.from(set).join(' '));

      set.clear();
      //set is []`,
    },
    {
      name: 'Sets > Converting of a set',
      code: `//ECMAScript 6 feature
      let set = new Set([1, 2, 3]);
      let set3 = new Set([...set]
          .map(i => i * 3));
      //set3 is [6, 9, 3]

      console.log([...set3].join("; "));`,
    },
    {
      name: 'Sets > Filtering of elements',
      code: `let set = new Set([1, 2, 3]);
      //ECMAScript 6 feature
      let oddArr = [...set]
          .filter(i => i % 2 === 1);
      //oddArr is [1, 3] (array)

      console.log(oddArr.join("; "));`,
    },
    {
      name: 'Sets > Iterating over a set',
      code: `//ECMAScript 6 feature
      let chars = new Set(["A", "B", "C", "D"]);

      let str = "";
      for (let c of chars) {
          str += (str == "" ? "" : "; ") + c;
      }
      //str is "A; B; C; D"

      console.log(str);`,
    },
    {
      name: 'Sets > Search for a element',
      code: `//ECMAScript 6 feature
      let chars = new Set(["A", "B", "C", "D"]);

      let containA = chars.has('A');
      //containA is true

      let containE = chars.has('E');
      //containE is false

      let chars2 = new Set(["A", "B"]);
      let containAll = [...chars2]
          .filter(x => !chars.has(x))
          .length === 0;
      //containAll is true

      console.log(containA);
      console.log(containE);
      console.log(containAll);`,
    },
    {
      name: 'Sets > Sets comparison',
      code: `//ECMAScript 6 feature
      let first = new Set([1, 2]);
      let second = new Set([1, 2]);
      let third = new Set([1, 2, 3]);

      //first method
      let isEqual1 =
          (first.size === second.size) &&
          ([...first].filter(x => !second.has(x)).length === 0);
      //isEqual1 is true

      //second method
      let isEqual2 = equalSet(first, second);
      //isEqual2 is true

      let isIntersects = [...first]
          .filter(x => third.has(x))
          .length > 0;
      //isIntersects is true

      let isSubset = [...third]
          .filter(x => !first.has(x))
          .length === 0;
      //isSubset is false

      console.log(isEqual1);
      console.log(isEqual2);
      console.log(isIntersects);
      console.log(isSubset);

      function equalSet(set1, set2) {
          if (set1.size !== set2.size)
              return false;
          for (let item of set1)
              if (!set2.has(item)) return false;
          return true;
      }`,
    },
    {
      name: 'Sets > Sets initialization',
      code: `//ECMAScript 6 feature
      let intSet = new Set([1, 2, 3]);
      let strSet = new Set(["one", "two", "three"]);

      console.log(intSet.has(3));
      console.log(strSet.has("two"));`,
    },
    {
      name: 'Sets > Sets operations',
      code: `//ECMAScript 6 feature
      let first = new Set([1, 2, 3]);
      let second = new Set([3, 4, 5]);

      //union
      let third = new Set([...first]
          .concat([...second]));
      //third  is [ 1, 2, 3, 4, 5 ]
      console.log([...third].join("; "));

      //difference
      third = new Set([...first]
          .filter(x => !second.has(x)));
      //third is [ 1, 2 ]
      console.log([...third].join("; "));

      //intersection
      third = new Set([...first]
          .filter(x => second.has(x)));
      //third is [ 3 ]
      console.log([...third].join("; "));

      //symmetric difference
      third = new Set([...first]
          .filter(x => !second.has(x))
          .concat([...second]
          .filter(x => !first.has(x))));
      //third is [ 1, 2, 4, 5 ]
      console.log([...third].join("; "));`,
    },
    {
      name: 'Sets > Sorting of elements',
      code: `let chars = new Set(["C", "B", "D", "A"]);
      let str = [...chars].join("; ");
      //str is "C; B; D; A"

      let sortedChars =
          new Set([...chars].sort());
      let str1 = [...sortedChars].join("; ");
      //str1 is "A; B; C; D"

      console.log(str);
      console.log(str1);`,
    },
    {
      name: 'Stack<T> (LIFO) ',
      code: `let intStack = [];
      intStack.push(1);
      intStack.push(3);
      intStack.push(5);

      let top = intStack.slice(-1)[0];
      //top is 5
      let first = intStack.pop();
      //first is 5
      let second = intStack.pop();
      //second is 3
      let third = intStack.pop();
      //third is 1

      console.log("top =", top);
      console.log("first =", first);
      console.log("second =", second);
      console.log("third =", third);`,
    },
    {
      name: 'Classes > Check for reference equality',
      code: `class Car {}

      let car1 = new Car();
      let car2 = new Car();
      let car3 = car1;

      let equal1 = car1 === car2;
      //equal1 is false

      let equal2 = car1 === car3;
      //equal2 is true

      console.log(equal1);
      console.log(equal2);`,
    },
    {
      name: 'Classes > Constants',
      code: `//ECMAScript 6 feature
      class Calendar {
          get months() {
              return 12;
          }
      }

      let calendar = new Calendar();
      let months = calendar.months;
      //months is 12

      console.log(months);`,
    },
    {
      name: 'Clases > Constructors > Call of the own constructor',
      code: `//ECMAScript 6 feature
      class Man {
          //JavaScript doesn't have function overloading,
          //including for methods or constructors.
          constructor(name, country) {
              this.name = name;
              this.country = country;
          }
      }

      let man1 = new Man("Vladimir", "Russia");
      //man1.name is "Vladimir"
      //man1.country is "Russia"
      let man2 = new Man("Anna");
      //man2.name is "Anna"
      //man2.country is undefined

      console.log(man1.name);
      console.log(man1.country);
      console.log(man2.name);
      console.log(man2.country);`,
    },
    {
      name: 'Clases > Constructors > Call of the parent constructor',
      code: `class Man {
        constructor(name) {
            this.name = name;
        }
    }

    class Employee extends Man {
        constructor(name, position) {
            super(name);
            this.position = position;
        }
    }

    let employee = new Employee("Max", "booker");

    console.log("name is", employee.name);
    console.log("position is",
        employee.position);

    // * previous version *
    function Man1(name) {
        this.name = name;
    }

    function Employee1(name, position) {
        Man1.apply(this, arguments);
        this.position = position;
    }`,
    },
    {
      name: 'Clases > Constructors > Default constructor',
      code: `//ECMAScript 6 feature
      class Man {}

      let man = new Man();

      console.log(man.constructor.name);

      // * previous version *
      function Man1() { }`,
    },
    {
      name: 'Clases > Constructors > Optional parameter values',
      code: `//ECMAScript 6 feature
      class Man
       {
          constructor(name = "unknown", country = "unknown") {
              this.name = name;
              this.country = country;
          }
      }

      let man1 = new Man();
      //man1.name is "unknown"
      //man1.country is "unknown"

      let man2 = new Man("Vladimir");
      //man2.name is "Vladimir"
      //man2.country is "unknown"

      let man3 = new Man("Vladimir", "Brazil");
      //man3.name is "Vladimir"
      //man3.country is "Brazil"

      console.log("name1 is", man1.name);
      console.log("country1 is", man1.country);

      console.log("name2 is", man2.name);
      console.log("country2 is", man2.country);

      console.log("name2 is", man3.name);
      console.log("country3 is", man3.country);`,
    },
    {
      name: 'Clases > Constructors > Replacement of the parent constructor',
      code: `//ECMAScript 6 feature
      class Man {
          constructor(name) {
              this.name = name;
          }
      }

      class Employee extends Man {
          constructor(name) {
              super(name);
              this.position = "unknown";
          }
      }

      let employee = new Employee("Max");

      console.log("name is", employee.name);
      console.log("position is",
          employee.position);`,
    },
    {
      name: 'Clases > Constructors > With parameters',
      code: `//ECMAScript 6 feature
      class Man {
          constructor(name) {
              this.name = name;
          }
      }

      let man = new Man("Alex");
      //man.name is "Alex"

      console.log("name is", man.name);

      // * previous version *
      function Man1(name) {
          this.name = name;
      }`,
    },
    {
      name: 'Clases > Constructors > Without any parameters',
      code: `//ECMAScript 6 feature
      class Man {
          constructor() {
              this.name = "unknown";
          }
      }

      let man = new Man();
      //man.name is "unknown"

      console.log("name is", man.name);

      // * previous version *
      function Man1() {
          this.name = "unknown";
      }`,
    },
    {
      name: 'Classes > Create a copy of the object',
      code: `class Shape {
        constructor(lineCount, name) {
            this.lineCount = lineCount;
            this.name = name;
        }

        toString() {
            return (this.name + ' lineCount is '+ this.lineCount)
        }
    }

    let square = new Shape(4, "Square")
    // Copy without methods
    let clone1 = { ...square }
    // Clone sees changes to original
    let clone2 = Object.create(square)

    square.lineCount = 5;
    square.name = "Red sqare"

    console.log(square.toString())
    console.log(clone1.toString())
    console.log("clone1.lineCount is",
        clone1.lineCount)
    console.log(clone2.toString())`,
    },
    {
      name: 'Classes > Definition and initialization',
      code: `//Definition
      function SomeClass() {}

      //Initialization
      var someClass = new SomeClass();

      //ECMAScript 6 feature
      //Definition
      class SomeClass1 {}

      //Initialization
      let someClass1 = new SomeClass();

      console.log(someClass);

      console.log(someClass1);`,
    },
    {
      name: 'Classes > Events',
      code: `//ECMAScript 6 feature
      class Game {
          constructor(name) {
              this.name = name;
              this._listeners = [];
          }

          addListener(listener) {
              this._listeners.push(listener);
          }

          start() {
              for (let listener of this._listeners) {
                      listener.gameStarted(this.name);
              }
          }
      }

      class Statistic {
          constructor() {
              this.startsCount = 0;
              this.lastGame = "";
          }

          gameStarted(name) {
              this.startsCount++;
              this.lastGame = name;
          }
      }

      let statistic = new Statistic();
      let heroes = new Game("Heroes");
      let doom = new Game("Doom");

      //subscribe to events
      heroes.addListener(statistic);
      doom.addListener(statistic);

      doom.start();
      heroes.start();
      //statistic.lastGame is "Heroes"
      //statistic.startsCount is 2

      console.log("lastGame is",
          statistic.lastGame);
      console.log("startsCount is",
          statistic.startsCount);

      // * previous version *
      function OldGame(name) {
          this.name = name;
          var listeners = [];

          this.addListener = function(listener) {
              listeners.push(listener);
          }

          this.start = function() {
              for (var i in listeners) {
                  if (listeners.hasOwnProperty(i)) {
                      listeners[i].gameStarted(this.name);
                  }
              }
          }
      }

      function OldStatistic() {
          this.startsCount = 0;
          this.lastGame = "";

          this.gameStarted = function (name) {
              this.startsCount++;
              this.lastGame = name;
          }
      }`,
    },
    {
      name: 'Classes > Fields',
      code: `function Game() {
        // public field
        this.name = "unknown";
        this.year = 2000;

        // private field
        var developer = "unknown";
    }

    //ECMAScript 6 feature
    class Game1 {
        constructor() {
            // public field
            this.name = "unknown";
            this.year = 2000;
        }
    }

    //Support: TC39: Stage 3, Node: 12+, Chrome: 74+
    class Game2 {
        // public field
        name = "unknown";
        year = 2000;

        // private field
        #developer = "unknown";

        showDeveloper() {
            console.log(this.#developer);
        }
    }
    `,
    },
    {
      name: 'Classes > Inheritance > Abstract classes',
      code: `//In JavaScript there are no abstract classes

      //ECMAScript 6 feature
      class Shape {
          constructor() {
              this.color = "unknown";
              if (this.constructor === Shape) {
                  throw new Error("Can't instantiate abstract class!");
              }
          }

          fill(color) {
              throw new Error("Abstract method!");
          }

          draw() {
              console.log(this.color)
          }
      }

      class Square extends Shape {
          fill(color) {
              this.color = color;
          }
      }

      //let shape = new Shape(); // <-error

      let square = new Square();
      square.fill("Red");
      square.draw();

      // * previous version *
      function OldShape() {
          if (this.constructor === OldShape) {
              throw new Error("Can't instantiate abstract class!");
          }
      }

      OldShape.prototype.fill = function(color) {
          throw new Error("Abstract method!");
      }

      OldShape.prototype.draw = function() {
          //Draw implementation
      }

      function OldSquare() {
          OldShape.apply(this, arguments);
      }

      OldSquare.prototype = Object.create(OldShape.prototype);
      OldSquare.prototype.constructor = OldSquare;

      OldSquare.prototype.fill = function(color) {
          //Fill implementation
      }

      let oldSquare = new OldSquare();
      oldSquare.fill("Red");
      oldSquare.draw();`,
    },
    {
      name: 'Classes > Inheritance > Base class',
      code: `//ECMAScript 6 feature
      class Shape {
          constructor(lineCount) {
              this.lineCount = lineCount;
          }
      }

      class Square extends Shape {
          constructor(sideLength) {
              super(4);
              this.sideLength = sideLength;
          }
      }

      let square = new Square(5);
      console.log("lineCount is",
          square.lineCount);
      console.log("sideLength is",
          square.sideLength);

      // * previous version *
      function OldShape(lineCount) {
          this.lineCount = lineCount;
      }

      function OldSquare(sideLength) {
          OldShape.apply(this, [4]);
          this.sideLength = sideLength;
      }

      OldSquare.prototype =
          Object.create(OldShape.prototype);
          OldSquare.prototype.constructor = OldSquare;

      let oldSquare = new OldSquare(5);
      console.log("oldSquare:");
      console.log(oldSquare.lineCount);
      console.log(oldSquare.sideLength);`,
    },
    {
      name: 'Classes > Inheritance > Compatibility check (is)',
      code: `//ECMAScript 6 feature
      class Shape {}

      class Square extends Shape {}

      class RedSquare extends Square { }

      let square = new Square();
      let isShape = square instanceof Shape;
      //isShape is true
      let isRedSquare = square instanceof RedSquare;
      //isRedSquare is False

      console.log("square:");
      console.log(isShape);
      console.log(isRedSquare);

      // * previous version *
      function OldShape() {}

      function OldSquare() {}

      OldSquare.prototype =
          Object.create(OldShape.prototype);
          OldSquare.prototype.constructor = OldSquare;

      function OldRedSquare() { }

      var oldSquare = new OldSquare();
      var isOldShape = oldSquare instanceof OldShape;
      //isShape is true
      var isOldRedSquare = oldSquare instanceof OldRedSquare;
      //isRedSquare is False

      console.log("oldSquare:");
      console.log(isOldShape);
      console.log(isOldRedSquare);`,
    },
    {
      name: 'Classes > Inheritance > Interface inheritance',
      code: `class Shape {
        fill() {
            console.log("Fill implementation")
        }
    }

    class Square extends Shape {
        fill() {
            console.log("New fill implementation")
        }
    }

    let square = new Square()
    square.fill()
    //Use Square fill implementation`,
    },
    {
      name: 'Classes > Inheritance > Method override',
      code: `//ECMAScript 6 feature
      class Shape {
          getArea() {
              return 0;
          }
      }

      class Square extends Shape {
          constructor(sideLength) {
              super();
              this.sideLength = sideLength;
          }

          getArea() {
              if (this.sideLength > 0) {
                  return this.sideLength * this.sideLength;
              }
              //call base class method
              return super.getArea();
          }
      }

      let square = new Square(5);
      let area = square.getArea();
      //area is 25
      console.log(area);

      // * previous version *
      function OldShape() {
          this.getArea = function () {
              return 0;
          }
      }

      function OldSquare(sideLength) {
          OldShape.apply(this, arguments);
          this.sideLength = sideLength;

          this.getArea = function () {
              return this.sideLength * this.sideLength;
          }
      }

      OldSquare.prototype = Object.create(OldShape.prototype);
      OldSquare.prototype.constructor = OldSquare;

      let oldSquare = new OldSquare(5);
      let oldArea = oldSquare.getArea();
      //oldArea is 25
      console.log(oldArea);`,
    },
    {
      name: 'Classes > Inheritance > Private class members',
      code: `function Test() {
        var privateVar;

        // Only visible inside Test()
        var privateFunc = function ()
        {
            privateVar = "I can set this here!";
        }

        // publicFunc is visible to all
        this.publicFunc = function ()
        {
            privateFunc();
        }
    }

    var test = new Test();
    test.privateFunc(); //<-Error
    test.publicFunc();`,
    },
    {
      name: 'Classes > Inheritance > Property override',
      code: `//ECMAScript 6 feature
      class Shape {
          get lineCount () {
              return 0;
          }
      }

      class Square extends Shape {
          get lineCount () {
              return 4;
          }
      }

      let square = new Square();
      //square.lineCount is 4
      console.log("square.lineCount is",
          square.lineCount);

      // * previous version *
      function OldShape() { }

      Object.defineProperty(OldShape.prototype, "lineCount", {
              get: function () {
                  return 0;
              }
      });

      function OldSquare() {
          OldShape.apply(this, arguments);
      }

      OldSquare.prototype = Object.create(OldShape.prototype);
      OldSquare.prototype.constructor = OldSquare;

      Object.defineProperty(OldSquare.prototype, "lineCount", {
              get: function () {
                  return 4;
              }
      });

      let oldSquare = new OldSquare();
      //oldSquare.lineCount is 4
      console.log(oldSquare.lineCount);`,
    },
    {
      name: 'Classes > Inheritance > Sealed class members',
      code: `//ECMAScript 6 feature
      class Square {
          constructor(sideLength) {
              this.sideLength = sideLength;
          }

          getArea() {
              return this.sideLength * this.sideLength;
          }
      }

      Object.freeze(Square.prototype);

      Square.prototype.getArea = function () {
          return this.sideLength * this.sideLength + 1;
      }

      let square = new Square(5);
      let arya = square.getArea();
      //arya is 25

      console.log(arya);`,
    },
    {
      name: 'Classes > Methods > Array of parameters',
      code: `//ECMAScript 6 feature
      class Calc {
          getAvg(...values) {
              if (values.length === 0) {
                  return 0;
              }

              let sum = 0;
              for (let i in values) {
                  if (values.hasOwnProperty(i)) {
                      sum += values[i];
                  }
              }
              return sum/values.length;
          }
      }

      let calc = new Calc();
      let avg = calc.getAvg(1, 2, 3, 4);
      //avg is 2.5

      console.log(avg);`,
    },
    {
      name: 'Classes > Methods > Class methods',
      code: `//ECMAScript 6 feature
      class Calc {
          static getMin(...values) {
              if (values.length === 0)
                  return 0;
              let min = values[0];
              for (let i in values) {
                  if (values[i] < min)
                      min = values[i];
              }
              return min;
          }
      }

      let min = Calc.getMin(3, 2, 5, 1, 4);
      //min is 1
      console.log(min);

      // * previous version *
      function OldCalc() { }

      OldCalc.getMin = function (values) {
          if (values.length === 0)
              return 0;
          var min = values[0];
          for (var i in values) {
              if (values.hasOwnProperty(i)) {
                  if (values[i] < min)
                  min = values[i];
              }
          }
          return min;
      }

      var oldMin = OldCalc.getMin([3, 2, 5, 1, 4]);
      //oldMin is 1
      console.log(oldMin);`,
    },
    {
      name: 'Classes > Methods > In/Out parameters',
      code: `// in JS you can't change param reference
      class Swap {
          strings(s1, s2) {
              let tmp = s1[0];
              s1[0] = s2[0];
              s2[0] = tmp;
          }
      }

      let s1 = ["A"];
      let s2 = ["B"];
      let swap = new Swap();
      swap.strings(s1, s2);
      //s1[0] is "B", s2[0] is "A"
      console.log('s1[0] is '+s1[0], 's2[0] is '+s2[0])`,
    },
    {
      name: 'Classes > Methods > Multiple return values',
      code: `class ArrayAssistant {
        constructor(data) {
            this.data = data;
        }

        getFirstLast() {
            let first = -1;
            let last = -1;
            let len = this.data.length
            if (len > 0) {
                first = this.data[0];
                last = this.data[len - 1];
            }
            return {first: first, last: last};
        }
    }

    let ar = [2, 3, 5];
    let assistant = new ArrayAssistant(ar);
    let result = assistant.getFirstLast();
    //result.first is 2
    //result.last is 5

    console.log("first is", result.first);
    console.log("last is", result.last);`,
    },
    {
      name: 'Classes > Methods > Oprional parameter values',
      code: `//ECMAScript 6 feature
      class Greeting {
          static sayGoodbye(message = "Goodbye!") {
              console.log(message);
          }

          static sayHello(message = "Hello!") {
              console.log(message);
          }
      }

      Greeting.sayGoodbye();
      //prints "Goodbye!"

      Greeting.sayHello("Hi");
      //prints "Hi"`,
    },
    {
      name: 'Classes > Methods > Variable parameters',
      code: `class Log {
        constructor() {
            this.lastData  = "";
        }

        print5(data) {
            this.lastData = data;
            if (data.length > 5) {
                data = data.substring(0, 5);
            }
            console.log(data);
        }
    }

    let log = new Log();
    log.print5("1234567");
    //printed "12345"
    console.log("log.lastData = " + log.lastData);`,
    },
    {
      name: 'Classes > Methods > With return value',
      code: `class Calc {
        constructor() {
            this.lastSum  = -1;
        }

        getSum(n1, n2) {
            this.lastSum = n1 + n2;
            return this.lastSum;
        }
    }

    let calc = new Calc();
    let sum1 = calc.getSum(5, 3);
    //sum1 is 8

    let sum2 = calc.getSum(2, 3);
    //sum2 is 8

    console.log("sum1 = " + sum1);
    console.log("sum2 = " + sum2);
    console.log("calc.lastSum = " + calc.lastSum);`,
    },
    {
      name: 'Classes > Methods > Without any parameters',
      code: `//ECMAScript 6 feature
      class Greeting {
          sayGoodbye() {
              console.log("Goodbye!");
          }
      }

      let greeting = new Greeting();
      greeting.sayGoodbye();

      // * previous version *
      function OldGreeting() { }

      OldGreeting.prototype = {
          sayGoodbye: function () {
              console.log("Goodbye!");
          }
      }

      let oldGreeting = new OldGreeting();
      oldGreeting.sayGoodbye();`,
    },
    {
      name: 'Classes > Methods > Without any return value',
      code: `class Counter {
        constructor() {
            this.count = 0;
        }

        incBy(value) {
            this.count += value;
        }

        incByAmount(value, amount) {
            this.count += value * amount;
        }
    }

    let counter = new Counter();
    counter.incBy(1);
    //counter.count is 1
    console.log("count is", counter.count);

    counter.incByAmount(2, 5);
    //counter.count is 11
    console.log("count is", counter.count);`,
    },
    {
      name: 'Classes > Nested classes',
      code : `function SomeClass() {

        this.create = function () {
            return new NestedClass();
        }

        function NestedClass() { }
    }

    let someClass = new SomeClass();
    let nested = someClass.create();`
    },
    {
      name:'Classes > Properties > Computed properties',
      code: ``
    },
    {
      name:'Classes > Properties > Lazy properties',
      code: ``
    },
    {
      name:'Classes > Properties > Read-Only properties',
      code: ``
    },
    {
      name:'Classes > Properties > Stored properties',
      code: ``
    },
    {
      name:'Classes > Properties > Type properties',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },
    {
      name:'',
      code: ``
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
