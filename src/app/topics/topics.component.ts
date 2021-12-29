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
      code: `function SomeClass() {

        this.create = function () {
            return new NestedClass();
        }

        function NestedClass() { }
    }

    let someClass = new SomeClass();
    let nested = someClass.create();`,
    },
    {
      name: 'Classes > Properties > Computed properties',
      code: `//ECMAScript 6 feature
      class Square {
          constructor() {
              this.side = 0;
          }

          get area() {
              return this.side * this.side;
          }

          set area(value) {
              this.side = Math.sqrt(value);
          }
      }

      let square = new Square();
      square.side = 2;
      //square.area is 4
      console.log("square.area is",
          square.area);

      square.area = 9;
      //square.side is 3
      console.log("square.side is",
          square.side);


      // * previous version *
      function OldSquare() {
          this.side = 0;
      }

      Object.defineProperty(OldSquare.prototype, "area", {
              get: function () {
                  return this.side * this.side;
              },
              set: function (value) {
                  this.side = Math.sqrt(value);
              }
      });

      var oldSquare = new OldSquare();
      oldSquare.side = 2;
      //oldSquare.area is 4
      oldSquare.area = 16;
      //oldSquare.side is 4
      console.log(oldSquare.side + ", " + oldSquare.area);`,
    },
    {
      name: 'Classes > Properties > Lazy properties',
      code: `//ECMAScript 6 feature
      class FilmsList {
          constructor() {
              //some long operation
          }
      }

      class MediaPlayer {
          get filmsList() {
              return new FilmsList();
          }
      }

      let player = new MediaPlayer();
      //filmsList field not yet been created
      //It will be created after call filmList property
      let filmList = player.filmsList;
      console.log(filmList);

      // * previous version *
      function OldFilmsList() {
          //some long operation
      }

      function OldMediaPlayer() { }

      Object.defineProperty(OldMediaPlayer.prototype, "filmList", {
              get: function () {
                  return new OldFilmsList();
              }
      });

      var oldPlayer = new OldMediaPlayer();
      //filmsList field not yet been created
      //It will be created after call filmList property
      var oldFilmList = oldPlayer.filmList;
      console.log(oldFilmList);`,
    },
    {
      name: 'Classes > Properties > Read-Only properties > Computed',
      code: `//ECMAScript 6 feature
      class Сircle {
          constructor() {
              this.radius = 0;
          }

          get area() {
              return Math.PI * Math.pow(this.radius, 2);
          }
      }

      let circle = new Сircle();
      circle.radius = 2;
      //circle.area is 12.56
      console.log(circle.area);

      // * previous version *
      function OldСircle() {
          this.radius = 0;
      }

      Object.defineProperty(OldСircle.prototype, "area", {
              get: function () {
                  return Math.PI * Math.pow(this.radius, 2);
              }
      });

      let oldCircle = new OldСircle();
      oldCircle.radius = 3;
      //oldCircle.area is 28.27
      console.log(oldCircle.area);`,
    },
    {
      name: 'Classes > Properties > Read-Only properties > Stored',
      code: `//ECMAScript 6 feature
      class FilmList {
          get count() {
              return 10;
          }
      }

      let filmList = new FilmList();
      let count = filmList.count;
      //count is 10

      filmList.count = 5;
      //filmList.count is 10

      console.log(count);
      console.log(filmList.count);


      // * previous version *
      function OldFilmList() { }

      Object.defineProperty(OldFilmList.prototype, "count", {
              value: 15,
              writable: false

      });

      let oldFilmList = new OldFilmList();
      let oldCount = oldFilmList.count;
      //oldCount is 15

      oldFilmList.count = 5;
      //oldFilmList.count is 15

      console.log(oldCount);
      console.log(oldFilmList.count);`,
    },
    {
      name: 'Classes > Properties > Stored properties',
      code: `//ECMAScript 6 feature
      class Point {
          constructor() {
              this.x = 0;
              this.y = 0;
          }
      }

      let point = new Point();
      //x and y is 0
      point.x = 3;
      point.y = 7;
      console.log(point.x + ", " + point.y);

      // * previous version *
      function OldPoint() {
          this.x = 0;
          this.y = 0;
      }

      var oldPoint = new OldPoint();
      //x and y is 0
      oldPoint.x = 2;
      oldPoint.y = 5;
      console.log(oldPoint.x + ", " + oldPoint.y);`,
    },
    {
      name: 'Classes > Properties > Type properties',
      code: `//ECMAScript 6 feature
      class Lesson {
          constructor() {
              if (Lesson.lessonsCount == undefined) {
                  Lesson.lessonsCount = 0;
              }
              Lesson.lessonsCount++;
          }
      }

      let lesson1 = new Lesson();
      //Lesson.LessonsCount is 1
      let lesson2 = new Lesson();
      //Lesson.LessonsCount is 2
      console.log("Lesson.lessonsCount is",
          Lesson.lessonsCount);

      // * previous version *
      function OldLesson() {
          if (OldLesson.lessonsCount == undefined) {
              OldLesson.lessonsCount = 0;
          }
          OldLesson.lessonsCount++;
      }

      let oldLesson1 = new OldLesson();
      //OldLesson.LessonsCount is 1
      let oldLesson2 = new OldLesson();
      //OldLesson.LessonsCount is 2
      console.log(OldLesson.lessonsCount);`,
    },
    {
      name: 'Classes > Type members',
      code: `//ECMAScript 6 feature
      class Settings {
          //type constant (readonly field)
          static get maxConnections() {
              return 3;
          }
      }

      let max = Settings.maxConnections;
      //max is 3
      console.log(max);

      // * previous version *
      function Config() {}

      //type fields
      Config.Host = "10.0.0.1";
      Config.Port = 0;

      //type method
      Config.getConnection = function() {
          return Config.Host + ":" + Config.Port;
      }

      Config.Port = 52;
      var connection = Config.getConnection();
      //connection is "10.0.0.1:52"
      console.log(connection);

      Config.Host = "10.0.0.3";
      connection = Config.getConnection();
      //connection is "10.0.0.3:52"
      console.log(connection)`,
    },
    {
      name: 'Conditional statements > if/else > Complex conditions',
      code: `let A = 3;
      let B = 5;
      let C = 7;
      if (C >= A && C >= B) {
          console.log("nothing is larger than C.");
      }
      if (!(A >= B || A >= C)) {
          console.log("A is the smallest");
      }`,
    },
    {
      name: 'Conditional statements > if/else > Is not valid example',
      code: `if latitude === 0 //Error: ( expected
      {
          location = "Equator";
      }`,
    },
    {
      name: 'Conditional statements > if/else > Ternary operator',
      code: `let n = -42;
      let classify = (n > 0) ?
          "positive" : "negative";
      //classify is "negative"

      console.log(classify);`,
    },
    {
      name: 'Conditional statements > if/else > Valid example',
      code: `let latitude = getLatitude();
      let location = "";

      if (latitude === 0) {
          location = "Equator";
      } else if (latitude === 90) {
          location = "north Pole";
      } else if (latitude === -90) {
          location = "south Pole";
      } else {
          location = "not at the Equator or Pole";
      }

      function getLatitude() {
          return Math.floor(
              (Math.random() * 180) + 1) -90;
      }

      console.log(latitude);
      console.log(location);`,
    },
    {
      name: 'Conditional statements > if/else > Valid example',
      code: `let latitude = getLatitude();
      let location = "";

      if (latitude === 0)
          location = "Equator";
      else if (latitude === 90)
          location = "north Pole";
      else if (latitude === -90)
          location = "south Pole";
      else
          location = "not at the Equator or Pole";

      function getLatitude() {
          return Math.floor(
              (Math.random() * 180) + 1) -90;
      }

      console.log(latitude);
      console.log(location)`,
    },
    {
      name: 'Conditional statements > switch/case > Different types of values',
      code: `let e = "3*3";
      switch (e) {
          case "3 + 3":
              console.log("result = 6");
              break;
          case "3 - 3":
              console.log("result = 0");
              break;
          case "3*3":
              console.log("result = 9");
              break;
          case "3/3":
              console.log("result = 1");
              break;
      }`,
    },
    {
      name: 'Conditional statements > switch/case > Simple conditions',
      code: `let str = "";
      let monitorInchSize = 24;
      switch (monitorInchSize) {
          case 15:
              str = "too small";
              break;
          case 16: case 17: case 18:
              str = "good for the past decade";
              break;
          case 19: case 20: case 21:
          case 22: case 23:
              str = "for office work";
              break;
          case 24: case 25: case 26:
          case 27:
              str = "great choice";
              break;
          default:
              str = "";
              break;
      }
      //str is "great choice"
      console.log(str);`,
    },
    {
      name: 'Conditional statements > switch/case > Without the operator "break" ',
      code: `let firstNumber = "1";
      let numberList = "";
      switch (firstNumber) {
          case "1":
              numberList = "1";
          case "2":
              numberList += "-2";
          case "3":
              numberList += "-3";
      }
      //numberList = "1-2-3"

      console.log(numberList);`,
    },
    {
      name: 'Intrerruption of a control flow > "break" statement ',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
      let str = "";
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > 10)
              break;
          str += (str === "" ? "" : "-") + numbers[i];
      }
      //str is "2-3-5-7"
      console.log(str);`,
    },
    {
      name: 'Intrerruption of a control flow > "continue" statement ',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
      let str = "";
      for (let i = 0; i < numbers.length; i++) {
          if (i % 2 === 1)
              continue;
          str += (str === "" ? "" : "-") + numbers[i];
      }
      //str is "2-5-11-17"
      console.log(str);`,
    },
    {
      name: 'Intrerruption of a control flow > with "return" value ',
      code: `function containNumber(numbers, number) {
        for (let i in numbers) {
            if (numbers.hasOwnProperty(i)) {
                if (numbers[i] === number) {
                    return true;
                }
            }
        }
        return false;
    }

    let numbers = [1, 2, 3];
    let isContain2 = containNumber(numbers, 2);
    //isContain2 is true

    let isContain4 = containNumber(numbers, 4);
    //isContain4 is false

    console.log(isContain2);
    console.log(isContain4);`,
    },
    {
      name: 'Intrerruption of a control flow > without any "return" value ',
      code: `function printSomeData(printAll) {
        printMainData();
        if (!printAll)
            return;
        printOtherData();
    }

    function printMainData() {
        console.log("printMainData");
    }

    function printOtherData() {
        console.log("printOtherData");
    }

    printSomeData(true);`,
    },
    {
      name: 'Intrerruption of a control flow > Labeled statement ',
      code: `let firstMatchValue = -1;
      let array1 = [1, 2, 3];
      let array2 = [2, 3, 4];

      firstLoop: for (let i in array1) {
          for (let n in array2) {
              if (array1[i] === array2[n]) {
                  firstMatchValue = array1[i];
                  break firstLoop;
              }
          }
      }
      //firstMatchValue is 2
      console.log(firstMatchValue);`,
    },
    {
      name: 'Loops > do-while loop',
      code: `let i = 7;
      let f7 = 1;

      do {
          f7 *= i;
          i--;
      } while (i > 1);
      //f7 is 5040

      console.log(f7);`,
    },
    {
      name: 'Loops > for loop',
      code: `let sum10 = 0;
      for (let i = 1; i <= 10; i++) {
          sum10 += i;
      }
      //sum10 is 55

      console.log(sum10);`,
    },
    {
      name: 'Loops > for-in loop',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
      let sum = 0;
      for (let i in numbers) {
          if (numbers.hasOwnProperty(i)) {
              sum += numbers[i];
          }
      }
      //sum is 77
      console.log(sum);`,
    },
    {
      name: 'Loops > for-of loop',
      code: `//ECMAScript 6 feature
      let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
      let sum = 0;
      for (let number of numbers) {
          sum += number;
      }
      //sum is 77
      console.log(sum);`,
    },
    {
      name: 'Loops > forEach loop',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17];
      let sum = 0;
      numbers.forEach((i) => {
          sum += i;
       });
      //sum is 58
      console.log(sum);

      let mult = 1;
      new Array(2, 3, 4, 5)
          .forEach(function(value) {
          mult = mult * value;
      });
      //mult is 120
      console.log(mult);`,
    },
    {
      name: 'Loops > while loop',
      code: `let i = 5;
      let f5 = 1;

      while (i > 1) {
          f5 *= i;
          i--;
      }
      //f5 is 120
      console.log(f5);`,
    },
    {
      name: 'Loops > endless loop',
      code: `for (; ;) {
        //statements
    }

    while (true) {
        //statements
    }

    do {
        //statements
    } while (true);`,
    },
    {
      name: 'Control flow > debugger statement',
      code: `function f(o) {
        //When the debugger is invoked, execution
        //is paused at the debugger statement.
        //It is like a breakpoint in the script source.
        if (o === undefined) debugger;
    }`,
    },
    {
      name: 'Control flow > with statement',
      code: `var rect = {
        point: {
            x: 3, y: 4
        },
        size: {
            width: 10,
            height: 12
        }
    };

    with (rect.point) {
        x += 1;
        y += 1;
    }
    //rect.point.x is 4
    //rect.point.y is 5

    console.log(rect.point.x);
    console.log(rect.point.y);`,
    },
    {
      name: 'Enumerations > Base member value',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 0,
          Fall: 1,
          Winter: 2,
          Spring: 3
      });

      var winter = Season.Winter;
      //winter is 2

      console.log(winter);`,
    },
    {
      name: 'Enumerations > Base type',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 0,
          Fall: 1,
          Winter: 2,
          Spring: 3
      });

      Status = Object.freeze({
          Busy: "Busy",
          Available: "Available"
      });

      Switch = Object.freeze({
          On: true,
          Off: false
      });

      let winter = Season.Winter;
      //winter is 2

      let available = Status.Available;
      //available is "Available"

      let on = Switch.On;
      //on is true

      console.log(winter);
      console.log(available);
      console.log(on);`,
    },
    {
      name: 'Enumerations > Conversion from a string',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 1,
          Fall: 2,
          Winter: 3,
          Spring: 4
      });

      var summer = Season["Summer"];
      //summer is Season.Summer (1)

      console.log(summer);`,
    },
    {
      name: 'Enumerations > Converting to a string',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 1,
          Fall: 2,
          Winter: 3,
          Spring: 4
      });

      let summer = Season.Summer;
      let strValue = "";
      for (var i in Season) {
          if (Season[i] === summer) {
              strValue = i;
              break;
          }
      }
      //strValue is "Summer"

      console.log(strValue);`,
    },
    {
      name: 'Enumerations > Definition and initialization',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 1,
          Fall: 2,
          Winter: 3,
          Spring: 4
      });

      let summer = Season.Summer;
      let winter = Season.Winter;

      Season.Summer = 5;

      console.log(summer);
      console.log(winter);`,
    },
    {
      name: 'Enumerations > Enums comparasion',
      code: `//In Javascript there are no enum type
      Size = Object.freeze({
          xs: 1, s: 2, m: 3, l: 4, xl: 5
      })

      let small = Size.s
      let large = Size.l

      console.log("is l > s:", large > small)`,
    },
    {
      name: 'Enumerations > Explicity set base value',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 1,
          Fall: 2,
          Winter: 3,
          Spring: 4
      });

      let baseWinter = Season.Winter;
      //baseWinter is 3

      console.log(baseWinter);`,
    },
    {
      name: 'Eumerations > Get the list of values',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 1,
          Fall: 2,
          Winter: 3,
          Spring: 4
      });

      //ECMAScript 6 feature
      let values = Object.keys(Season)
          .map(key => Season[key]);
      //values is [1,2,3,4]

      console.log("values is", values);`,
    },
    {
      name: 'Enumerations > Initilizing from a base value',
      code: `//In Javascript there are no enum type
      Season = Object.freeze({
          Summer: 0,
          Fall: 1,
          Winter: 2,
          Spring: 3
      });

      let winter = 2;
      let isWinter = winter === Season.Winter;
      //isWinter is true

      console.log(isWinter);`,
    },
    {
      name: 'Exceptions handling > Catch all exceptions',
      code: `function throwWhenNullOrEmpty(array)
      {
          if (array == null) {
              throw "array is null";
          }
          if (array.length === 0) {
              throw new RangeError();
          }
      }

      try {
          throwWhenNullOrEmpty(null);
      }
      catch (e) {
          console.log("Error: " + e);
      }`,
    },
    {
      name: 'Exceptions handling > Call the specific exception',
      code: `function throwWhenNullOrEmpty(array) {
        if (array == null) {
            throw "array is null";
        }
        if (array.length === 0) {
            throw new RangeError();
        }
    }

    try {
        throwWhenNullOrEmpty([]);
    }
    catch (e) {
        if (e.name === "RangeError") {
            console.log("array is empty");
        } else {
            console.log("array is not specified");
        }
    }`,
    },
    {
      name: 'Exceptions handling > Guaranted code execution',
      code: `function throwIfTrue(param) {
        try {
            if (param)
                throw new Error("test exception");
    }
        catch (e) {
            console.log("catch");
    }
        finally {
            console.log("finally");
        }
    }

    throwIfTrue(true);
    //printed: "catch" and "finally"
    throwIfTrue(false);
    //printed only "finally"`,
    },
    {
      name: 'Exceptions handling > Method throwing an exception',
      code: `//any function can throw an error
      function functionWithException() {
          throw new Error("test exception");
      }

      functionWithException();`,
    },
    {
      name: 'Exceptions handling > Re-throw exceptions',
      code: `function functionWithException() {
        try {
            throw new Error("test exception");
        }
        catch (e) {
            //implementation of any partial processing
            //and send error to the calling code
            throw e;
        }
    }

    try {
        functionWithException();
    }
    catch (e) {
        console.log(e);
    }`,
    },
    {
      name: 'Exceptions handling > Throw an exception',
      code: `class Seller {
        cars = [];

        sell() {
            if (this.cars.length === 0) {
                throw "No cars for sale";
            }
            //some implementation...
        }
    }

    var seller = new Seller();
    seller.sell();`,
    },
    {
      name: 'Extensions > Adding object methods',
      code: `class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    Point.prototype.distanceTo = function distanceTo(p) {
        let d1 = Math.pow(this.x - p.x, 2);
        let d2 = Math.pow(this.y - p.y, 2);
        return Math.sqrt(d1 + d2);
    }

    let p1 = new Point(1, 2);
    let p2 = new Point(2, 3);
    let distance = p1.distanceTo(p2);
    //distance is 1.4142

    console.log(distance);`,
    },
    {
      name: 'Extensions > Adding properties',
      code: `class Size {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

    Object.defineProperty(Size.prototype, "area", {
        get: function area() {
            return this.width * this.height;
        }
    });

    let size = new Size(4, 5);
    let area = size.area;
    //area is 20

    console.log(area);`,
    },
    {
      name: 'Extensions > Adding type methods',
      code: `class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    Point.distanceTo = function distanceTo(p1, p2) {
        let d1 = Math.pow(p1.x - p2.x, 2);
        let d2 = Math.pow(p1.y - p2.y, 2);
        return Math.sqrt(d1 + d2);
    }

    let p1 = new Point(1, 2);
    let p2 = new Point(2, 3);
    let distance = Point.distanceTo(p1, p2);
    //distance is 1.4142

    console.log(distance);
    `,
    },
    {
      name: 'Extensions > Simple types extension',
      code: `Object.defineProperty(String.prototype, "trimmed", {
        get: function trimmed() {
            return this.trim()
        }
    })

    let str = "  \t  word \r\n".trimmed
    //str is "word"

    console.log(str)`,
    },
    {
      name: 'Functions > Array of parameters ',
      code: `//ECMAScript 6 feature
      function getAvg(...values) {
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

      let avg = getAvg(1, 2, 3, 4);
      //avg is 2.5

      console.log(avg);`,
    },
    {
      name: 'Functions > In/Out parameters',
      code: `function SwapStrings(s1, s2) {
        let tmp = s1[0];
        s1[0] = s2[0];
        s2[0] = tmp;
    }

    let s1 = ["A"];
    let s2 = ["B"];
    SwapStrings(s1, s2);
    //s1[0] is "B", s2[0] is "A"
    `,
    },
    {
      name: 'Functions > Multiple return values',
      code: `function getFirstLast(ar) {
        let first = -1;
        let last = -1;
        if (ar.length > 0) {
            first = ar[0];
            last = ar[ar.length - 1];
        }
        return {first: first, last: last};
    }

    let ar = [2, 3, 5];
    let result = getFirstLast(ar);
    //result.first is 2
    //result.last is 5

    console.log(result.first);
    console.log(result.last);`,
    },
    {
      name: 'Functions > Optional parameters values',
      code: `//ECMAScript 6 feature
      function SayGoodbye(message = "Goodbye!") {
          console.log(message);
      }

      SayGoodbye();
      //prints "Goodby!"

      SayGoodbye("see you");
      //prints "see you"

      //before
      function OldSayGoodbye(message) {
          if (message == undefined) {
              message = "Goodbye!";
          }
          console.log(message);
      }

      OldSayGoodbye();
      //prints "Goodbye!"

      OldSayGoodbye("see you");
      //prints "see you"`,
    },
    {
      name: 'Functions > Variable parameters',
      code: `function print5(data) {
        if (data.length > 5) {
            data = data.substring(0, 5);
        }
        console.log(data);
    }

    print5("1234567");
    //printed "12345"`,
    },
    {
      name: 'Functions > With return value',
      code: `function getSum(n1, n2) {
        return n1 + n2;
    }

    let sum = getSum(5, 3);
    //sum is 8

    console.log(sum)`,
    },
    {
      name: 'Functions > Without any parameters',
      code: `function sayHello() {
        console.log("Hello"!);
                    }
    sayHello();`,
    },
    {
      name: 'Functions > Without any return value',
      code: `function add3AndPrint(value) {
        console.log(value + 3);
    }

    add3AndPrint(5);`,
    },
    {
      name: 'Generic types > Generic classes',
      code: `//In Javascript there are no generics
      //ECMAScript 6 feature
      class Size {

          constructor(width, height) {
              this.width = width;
              this.height = height;
          }

          asText() {
              return [''+this.width, ''+this.height]

          }
      }

      let sizeInt = new Size(5, 8);
      let textInt = sizeInt.asText();
      //textInt is "[5; 8]"

      let sizeFloat = new Size(3.7, 1.58);
      let textFloat = sizeFloat.asText();
      //textFloat is "[3.7; 1.58]"

      console.log(textInt);
      console.log(textFloat);`,
    },
    {
      name: 'Generic types > Generic methods',
      code: `//In Javascript there are no generics
      //ECMAScript 6 feature
      function swap(a, b) {
          let tmp = a[0];
          a[0] = b[0];
          b[0] = tmp;
      }

      let n1 = [5];
      let n2 = [7];
      swap(n1, n2);
      //n1[0] is 7 and n2[0] is 5

      let s1 = ["cat"];
      let s2 = ["dog"];
      swap(s1, s2);
      //s1[0] is "dog" and s2[0] is "cat"

      console.log(n1);
      console.log(n2);

      console.log(s1);
      console.log(s2);`,
    },
    {
      name: 'Generic types > Substitution principle',
      code: `//In Javascript there are no generics
      //ECMAScript 6 feature
      class Vehicle {
          test() {
              console.log("test: " + this.constructor.name);
          }
      }

      class Car extends Vehicle { }

      class Truck extends Vehicle { }

      let list = [];
      let vehicle = new Vehicle();
      let car = new Car();
      let truck = new Truck();

      list.push(vehicle);
      list.push(car);
      list.push(truck);

      for (let curVehicle of list) {
          curVehicle.test();
      }`,
    },
    {
      name: 'Initializing of types > Classes > With a constructor',
      code: `//ECMAScript 6 feature
      class Phone {
          constructor(model) {
              this.model = model
          }
      }

      class Employee {
          constructor(firstName, lastName, phone) {
              this.firstName = firstName;
              this.lastName = lastName;
              this.phone = phone;
          }
      }

      let nokiaPhone = new Phone("Nokia 6610");

      let kim = new Employee("Victorya", "Kim",
          new Phone("iPhone 11 Pro"));

      console.log(kim.phone.model);`,
    },
    {
      name: 'Initializing of types > Classes > Without any constructor',
      code: `function Phone(model) {
        this.model = model;
    }

    function Employee(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    let nokiaPhone = new Phone("Nokia 6610");

    let kim = new Employee("Victorya", "Kim",
        new Phone("iPhone 5"));

    console.log(kim.phone.model);`,
    },
    {
      name: 'Initializing of types > Collections > Arrays',
      code: `//Array of integer
      let primeNumbers = [ 2, 3, 5, 7, 11, 13, 17, 19 ];

      //Array of string
      let gameList = [ "soccer", "hockey", "basketball" ];

      //ECMAScript 6 feature
      class Employee {
          constructor(firstName, lastName) {
              this.firstName = firstName;
              this.lastName = lastName;
          }
      }

      //Array of Employee
      let employees = [
          new Employee("Anton", "Pavlov"),
          new Employee("Elena", "Kirienko")
      ];

      console.log(employees[1].lastName);`,
    },
    {
      name: 'Initializing of types > Collections > Dictionaries',
      code: `//Map<String, String>
      let languages = new Map([
          ["ru", "russian"],
          ["en", "english"]]);

      //Dictionary<Int, String> (object)
      let numbers = {
          1: "one", 2: "two", 3: "three"
      };

      class Employee {
          constructor(firstName, lastName) {
              this.firstName = firstName;
              this.lastName = lastName;
          }
      }

      //Map<Int, Employee>
      let employees = new Map([
          [1, new Employee("Anton", "Pavlov")],
          [2, new Employee("Elena", "Kirienko")]
      ]);

      console.log("languages is", languages);
      console.log("numbers is", numbers);
      console.log("lastName is",
          employees.get(1).lastName);`,
    },
    {
      name: 'Initializing of types > Collections > Set',
      code: `//ECMAScript 6 feature
      let intSet = new Set([
          2, 3, 5, 7, 11, 13, 17, 19]);

      console.log("intSet is", intSet);
      console.log(intSet.has(17));`,
    },
    {
      name: 'Initializing of types > Differences between "var" and "let"',
      code: `for (var i1 = 0; i1 < 10; i1++) {}
      //i1 is 10

      for (let i2 = 0; i2 < 10; i2++) {}
      //i2 is not visible here

      var s1 = 'one';
      var s1 = 'two';

      let s2 = 'one';
      let s2 = 'two'; //<-Error (Cannot declare a let variable twice)

      console.log(test1 + "\n");
      //test1 is undefined
      console.log(test2 + "\n");
      //Error (Cannot access uninitialized variable)

      var test1 = "test1"
      let test2 = "test2"`,
    },
    {
      name: 'Initializing of types > Enumerations',
      code: `Planet = {
        "Mercury": 1, "Venus": 2, "Earth": 3
    }

    let preciousMetal = {
        Platinum: 1, Gold: 2, Silver: 3
    }

    let gold = preciousMetal.Gold;
    let earth = Planet.Earth;

    console.log("earth is", earth);
    console.log("gold is", gold);`,
    },
    {
      name: 'Initializing of types > Simple types',
      code: `//"const" for constants (ECMAScript 6 feature) and
      //"let" for variables (ECMAScript 6 feature)

      //Int
      let number = 42, otherNumber = 37;
      const maxInt64 = Number.MAX_VALUE;
      const Mb = 1048576;
      //⌘ Support: TC39: Stage 3, Node: 12.5+, Chrome: 75+
      //const MB = 1_048_576;

      //Double
      const exp = 2.71828;
      let billion = 1E+9;

      //Float
      const pi = 3.14;

      //String
      const greeting = "Hello";

      //Multiline String
      let text = "this is some\n" +
      "multiline text";


      //Bool
      const sunIsStar = true;
      let earthIsStar = false;

      //Character "A"
      const charA = 'A'; //'\u0041'

      console.log('\u0041');`,
    },
    {
      name: 'Initializing of types > Structures > Without any constructor',
      code: `//In JavaScript there are no struct type
      let size = {
          width : 10,
          height : 10
      }

      //the object literal notation is preferable
      let point = new Object();
      point.left = 5;
      point["top"] = 5;

      let rect = {
          size : size,
          point : point
      }

      console.log("rect.point.top =", rect.point.top)`,
    },
    {
      name: 'Interfaces > Conformance checking (is,as)',
      code: `//In Javascript there are no interfaces
      //ECMAScript 6 feature
      class PUID {}

      class Named {
          constructor(name) {
              this.name = name;
          }
      }

      class Flower extends Named {}

      let rose = new Flower("Rose");

      let isPUID = rose instanceof PUID;
      //isPUID is false

      let isNamed = rose instanceof Named;
      //isNamed is true

      console.log(isPUID);
      console.log(isNamed);`,
    },
    {
      name: 'Interfaces > Constructor requirements',
      code: `//In Javascript there are no interfaces
      //ECMAScript 6 feature
      class List {
          constructor(itemCount) {
              this.itemCount = itemCount;
              if (this.constructor.name === "List") {
                  throw new Error("Can't instantiate abstract class!");
              }
          }
      }

      class SortedList extends List {}

      let list = new SortedList(10)
      //list.itemCount is 10

      console.log(list.itemCount);`,
    },
    {
      name: 'Interfaces > Declaration and initialization',
      code: `//In Javascript there are no interfaces
      //ECMAScript 6 feature
      class Printable {
          constructor() {
              throw new Error("Can't instantiate abstract class!");
          }

          print(color) {
              throw new Error("Abstract method!");
          }
      }

      shape = new Printable();`,
    },
    {
      name: 'Interfaces > Interfaces collection',
      code: `/In Javascript there are no interfaces
      //ECMAScript 6 feature
      class Named {
          constructor(name) {
              this.name = name;
          }
      }

      class Flower extends Named {}

      class City extends Named {}

      class Star extends Named {}

      let rows = [
          new Flower("Rose"),
          new City("Rome"),
          new Star("Sirius")];

      let list = rows.map(r => r.name).join(", ");
      //list is Rose, Rome, Sirius

      console.log(list);`,
    },
    {
      name: 'Interfaces > Interfaces inheritance',
      code: `//In Javascript there are no interfaces
      //ECMAScript 6 feature
      class AVehicle {
          constructor(maxSpeed) {
              this.maxSpeed = maxSpeed;
              if (this.constructor.name === "AVehicle") {
                  throw new Error("Can't instantiate abstract class!");
              }
          }
      }

      class ATruck extends AVehicle {
          constructor(maxSpeed, capacity) {
              super(maxSpeed);
              this.capacity = capacity;
              if (this.constructor.name === "ATruck") {
                  throw new Error("Can't instantiate abstract class!");
              }
          }
      }

      class Kamaz5320 extends ATruck {
          constructor() {
              super(85, 8000);
          }
      }

      let kamaz = new Kamaz5320();
      maxSpeed = kamaz.maxSpeed;
      //maxSpeed is 85

      console.log(maxSpeed);`,
    },
    {
      name: 'Interfaces > Methods requirements',
      code: `//In Javascript there are no interfaces
      //ECMAScript 6 feature
      class Car {
          constructor(started) {
              this.started = started;
              if (this.constructor.name === "Car") {
                  throw new Error("Can't instantiate abstract class!");
              }
          }

          startEngine() {
              if (this.started)
                  return false;
              this.started = true;
              return true;
          }

          stopEngine() {
              this.started = false;
          }
      }

      class SportCar extends Car {}

      let car = new SportCar();
      console.log(car.startEngine());
      console.log(car.startEngine());`,
    },
    {
      name: 'Interfaces > Properties requirements',
      code: `//In Javascript there are no interfaces
      //ECMAScript 6 feature
      class Car {
          constructor(engineVolume) {
              this.engineVolume = engineVolume;
          }
      }

      class Airwave extends Car {
          constructor() {
              super(1500);
          }
      }

      let airwave = new Airwave()
      //airwave.engineVolume is 1500

      console.log(airwave.engineVolume);`,
    },
    {
      name: 'Lambda expressions > Capture of variables',
      code: `//ECMAScript 6 feature
      let makeWallet = sum => pay => {
          sum -= pay;
          return sum;
      }

      let sum1 = 1000;
      let payFromWallet1 = makeWallet(sum1);
      let sum2 = 500;
      let payFromWallet2 = makeWallet(sum2);
      let balance = payFromWallet1(50);
      //balance is 950


      balance = payFromWallet2(70);
      //balance is 430


      balance = payFromWallet1(150);
      //balance is 800
`,
    },
    {
      name: 'Lambda expressions > Currying',
      code: `//ECMAScript 6 feature
      let carry = f => a => b => f(a, b);

      let avg = (a, b) => (a + b)/2;
      let n1 = avg(1, 3);
      //n1 is 2

      let avg1 = carry(avg)(1);
      //avg1 is avg func with first param = 1
      let n2 = avg1(5);
      //n2 is 3 = (1 + 5)/2`,
    },
    {
      name: 'Lambda expressions > Function as a parameter',
      code: `//ECMAScript 6 feature
      let numbers = [2, 3, 1];
      numbers.sort((a, b) => a - b);
      //numbers is [3, 2, 1]


      // * previous version *
      numbers.sort(function(a, b) {
          return a - b;
      });
      //numbers is [3, 2, 1]
   `,
    },
    {
      name: 'Lambda expressions > Function as a return value',
      code: `//ECMAScript 6 feature
      let makeSum = () => (a, b) => a + b;

      let sumFunc = makeSum();
      let sum = sumFunc(5, 8);
      //sum is 13


      // * previous version *
      var makeSum2 = function() {
          return function(a, b) {
              return a + b;
          }
      }

      var sumFunc2 = makeSum2();
      var sum2 = sumFunc2(7, 8);
      //sum2 is 15
    `,
    },
    {
      name: 'Lambda expressions > Modify captured variables',
      code: `//ECMAScript 6 feature
      let x = 5;

      let addYtoX = y => x += y;
      addYtoX(3);
      //x is 8
    ;

      // * previous version *
      var x1 = 5;

      var addYtoX1 = function(y) {
          x1 += y;
      }
      addYtoX1(1);
      //x1 is 6
   `,
    },
    {
      name: 'Lambda expressions > Void function as a parameter',
      code: `//ECMAScript 6 feature
      let checkAndProcess = (number, process) => {
          if (number < 10) {
              process(number);
          }
      }

      let process = number =>
           console.log(number*10);

      checkAndProcess(5, process);
      //printed: 50`,
    },
    {
      name: 'Lambda expressions > With multiple operators',
      code: `function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    //ECMAScript 6 feature
    let getDistance = (p1, p2) => {
        let d1 = Math.pow(p1.x - p2.x, 2);
        let d2 = Math.pow(p1.y - p2.y, 2);
        return Math.sqrt(d1 + d2);
    }

    let point1 = new Point(0, 0);
    let point2 = new Point(5, 5);
    let distance = getDistance(point1, point2);
    //distance is 7.071

    // * previous version *
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }

    var getDistance1 = function(p1, p2) {
        var d1 = Math.pow(p1.x - p2.x, 2);
        var d2 = Math.pow(p1.y - p2.y, 2);
        return Math.sqrt(d1 + d2);
    }

    var point3 = new Point1(0, 0);
    var point4 = new Point1(7, 7);
    var distance2 = getDistance1(point3, point4);
    //distance2 is 9.899
  `,
    },
    {
      name: 'Lambda expressions > With multiple parameters',
      code: `//ECMAScript 6 feature
      let avgFunc = (a, b) => (a + b) / 2;
      let avg = avgFunc(3, 5);
      //avg is 4

      // * previous version *
      var avgFunc2 = function(a, b) {
          return (a + b) / 2;
      }
      var avg2 = avgFunc2(7, 5);
      //avg2 is 6
 `,
    },
    {
      name: 'Lambda expressions > With one parameter',
      code: `var powOfTwo = function(power) {
        return Math.pow(2, power);
    }
    var pow8 = powOfTwo(8);
    //pow8 is 256

    //ECMAScript 6 feature
    let powOfThree = power => Math.pow(3, power);
    let pow3 = powOfThree(3);
    //pow3 is 27`,
    },
    {
      name: 'Lambda expressions > Without return value',
      code: `//ECMAScript 6 feature
      let add2AndPrint =
          a => console.log(a + 2);
      add2AndPrint(5)
      //printed 7

      // * previous version *
      var add3AndPrint = function(a) {
          console.log(a + 3);
      }
      add3AndPrint(5);
      //printed 8`,
    },
    {
      name: 'Multi-threaded operations > Asynchronous call',
      code: `//ECMAScript 6 feature
      let i = 5;
      let action = () => console.log(i * 10);

      //wait 3 seconds and run lambda function
      setTimeout(action, 3000);`,
    },
    {
      name: 'Multi-threaded operations > Asynchronous call with a result',
      code: `function add(a, b) {
        return new Promise(resolve => {
                setTimeout(() => {
                        resolve(a + b);
                    }, 3000);
        })
    }

    add(5, 3).then(result => console.log(result));`,
    },
    {
      name: 'Multi-threaded operations > Keyword "async" and "await"',
      code: `function add(a, b) {
        return new Promise(resolve => {
            setTimeout(() => { resolve(a + b) }, 3000);
        })
    }

    async function test() {
        return await add(5, 3);
    }

    //Start async function and wait for add() result
    test().then(result => console.log(result))`,
    },
    {
      name: 'Multi-threaded operations > Start of a new thread',
      code: `function add(a, b) {
        return a + b;
    }

    //ECMAScript 6 feature
    setTimeout(() => {
        let result = add(3, 5);
        console.log(result);
    }, 3000);
    console.log('main thread');
    //output:
    //main thread
    //result: 8`,
    },
    {
      name: 'Multi-threaded operations > Start of a new thread and waiting',
      code: `async function showAddResult(a, b) {
        return new Promise(resolve => {
            setTimeout(() => {
                result = a + b;
                console.log(result);
                resolve(result);
            }, 3000);
        })
    }

    async function test() {
        //ECMAScript 6 feature
        //Start async function and wait for add() result
        await showAddResult(3, 5);
        console.log('main function');
        //output:
        //result: 8
        //main function
    }

    test()`,
    },
    {
      name: 'Patterns > Behavioral patterns > Chain of Responsibility',
      code: `//Handler
      class Rescuer {
          constructor(code, next) {
              this._code = code;
              this._next = next;
          }

          //HandleRequest()
          help(code) {
              if (this._code === code) {
                  this.toHelp();
              } else if (this._next != undefined) {
                  this._next.help(code);
              }
          }
      }

      //ConcreteHandler
      class Firefighter extends Rescuer {
          constructor(next) {
              super(1, next);
          }

          toHelp() {
              console.log("call firefighters");
          }
      }

      //ConcreteHandler
      class Police extends Rescuer {
          constructor(next) {
              super(2, next);
          }

          toHelp() {
              console.log("call the police");
          }
      }

      //ConcreteHandler
      class Ambulance extends Rescuer {
          constructor(next) {
              super(3, next);
          }

          toHelp() {
              console.log("call an ambulance");
          }
      }

      let ambulance = new Ambulance();
      let police = new Police(ambulance);
      let firefighter = new Firefighter(police);
      firefighter.help(1);
      //printed: call firefighters
      firefighter.help(2);
      //printed: call the police
      firefighter.help(3);
      //printed: call an ambulance`,
    },
    {
      name: 'Patterns > Behavioral patterns > Command',
      code: `//Invoker
      class BankClient {
          constructor(cPut, cGet) {
              this._putCommand = cPut;
              this._getCommand = cGet;
          }

          putMoney() {
              this._putCommand.execute();
          }

          getMoney() {
              this._getCommand.execute();
          }
      }

      //Receiver
      class Bank {
          giveMoney() {
              console.log("money to the client");
          }

          receiveMoney()  {
              console.log("money from the client");
          }
      }

      //ConcreteCommand
      class PutCommand {
          constructor (bank) {
              this._bank = bank;
          }

          execute() {
              this._bank.receiveMoney();
          }
      }

      //ConcreteCommand
      class GetCommand {
          constructor (bank) {
              this._bank = bank;
          }

          execute() {
              this._bank.giveMoney();
          }
      }

      //Client
      let bank = new Bank();
      let cPut = new PutCommand(bank);
      let cGet = new GetCommand(bank);
      let client = new BankClient(cPut, cGet);
      client.getMoney();
      //printed: money to the client
      client.putMoney();
      //printed: money from the client`,
    },
    {
      name: 'Patterns > Behavioral patterns > Interpreter',
      code: `//TerminalExpression
      class DivExpression {
          constructor(divider) {
              this._divider = divider;
          }

          interpret(i) {
              return i % this._divider === 0;
          }
      }

      //NonterminalExpression
      class OrExpression {
          constructor(exp1, exp2) {
              this.exp1 = exp1;
              this.exp2 = exp2;
          }

          interpret(i) {
              return this.exp1.interpret(i) ||
                     this.exp2.interpret(i);
          }
      }

      //NonterminalExpression
      class AndExpression {
          constructor(exp1, exp2) {
              this.exp1 = exp1;
              this.exp2 = exp2;
          }

          interpret(i) {
              return this.exp1.interpret(i) &&
                     this.exp2.interpret(i);
          }
      }

      //Client
      let divExp5 = new DivExpression(5);
      let divExp7 = new DivExpression(7);
      let orExp = new OrExpression(
          divExp5, divExp7);
      let andExp = new AndExpression(
          divExp5, divExp7);

      //21 is divided by 7 or 5?
      let result1 = orExp.interpret(21);
      //result1 is true

      //21 is divided by 7 and 5?
      let result2 = andExp.interpret(21);
      //result2 is false

      //35 is divided by 7 and 5?
      let result3 = andExp.interpret(35);
      //result3 is true

      console.log(result1);
      console.log(result2);
      console.log(result3);`,
    },
    {
      name: 'Patterns > Behavioral patterns > Iterator',
      code: `//ConcreteAggregate
      class PrimeNumbers {
          constructor() {
              this.numbers = [2, 3, 5, 7, 11];
          }

          getIterator() {
              return new Iterator(this);
          }
      }

       //ConcreteIterator
      class Iterator {

          constructor(primeNumbers) {
              this.index = 0;
              this.numbers = primeNumbers.numbers;
          }

          first() {
              this.index = 0;
          }

          next() {
              this.index++;
          }

          isDone() {
              return this.index >= this.numbers.length;
          }

          currentItem() {
              return this.numbers[this.index];
          }
      }

       //Client
      let numbers = new PrimeNumbers();
      let iterator = numbers.getIterator();
      let sum = 0;
      for (iterator.first(); !iterator.isDone(); iterator.next()) {
          sum += iterator.currentItem();
      }
      //sum is 28

      console.log(sum);`,
    },
    {
      name: 'Patterns > Behavioral patterns > Mediator',
      code: `class Mediator {
        constructor() {
            this._switchers = [];
        }

        add(switcher) {
            this._switchers.push(switcher);
        }
    }

    //Colleague
    class Switcher {
        constructor(mediator) {
            this._state = false;
            this._mediator = mediator;
            this._mediator.add(this);
        }

        sync() {
            this._mediator.sync(this);
        }

        getState() {
            return this._state;
        }

        setState(value) {
            this._state = value;
        }
    }

    //ConcreteMediator
    class SyncMediator extends Mediator {
        constructor() {
            super();
        }

        sync(switcher) {
            let state = switcher.getState();
            let switchers = this._switchers;
            for (let i in switchers) {
                if (switchers.hasOwnProperty(i)) {
                    switchers[i].setState(state);
                }
            }
        }
    }

    //Client
    let mediator = new SyncMediator();
    let switcher1 = new Switcher(mediator);
    let switcher2 = new Switcher(mediator);
    let switcher3 = new Switcher(mediator);

    switcher1.setState(true);
    let state2 = switcher2.getState();
    //state2 is false
    let state3 = switcher3.getState();
    //state3 is false

    switcher1.sync();
    state2 = switcher2.getState();
    //state2 is true
    state3 = switcher3.getState();
    //state3 is true

    console.log(state2);
    console.log(state3);`,
    },
    {
      name: 'Patterns > Behavioral patterns > Memento',
      code: `//State
      class Point {
          constructor(x, y) {
              this.x = x;
              this.y = y;
          }
      }

      class Memento {
          constructor(mState) {
              this.__state = mState;
          }

          getState() {
              return this.__state;
          }
      }

      //Originator
      class Shape {
          constructor() {
              this.position = new Point(0, 0);
          }

          move(left, top) {
              this.position.x += left;
              this.position.y += top;
          }

          getMemento() {
              let state = new Point(
                  this.position.x, this.position.y);
              return new Memento(state);
          }

          setMemento(memento) {
              this.position = memento.getState();
          }
      }

      //Caretaker
      class ShapeHelper {
          constructor(hShape) {
              this.stack = [];
              this.shape = hShape;
          }

          move(left, top) {
              this.stack.push(
                  this.shape.getMemento());
              this.shape.move(left, top);
          }

          undo() {
              if (this.stack.length > 0) {
                  this.shape.setMemento(
                      this.stack.pop());
              }
          }
      }

      let shape = new Shape();
      let helper = new ShapeHelper(shape);

      helper.move(2, 3);
      //shape.position is (2, 3)
      console.log(shape.position.x + ", " + shape.position.y);
      helper.move(-5, 4);
      //shape.position is (-3, 7)
      console.log(shape.position.x + ", " + shape.position.y);

      helper.undo();
      //shape.position is (2, 3)
      console.log(shape.position.x + ", " + shape.position.y);
      helper.undo();
      //shape.position is (0, 0)
      console.log(shape.position.x + ", " + shape.position.y);`,
    },
    {
      name: 'Patterns > Behavioral patterns > Observer',
      code: `//ConcreteObserver
      class TextObserver {
          constructor(oName) {
              this.name = oName;
          }

          update(state) {
              console.log(this.name + ": " + state);
          }
      }

      //Subject
      class TestSubject {
          constructor() {
              this._observers = [];
          }

          attach(observer) {
              this._observers.push(observer);
          }

          detach(observer) {
              let i = this._observers.indexOf(observer);
              observers.splice(i, 1);
          }

          notify(state) {
              for (let i in this._observers) {
                  if (this._observers.hasOwnProperty(i)) {
                      this._observers[i].update(state);
                  }
              }
          }
      }

      //ConcreteSubject
      class TextEdit extends TestSubject {
          constructor() {
              super();
              this.text = "";
          }

          //SetState(State)
          setText(sText) {
              this.text = sText;
              this.notify(this.text);
          }

          getText() {
              return this.text;
          }
      }

      //Client
      let observer1 = new TextObserver("Observer #1");
      let observer2 = new TextObserver("Observer #2");

      let textEdit = new TextEdit();
      textEdit.attach(observer1);
      textEdit.attach(observer2);

      textEdit.setText("test text");
      //printed:
      //Observer #1: test text
      //Observer #2: test text`,
    },
    {
      name: 'Patterns > Behavioral patterns > State',
      code: `//ConcreteState
      class CloseState {
          open(c) {
              console.log("open the connection");
              c.setState(new OpenState());
          }

          close(c) {
              console.log("connection is already closed");
          }
      }

      //ConcreteState
      class OpenState {
          open(c) {
              console.log("connection is already open");
          }

          close(c) {
              console.log("close the connection");
              c.setState(new CloseState());
          }
      }

      //Context
      class Connection {
          constructor() {
              this.state = new CloseState();
          }

          open() {
              this.state.open(this);
          }

          close() {
              this.state.close(this);
          }

          setState(sState) {
              this.state = sState;
          }
      }

      //Client
      let con = new Connection();
      con.open();
      //printed: open the connection
      con.open();
      //printed: connection is already open
      con.close();
      //printed: close the connection
      con.close();
      //printed: connection is already closed`,
    },
    {
      name: 'Patterns > Behavioral patterns > Strategy',
      code: `//ConcreteStrategy
      class AddStrategy {
          doOperation(a, b) {
              return a + b;
          }
      }

      //ConcreteStrategy
      class SubstractStrategy {
          doOperation(a, b) {
              return a - b;
          }
      }

      //Context
      class Calc {
          constructor() {
              this.strategy = undefined;
          }

          execute(a, b) {
              if (this.strategy == undefined)
                  return 0;
              return this.strategy.doOperation(a, b);
          }

          setStrategy(sStrategy) {
              this.strategy = sStrategy;
          }
      }

      let calc = new Calc();
      let result1 = calc.execute(5, 3);
      //result1 is 0

      calc.setStrategy(new AddStrategy());
      let result2 = calc.execute(5, 3);
      //result2 is 8

      calc.setStrategy(new SubstractStrategy());
      let result3 = calc.execute(5, 3);
      //result3 is 2

      console.log(result1);
      console.log(result2);
      console.log(result3);`,
    },
    {
      name: 'Patterns > Behavioral patterns > Template method',
      code: `class Shape {
        //Template method
        draw() {
            if (!this.canDraw())
                return;
            this.doDraw();
            this.notifyListeners();
        }

        canDraw() {
            //If it possible to draw the shape
            return true;
        }

        //primitive operation
        doDraw() {}

        notifyListeners() {
            console.log("shape is drawn");
        }
    }

    class Сircle extends Shape {
        constructor() {
            super();
        }

        doDraw() {
            console.log("draw a circle");
        }
    }

    //Client
    let сircle = new Сircle();
    сircle.draw();`,
    },
    {
      name: 'Patterns > Behavioral patterns > Visitor',
      code: `//ConcreteElement
      class Engine {
          accept(v) {
              v.visitEngine(this);
          }
      }

      //ConcreteElement
      class Wheel {
          constructor(wNumber) {
              this.number = wNumber;
          }

          getNumber() {
              return this.number;
          }

          accept(v) {
              v.visitWheel(this);
          }
      }

      //ConcreteElement
      class Car {
          constructor() {
              this.items = [
                  new Engine(),
                  new Wheel(1), new Wheel(2),
                  new Wheel(3), new Wheel(4)];
          }

          accept(v) {
              for (let i in this.items) {
                  if (this.items.hasOwnProperty(i)) {
                      this.items[i].accept(v);
                  }
              }
              v.visitCar(this);
          }
      }

      //ConcreteVisitor
      class TestCarVisitor {
          visitEngine(engine) {
              console.log("test engine");
          }

          visitWheel(wheel) {
              console.log("test wheel #" +
                  wheel.getNumber());
          }

          visitCar(car) {
              console.log("test car");
          }
      }

      //ConcreteVisitor
      class RepairCarVisitor {
          visitEngine(engine) {
              console.log("repair engine");
          }

          visitWheel(wheel) {
              console.log("repair wheel #" +
                  wheel.getNumber());
          }

          visitCar(car) {
              console.log("repair car");
          }
      }

      //Client
      let car = new Car();
      let v1 = new TestCarVisitor();
      let v2 = new RepairCarVisitor();

      car.accept(v1);
      car.accept(v2);`,
    },
    {
      name: 'Patterns > Creational patterns > Abstract factory',
      code: `//concrete product A1
      class ProductA1 {
          testA() {
              console.log("test A1");
          };
      }

      //concrete product A2
      class ProductA2 {
          testA() {
              console.log("test A2");
          };
      }

      //concrete product B1
      class ProductB1 {
          testB() {
              console.log("test B1");
          };
      }

      //concrete product B2
      class ProductB2 {
          testB() {
              console.log("test B2");
          };
      }

      //concrete factory 1
      class Factory1 {
          createA() {
              return new ProductA1();
          };
          createB() {
              return new ProductB1();
          };
      }

      //concrete factory 2
      class Factory2 {
          createA() {
              return new ProductA2();
          };
          createB() {
              return new ProductB2();
          };
      }

      //client code
      function testFactory(factory) {
          let productA = factory.createA();
          let productB = factory.createB();
          productA.testA();
          productB.testB();
      }

      testFactory(new Factory1());
      //printed: test A1
      //         test B1
      testFactory(new Factory2());
      //printed: test A2
      //         test B2`,
    },
    {
      name: 'Patterns > Creational patterns > Builder',
      code: `//ConcreteBuilder 1
      class TextBuilder {
          constructor() {
              this.text = "";
          }

          addText(value) {
              this.text += value;
          }

          addNewLine(value) {
              this.text += "\n" + value;
          }

          getText() {
              return this.text;
          }
      }

      //ConcreteBuilder 2
      class HtmlBuilder {
          constructor() {
              this.html = "";
          }

          addText(value) {
              this.html += "<span>" + value + "</span>";
          }

          addNewLine(value) {
              this.html += "<br/>\n";
              this.addText(value);
          }

          getHtml() {
              return this.html;
          }
      }

      //Director
      class TextMaker {
          makeText(textBuilder) {
              textBuilder.addText("line 1");
              textBuilder.addNewLine("line 2");
          }
      }

      //Client
      let textMaker = new TextMaker();

      let textBuilder = new TextBuilder();
      textMaker.makeText(textBuilder);
      let text = textBuilder.getText();
      //text: line 1
      //      line 2

      let htmlBuilder = new HtmlBuilder();
      textMaker.makeText(htmlBuilder);
      let html = htmlBuilder.getHtml();
      //html: <span>line 1</span><br/>
      //      <span>line 2</span>

      console.log(text);
      console.log(html);`,
    },
    {
      name: 'Patterns > Creational patterns > Factory Method',
      code: `//Product
      class Employee {
          test() {
              console.log("Employee");
          }
      }

      //ConcreteProduct
      class Manager extends Employee {
          test() {
              console.log("Manager");
          }
      }

      //Creator
      class Creator {
          //FactoryMethod
          createEmployee() {
              return new Employee();
          }

          //Some operation
          test() {
              this.createEmployee().test();
          }
      }

      //ConcreteCreator
      class ManagerCreator extends Creator {
          //FactoryMethod
          createEmployee() {
              return new Manager();
          }
      }

      //Client
      let creator = new Creator();
      creator.test();
      //printed: Employee

      creator = new ManagerCreator();
      creator.test();
      //printed: Manager`,
    },
    {
      name: 'Patterns > Creational patterns > Prototype',
      code: `//Prototype
      class Shape {
          constructor(lineCount) {
              this.lineCount = lineCount;
          }

          clone() {
              return new Shape(this.lineCount);
          }
      }

      //ConcretePrototype
      class Square extends Shape {
          constructor(lineCount) {
              super(4);
          }
      }

      //Client
      class ShapeMaker {
          constructor(shape) {
              this._shape = shape;
          }

          makeShape() {
              return this._shape.clone();
          }
      }

      let square = new Square();
      let maker = new ShapeMaker(square);

      let square1 = maker.makeShape();
      let square2 = maker.makeShape();

      console.log(square1.lineCount);
      console.log(square2.lineCount);`,
    },
    {
      name: 'Patterns > Creational patterns > Singleton',
      code: `class Settings {

        constructor() {
            if (Settings.prototype._singletonInstance) {
                return Settings.prototype._singletonInstance;
            }

            Settings.prototype._singletonInstance = this;

            this.port = 0;
            this.host = "";
        }
    }

    //Client
    let settings = new Settings();
    settings.host = "192.168.100.1";
    settings.port = 33;

    let settings1 = new Settings();
    //settings1.port is 33
    console.log(settings1.port);`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Chain of Responsibility',
      code: `//Handler
      function Rescuer(code, next) {
          this._code = code;
          this._next = next;

          //HandleRequest()
          this.help = function(code) {
              if (this._code === code) {
                  this.toHelp();
              } else if (next != undefined) {
                  next.help(code);
              }
          }
      }

      //ConcreteHandler
      function Firefighter(next) {
          Rescuer.apply(this, [1, next]);

          this.toHelp = function() {
              console.log("call firefighters");
          }
      }

      //ConcreteHandler
      function Police(next) {
          Rescuer.apply(this, [2, next]);

          this.toHelp = function () {
              console.log("call the police");
          }
      }

      //ConcreteHandler
      function Ambulance(next) {
          Rescuer.apply(this, [3, next]);

          this.toHelp = function () {
              console.log("call an ambulance");
          }
      }

      var ambulance = new Ambulance();
      var police = new Police(ambulance);
      var firefighter = new Firefighter(police);
      firefighter.help(1);
      //printed: call firefighters
      firefighter.help(2);
      //printed: call the police
      firefighter.help(3);
      //printed: call an ambulance`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Command',
      code: `//Invoker
      function BankClient(cPut, cGet) {
          var putCommand = cPut;
          var getCommand = cGet;

          this.putMoney = function() {
              putCommand.execute();
          }

          this.getMoney = function() {
              getCommand.execute();
          }
      }

      //Receiver
      function Bank() {
          this.giveMoney = function() {
              console.log("money to the client");
          }

          this.receiveMoney = function()  {
              console.log("money from the client");
          }
      }

      //ConcreteCommand
      function PutCommand(bank) {
          this._bank = bank;

          this.execute = function() {
              this._bank.receiveMoney();
          }
      }

      //ConcreteCommand
      function GetCommand(bank) {
          this._bank = bank;

          this.execute = function() {
              this._bank.giveMoney();
          }
      }

      //Client
      var bank = new Bank();
      var cPut = new PutCommand(bank);
      var cGet = new GetCommand(bank);
      var client = new BankClient(cPut, cGet);
      client.getMoney();
      //printed: money to the client
      client.putMoney();
      //printed: money from the client`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Interpreter',
      code: `//TerminalExpression
      function DivExpression(divider) {
          this._divider = divider;

          this.interpret = function(i) {
              return i % this._divider === 0;
          }
      }

      //NonterminalExpression
      function OrExpression(exp1, exp2) {
          this.exp1 = exp1;
          this.exp2 = exp2;

          this.interpret = function(i) {
              return exp1.interpret(i) || exp2.interpret(i);
          }
      }

      //NonterminalExpression
      function AndExpression(exp1, exp2) {
          this.exp1 = exp1;
          this.exp2 = exp2;

          this.interpret = function(i) {
              return exp1.interpret(i) && exp2.interpret(i);
          }
      }

      //Client
      var divExp5 = new DivExpression(5);
      var divExp7 = new DivExpression(7);
      var orExp = new OrExpression(
          divExp5, divExp7);
      var andExp = new AndExpression(
          divExp5, divExp7);

      //21 is divided by 7 or 5?
      var result1 = orExp.interpret(21);
      //result1 is true

      //21 is divided by 7 and 5?
      var result2 = andExp.interpret(21);
      //result2 is false

      //35 is divided by 7 and 5?
      var result3 = andExp.interpret(35);
      //result3 is true

      console.log(result1);
      console.log(result2);
      console.log(result3);,`
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Iterator',
      code: `//ConcreteAggregate
      function PrimeNumbers() {
         var numbers = [2, 3, 5, 7, 11];

          //ConcreteIterator
         function Iterator() {
             var index = 0;

             this.first = function () {
                 index = 0;
             }

             this.next = function () {
                 index++;
             }

             this.isDone = function () {
                 return index >= numbers.length;
             }

             this.currentItem = function () {
                 return numbers[index];
             }
         }

         this.getIterator = function () {
             return new Iterator();
         }
      }

     //Client
     var numbers = new PrimeNumbers();
     var iterator = numbers.getIterator();
     var sum = 0;
     for (iterator.first(); !iterator.isDone(); iterator.next()) {
         sum += iterator.currentItem();
     }
     //sum is 28

     console.log(sum);
     `,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Mediator',
      code: `function Mediator() {
        this._switchers = [];

        this.add = function(switcher) {
            this._switchers.push(switcher);
        }
    }

    //Colleague
    function Switcher(mediator) {
        this._state = false;
        this._mediator = mediator;
        this._mediator.add(this);

        this.sync = function() {
            this._mediator.sync(this);
        }

        this.getState = function() {
            return this._state;
        }

        this.setState = function(value) {
            this._state = value;
        }
    }

    //ConcreteMediator
    function SyncMediator() {
        Mediator.apply(this);

        this.sync = function(switcher) {
            var state = switcher.getState();
            var switchers = this._switchers;
            for (var i in switchers) {
                if (switchers.hasOwnProperty(i)) {
                    switchers[i].setState(state);
                }
            }
        }
    }

    //Client
    var mediator = new SyncMediator();
    var switcher1 = new Switcher(mediator);
    var switcher2 = new Switcher(mediator);
    var switcher3 = new Switcher(mediator);

    switcher1.setState(true);
    var state2 = switcher2.getState();
    //state2 is false
    var state3 = switcher3.getState();
    //state3 is false
    console.log(state2);
    console.log(state3);

    switcher1.sync();
    state2 = switcher2.getState();
    //state2 is true
    state3 = switcher3.getState();
    //state3 is true

    console.log(state2);
    console.log(state3);`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Memento',
      code: `//State
      function Point(x, y) {
          this.x = x;
          this.y = y;
      }

      function Memento(mState) {
          var state = mState;

          this.getState = function() {
              return state;
          }
      }

      //Originator
      function Shape() {
          this.position = new Point(0, 0);

          this.move = function(left, top) {
              this.position.x += left;
              this.position.y += top;
          }

          this.getMemento = function () {
              var state = new Point(
                  this.position.x, this.position.y);
              return new Memento(state);
          }

          this.setMemento = function(memento) {
              this.position = memento.getState();
          }
      }

      //Caretaker
      function ShapeHelper(hShape) {
          var stack = [];
          var shape = hShape;

          this.move = function(left, top) {
              stack.push(shape.getMemento());
              shape.move(left, top);
          }

          this.undo = function() {
              if (stack.length > 0) {
                  shape.setMemento(stack.pop());
              }
          }
      }

      var shape = new Shape();
      var helper = new ShapeHelper(shape);

      helper.move(2, 3);
      //shape.position is (2, 3)
      console.log(shape.position.x + ", " + shape.position.y);
      helper.move(-5, 4);
      //shape.position is (-3, 7)
      console.log(shape.position.x + ", " + shape.position.y);

      helper.undo();
      //shape.position is (2, 3)
      console.log(shape.position.x + ", " + shape.position.y);
      helper.undo();
      //shape.position is (0, 0)
      console.log(shape.position.x + ", " + shape.position.y);`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Observer',
      code: `//ConcreteObserver
      function TextObserver(oName) {
          var name = oName;

          this.update = function(state) {
              console.log(name + ": " + state);
          }
      }

      //Subject
      function TectSubject() {
          var observers = [];

          this.attach = function(observer) {
              observers.push(observer);
          }

          this.detach = function(observer) {
              var i = observers.indexOf(observer);
              observers.splice(i, 1);
          }

          this.notify = function(state) {
              for (var i in observers) {
                  if (observers.hasOwnProperty(i)) {
                      observers[i].update(state);
                  }
              }
          }
      }

      //ConcreteSubject
      function TextEdit() {
          TectSubject.apply(this);
          var text = "";

          //SetState(State)
          this.setText = function(sText) {
              text = sText;
              this.notify(text);
          }

          this.getText = function() {
              return text;
          }
      }

      //Client
      var observer1 = new TextObserver("Observer #1");
      var observer2 = new TextObserver("Observer #2");

      var textEdit = new TextEdit();
      textEdit.attach(observer1);
      textEdit.attach(observer2);

      textEdit.setText("test text");
      //printed:
      //Observer #1: test text
      //Observer #2: test text`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > State',
      code: `//ConcreteState
      function CloseState() {
          this.open = function(c) {
              console.log("open the connection");
              c.setState(new OpenState());
          }

          this.close = function(c) {
              console.log("connection is already closed");
          }
      }

      //ConcreteState
      function OpenState() {
          this.open = function(c) {
              console.log("connection is already open");
          }

          this.close = function(c) {
              console.log("close the connection");
              c.setState(new CloseState());
          }
      }

      //Context
      function Connection() {
          var state = new CloseState();

          this.open = function() {
              state.open(this);
          }

          this.close = function() {
              state.close(this);
          }

          this.setState = function(sState) {
              state = sState;
          }
      }

      //Client
      var con = new Connection();
      con.open();
      //printed: open the connection
      con.open();
      //printed: connection is already open
      con.close();
      //printed: close the connection
      con.close();
      //printed: connection is already closed`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Strategy',
      code: `//ConcreteStrategy
      function AddStrategy() {
          this.doOperation = function(a, b) {
              return a + b;
          }
      }

      //ConcreteStrategy
      function SubstractStrategy() {
          this.doOperation = function(a, b) {
              return a - b;
          }
      }

      //Context
      function Calc() {
          var strategy = undefined;

          this.execute = function(a, b) {
              if (strategy == undefined)
                  return 0;
              return strategy.doOperation(a, b);
          }

          this.setStrategy = function(sStrategy) {
              strategy = sStrategy;
          }
      }

      var calc = new Calc();
      var result1 = calc.execute(5, 3);
      //result1 is 0

      calc.setStrategy(new AddStrategy());
      var result2 = calc.execute(5, 3);
      //result2 is 8

      calc.setStrategy(new SubstractStrategy());
      var result3 = calc.execute(5, 3);
      //result3 is 2

      console.log(result1);
      console.log(result2);
      console.log(result3);`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Template Method',
      code: `function Shape() {
        //Template method
        this.draw = function() {
            if (!this.canDraw())
                return;
            this.doDraw();
            this.notifyListeners();
        }

        this.canDraw = function() {
            //If it possible to draw the shape
            return true;
        }

        //primitive operation
        this.doDraw = function() {}

        this.notifyListeners = function() {
            console.log("shape is drawn");
        }
    }

    function Сircle() {
        Shape.apply(this);

        this.doDraw = function () {
            console.log("draw a circle");
        }
    }

    //Client
    var сircle = new Сircle();
    сircle.draw();`,
    },
    {
      name: 'Patterns > Previous Versions > Behavioral patterns > Visitor',
      code: `//ConcreteElement
      function Engine() {
          this.accept = function(v) {
              v.visitEngine(this);
          }
      }

      //ConcreteElement
      function Wheel(wBumber) {
          var number = wBumber;

          this.getNumber = function () {
              return number;
          }

          this.accept = function(v) {
              v.visitWheel(this);
          }
      }

      //ConcreteElement
      function Car() {
          var items = [
              new Engine(),
              new Wheel(1), new Wheel(2),
              new Wheel(3), new Wheel(4)];

          this.accept = function(v) {
              for (var i in items) {
                  if (items.hasOwnProperty(i)) {
                      items[i].accept(v);
                  }
              }
              v.visitCar(this);
          }
      }

      //ConcreteVisitor
      function TestCarVisitor() {
          this.visitEngine = function(engine) {
              console.log("test engine");
          }

          this.visitWheel = function(wheel) {
              console.log("test wheel #" +
                  wheel.getNumber());
          }

          this.visitCar = function(car) {
              console.log("test car");
          }
      }

      //ConcreteVisitor
      function RepairCarVisitor() {
          this.visitEngine = function(engine) {
              console.log("repair engine");
          }

          this.visitWheel = function(wheel) {
              console.log("repair wheel #" +
                  wheel.getNumber());
          }

          this.visitCar = function(car) {
              console.log("repair car");
          }
      }

      //Client
      var car = new Car();
      var v1 = new TestCarVisitor();
      var v2 = new RepairCarVisitor();

      car.accept(v1);
      car.accept(v2);`,
    },
    {
      name: 'Patterns > Previous Versions > Creational patterns > Abstract factory',
      code: `//concrete product A1
      function ProductA1() {
          this.testA = function () {
              console.log("test A1");
          };
      }

      //concrete product A2
      function ProductA2() {
          this.testA = function () {
              console.log("test A2");
          };
      }

      //concrete product B1
      function ProductB1() {
          this.testB = function () {
              console.log("test B1");
          };
      }

      //concrete product B2
      function ProductB2() {
          this.testB = function () {
              console.log("test B2");
          };
      }

      //concrete factory 1
      function Factory1() {
          this.createA = function () {
              return new ProductA1();
          };
          this.createB = function () {
              return new ProductB1();
          };
      }

      //concrete factory 2
      function Factory2() {
          this.createA = function () {
              return new ProductA2();
          };
          this.createB = function () {
              return new ProductB2();
          };
      }

      //client code
      function testFactory(factory) {
          var productA = factory.createA();
          var productB = factory.createB();
          productA.testA();
          productB.testB();
      }

      testFactory(new Factory1());
      //printed: test A1
      //         test B1
      testFactory(new Factory2());
      //printed: test A2
      //         test B2`,
    },
    {
      name: 'Patterns > Previous Versions > Creational patterns > Builder',
      code: `//ConcreteBuilder 1
      function TextBuilder() {
          var text = "";

          this.addText = function(value) {
              text += value;
          }

          this.addNewLine = function(value) {
              text += "\n" + value;
          }

          this.getText = function() {
              return text;
          }
      }

      //ConcreteBuilder 2
      function HtmlBuilder() {
          var html = "";

          this.addText = function(value) {
              html += "<span>" + value + "</span>";
          }

          this.addNewLine = function(value) {
              html += "\n";
              this.addText(value);
          }

          this.getHtml = function() {
              return html;
          }
      }

      //Director
      function TextMaker() {
          this.makeText = function(textBuilder) {
              textBuilder.addText("line 1");
              textBuilder.addNewLine("line 2");
          }
      }

      //Client
      var textMaker = new TextMaker();

      var textBuilder = new TextBuilder();
      textMaker.makeText(textBuilder);
      var text = textBuilder.getText();
      //text: line 1
      //      line 2

      var htmlBuilder = new HtmlBuilder();
      textMaker.makeText(htmlBuilder);
      var html = htmlBuilder.getHtml();
      //html: <span>line 1</span><br/>
      //      <span>line 2</span>

      console.log(text);
      console.log(html);`,
    },
    {
      name: 'Patterns > Previous Versions > Creational patterns > Factory Method',
      code: `//Product
      function Employee() {
          this.test = function() {
              console.log("Employee");
          }
      }

      //ConcreteProduct
      function Manager() {
          Employee.apply(this);
          this.test = function() {
              console.log("Manager");
          }
      }

      //Creator
      function Creator() {
          //FactoryMethod
          this.createEmployee = function() {
              return new Employee();
          }

          //Some operation
          this.test = function() {
              this.createEmployee().test();
          }
      }

      //ConcreteCreator
      function ManagerCreator() {
          Creator.apply(this);

          //FactoryMethod
          this.createEmployee = function() {
              return new Manager();
          }
      }

      //Client
      var creator = new Creator();
      creator.test();
      //printed: Employee

      creator = new ManagerCreator();
      creator.test();
      //printed: Manager`,
    },
    {
      name: 'Patterns > Previous Versions > Creational patterns > Prototype',
      code: `/Prototype
      function Shape(lineCount) {
          this.lineCount = lineCount;

          this.clone = function() {
              return new Shape(this.lineCount);
          }
      }

      //ConcretePrototype
      function Square() {
          Shape.apply(this, [4]);
      }

      //Client
      function ShapeMaker(shape) {
          this.shape = shape;

          this.makeShape = function() {
              return shape.clone();
          }
      }

      var square = new Square();
      var maker = new ShapeMaker(square);

      var square1 = maker.makeShape();
      var square2 = maker.makeShape();

      console.log(square1.lineCount);
      console.log(square2.lineCount);`,
    },
    {
      name: 'Patterns > Previous Versions > Creational patterns > Singleton',
      code: `function Settings() {

        if (Settings.prototype._singletonInstance) {
            return Settings.prototype._singletonInstance;
        }

        Settings.prototype._singletonInstance = this;

        this.port = 0;
        this.host = "";
    }

    //Client
    var settings = new Settings();
    settings.host = "192.168.100.1";
    settings.port = 33;

    var settings1 = new Settings();
    //settings1.port is 33
    console.log(settings1.port);`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Adapter (composition)',
      code: `//Adapter
      function StringList() {
          var rows = [];

          //SpecificRequest()
          this.getString = function () {
              return rows.join("\n");
          }

          this.add = function (value) {
              rows.push(value);
          }
      }

      //Adapter
      function TextAdapter(rowList) {
          this.rowList = rowList;

          //Request()
          this.getText = function () {
              return rowList.getString();
          }
      }

      function getTextAdapter() {
          var rowList = new StringList();
          var adapter = new TextAdapter(rowList);

              rowList.add("line 1");
          rowList.add("line 2");
          return adapter;
      }

      //Client
      var adapter = getTextAdapter();
      var text = adapter.getText();
      //text: line 1
      //      line 2
      console.log(text);`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Adapter (inheritance)',
      code: `//Adapter
      function StringList() {
          var rows = [];

          //SpecificRequest()
          this.getString = function() {
              return rows.join("\n");
          }

          this.add = function(value) {
              rows.push(value);
          }
      }

      //Adapter
      function TextAdapter() {
          StringList.apply(this);

          //Request()
          this.getText = function() {
              return this.getString();
          }
      }

      function getTextAdapter() {
          var adapter = new TextAdapter();
          adapter.add("line 1");
          adapter.add("line 2");
          return adapter;
      }

      //Client
      var adapter = getTextAdapter();
      var text = adapter.getText();
      //text: line 1
      //      line 2
      console.log(text);`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Bridge',
      code: `//Abstraction
      function TextMaker(imp) {
          var textImp = imp;

          this.getText = function () {
              return textImp.getString();
          }

          this.addLine = function (value) {
              textImp.appendLine(value);
          }
      }

      //Implementator
      function TextImp() {
          this._rows = [];

          this.getString = function() {
              return this._rows.join("\n");
          }
      }

      //ConcreteImplementator
      function TextBuilder() {
          TextImp.apply(this);

          this.appendLine = function(value) {
              this._rows.push(value);
          }
      }

      //ConcreteImplementator
      function HtmlBuilder() {
          TextImp.apply(this);

          this.appendLine = function(value) {
              this._rows.push("<span>" + value + "</span><br/>");
          }
      }

      function fillTextBuilder(textImp) {
          var textMaker = new TextMaker(textImp);
          textMaker.addLine("line 1");
          textMaker.addLine("line 2");
          return textMaker;
      }

      //Client
      var textMaker = fillTextBuilder(new TextBuilder());
      var text = textMaker.getText();
      //test: line 1
      //      line 2

      var htmlMaker = fillTextBuilder(new HtmlBuilder());
      var html = htmlMaker.getText();
      //html: <span>line 1</span><br/>
      //      <span>line 2</span><br/>

      console.log(text);
      console.log(html);`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Composite',
      code: `//Leaf
      function Сircle() {
          this.draw = function () {
              console.log("Draw circle");
          }
      }

      //Leaf
      function Square() {
          this.draw = function () {
              console.log("Draw square");
          }
      }

      //Composite
      function Image() {
          var graphics = [];

          this.add = function(graphic) {
              graphics.push(graphic);
          }

          this.remove = function(graphic) {
              var i = graphics.indexOf(graphic);
              graphics.splice(i, 1);
          }

          this.draw = function() {
              for (var i in graphics) {
                  if (graphics.hasOwnProperty(i)) {
                      graphics[i].draw();
                  }
              }
          }
      }

      //Client
      var image = new Image();
      image.add(new Сircle());
      image.add(new Square());
      var picture = new Image();
      picture.add(image);
      picture.add(new Image());
      picture.draw();`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Decorator',
      code: `//Component
      function Shape() {
          //Operation()
          this.getInfo = function () {
              return "shape";
          }

          this.showInfo = function () {
              console.log(this.getInfo());
          }
      }

      //ConcreteComponent
      function Square() {
          Shape.apply(this);

          //Operation()
          this.getInfo = function() {
              return "square";
          }
      }

      //Decorator
      function ShapeDecorator(shape)  {
          this.shape = shape;
          Shape.apply(this);

          //Operation()
          this.getInfo = function () {
              return this.shape.getInfo();
          }
      }

      //ConcreteDecorator
      function ColorShape(shape, color) {
          ShapeDecorator.apply(this, arguments);

          this.getInfo = function () {
              return color + " " + this.shape.getInfo();
          }
      }

      //ConcreteDecorator
      function ShadowShape(shape) {
          ShapeDecorator.apply(this, arguments);

          this.getInfo = function () {
              return this.shape.getInfo() + " with shadow";
          }
      }

      //Client
      var square = new Square();
      square.showInfo();
      //printed: square

      var colorShape = new ColorShape(square, "red");
      colorShape.showInfo();
      //printed: red square

      var shadowShape = new ShadowShape(colorShape);
      shadowShape.showInfo();
      //printed: red square with shadow`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Facade',
      code: `// Complex parts
      function Kettle() {
          this.turnOff = function() {
              console.log("Kettle turn off");
          }
      }

      function Toaster() {
          this.turnOff = function() {
              console.log("Toaster turn off");
          }
      }

      function Refrigerator() {
          this.turnOff = function() {
              console.log("Refrigerator turn off");
          }
      }

      //Facade
      function Kitchen(kettle, toaster, refrigerator) {
          this.kettle = kettle;
          this.toaster = toaster;
          this.refrigerator = refrigerator;

          this.off = function() {
              kettle.turnOff();
              toaster.turnOff();
              refrigerator.turnOff();
          }
      }

      var kettle = new Kettle();
      var toaster = new Toaster();
      var refrigerator = new Refrigerator();
      var kitchen = new Kitchen(
          kettle, toaster, refrigerator);
      kitchen.off();`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Flyweight',
      code: `//ConcreteFlyweight
      function Char(c) {
          this._c = c;

          //Operation(extrinsicState)
          this.printSpan = function (style) {
              var span = "<span style=\"" +
                  style + "\">" + c + "</span>";
              console.log(span);
          }
      }

      //FlyweightFactory
      function CharFactory() {
          var chars = {};

          //GetFlyweight(key)
          this.getChar = function(c) {
              var character = chars[c];
              if (character == undefined) {
                  character = new Char(c);
                  chars[c] = character;
              }
              return character;
          }
      }

      //Client
      var factory = new CharFactory();
      var charA = factory.getChar('A');
      charA.printSpan("font-size: 40pt");

      var charB = factory.getChar('B');
      charB.printSpan("font-size: 12");

      var charA1 = factory.getChar('A');
      charA1.printSpan("font-size: 12");

      var equal = charA === charA1;
      //equal is true

      console.log(equal);`,
    },
    {
      name: 'Patterns > Previous Versions > Structural patterns > Proxy',
      code: `//Subject
      function Graphic(fileName) {
          this._fileName = fileName;

          this.getFileName = function() {
              return this._fileName;
          }
      }

      //RealSubject
      function Image(fileName) {
          Graphic.apply(this, arguments);

          //Request()
          this.draw = function() {
              console.log("draw " + fileName);
          }
      }

      //Proxy
      function ImageProxy(fileName) {
          Graphic.apply(this, arguments);

          var getImage = function () {
              if (this._image == undefined) {
                  this._image = new Image(fileName);
              }
              return this._image;
          }

          this.draw = function() {
              getImage().draw();
          }
      }

      //Client
      var proxy = new ImageProxy("1.png");
      //operation without creating a RealSubject
      var fileName = proxy.getFileName();
      //forwarded to the RealSubject
      proxy.draw();

      console.log(fileName);`,
    },
    {
      name: 'Patterns > Structural patterns > Adapter (composition)',
      code: `//Adaptee
      class StringList {
          constructor() {
              this.rows = [];
          }

          //SpecificRequest()
          getString() {
              return this.rows.join("\n");
          }

          add(value) {
              this.rows.push(value);
          }
      }

      //Adapter
      class TextAdapter {
          constructor(rowList) {
              this.rowList = rowList;
          }

          //Request()
          getText() {
              return this.rowList.getString();
          }
      }

      function getTextAdapter() {
          let rowList = new StringList();
          let adapter = new TextAdapter(rowList);

              rowList.add("line 1");
          rowList.add("line 2");
          return adapter;
      }

      //Client
      let adapter = getTextAdapter();
      let text = adapter.getText();
      //text: line 1
      //      line 2
      console.log(text);`,
    },
    {
      name: 'Patterns > Structural patterns > Adapter (inheritance)',
      code: `//Adaptee
      class StringList {
          constructor() {
              this.rows = [];
          }

          //SpecificRequest()
          getString() {
              return this.rows.join("\n");
          }

          add(value) {
              this.rows.push(value);
          }
      }

      //Adapter
      class TextAdapter extends StringList {
          constructor() {
              super();
          }

          //Request()
          getText() {
              return this.getString();
          }
      }

      function getTextAdapter() {
          let adapter = new TextAdapter();
          adapter.add("line 1");
          adapter.add("line 2");
          return adapter;
      }

      //Client
      let adapter = getTextAdapter();
      let text = adapter.getText();
      //text: line 1
      //      line 2
      console.log(text);`,
    },
    {
      name: 'Patterns > Structural patterns > Bridge',
      code: `//Implementator
      class TextImp {
          constructor() {
              this._rows = [];
          }

          getString() {
              return this._rows.join("\n");
          }
      }

      //RefinedAbstraction
      class TextMaker {
          constructor(imp) {
              this.textImp = imp;
          }

          getText() {
              return this.textImp.getString();
          }

          addLine(value) {
              this.textImp.appendLine(value);
          }
      }

      //ConcreteImplementator
      class TextBuilder extends TextImp {
          constructor() {
              super();
          }

          appendLine(value) {
              this._rows.push(value);
          }
      }

      //ConcreteImplementator
      class HtmlBuilder extends TextImp {
          constructor() {
              super();
          }

          appendLine(value) {
              this._rows.push("<span>" + value + "</span><br/>");
          }
      }

      function fillTextBuilder(textImp) {
          let textMaker = new TextMaker(textImp);
          textMaker.addLine("line 1");
          textMaker.addLine("line 2");
          return textMaker;
      }

      //Client
      let textMaker = fillTextBuilder(new TextBuilder());
      let text = textMaker.getText();
      //test: line 1
      //      line 2

      let htmlMaker = fillTextBuilder(new HtmlBuilder());
      let html = htmlMaker.getText();
      //html: <span>line 1</span><br/>
      //      <span>line 2</span><br/>

      console.log(text);
      console.log(html)`,
    },
    {
      name: 'Patterns > Structural patterns > Composite',
      code: `//Leaf
      class Сircle {
          draw() {
              console.log("Draw circle");
          }
      }

      //Leaf
      class Square {
          draw() {
              console.log("Draw square");
          }
      }

      //Composite
      class Image {
          constructor() {
              this.graphics = [];
          }

          add(graphic) {
              this.graphics.push(graphic);
          }

          remove(graphic) {
              let i = this.graphics.indexOf(graphic);
              this.graphics.splice(i, 1);
          }

          draw() {
              for (let i in this.graphics) {
                  if (this.graphics.hasOwnProperty(i)) {
                      this.graphics[i].draw();
                  }
              }
          }
      }

      //Client
      let image = new Image();
      image.add(new Сircle());
      image.add(new Square());
      let picture = new Image();
      picture.add(image);
      picture.add(new Image());
      picture.draw();
      //printed:
      //Draw circle
      //Draw square`,
    },
    {
      name: 'Patterns > Structural patterns > Decorator',
      code: `//Component
      class Shape {
          //Operation()
          getInfo() {
              return "shape";
          }

          showInfo() {
              console.log(this.getInfo());
          }
      }

      //ConcreteComponent
      class Square extends Shape {
          constructor() {
              super();
          }

          //Operation()
          getInfo() {
              return "square";
          }
      }

      //Decorator
      class ShapeDecorator extends Shape {
          constructor(shape)  {
              super();
              this.shape = shape;
          }

          //Operation()
          getInfo() {
              return this.shape.getInfo();
          }
      }

      //ConcreteDecorator
      class ColorShape extends ShapeDecorator {
          constructor(shape, color) {
              super(shape);
              this.color = color;
          }

          getInfo() {
              return this.color + " " + this.shape.getInfo();
          }
      }

      //ConcreteDecorator
      class ShadowShape extends ShapeDecorator {
          constructor(shape) {
              super(shape);
          }

          getInfo() {
              return this.shape.getInfo() + " with shadow";
          }
      }

      //Client
      let square = new Square();
      square.showInfo();
      //printed: square

      let colorShape = new ColorShape(square, "red");
      colorShape.showInfo();
      //printed: red square

      let shadowShape = new ShadowShape(colorShape);
      shadowShape.showInfo();`,
    },
    {
      name: 'Patterns > Structural patterns > Facade',
      code: `// Complex parts
      class Kettle {
          turnOff() {
              console.log("Kettle turn off");
          }
      }

      class Toaster {
          turnOff() {
              console.log("Toaster turn off");
          }
      }

      class Refrigerator {
          turnOff() {
              console.log("Refrigerator turn off");
          }
      }

      //Facade
      class Kitchen {
          constructor(kettle, toaster, refrigerator) {
              this.kettle = kettle;
              this.toaster = toaster;
              this.refrigerator = refrigerator;
          }

          off() {
              this.kettle.turnOff();
              this.toaster.turnOff();
              this.refrigerator.turnOff();
          }
      }

      let kettle = new Kettle();
      let toaster = new Toaster();
      let refrigerator = new Refrigerator();
      let kitchen = new Kitchen(
          kettle, toaster, refrigerator);
      kitchen.off();`,
    },
    {
      name: 'Patterns > Structural patterns > Flyweight',
      code: `//ConcreteFlyweight
      class Char {
          constructor(c) {
              this._c = c;
          }

          //Operation(extrinsicState)
          printSpan(style) {
              let span = "<span style=\"" +
                  style + "\">" + this._c + "</span>";
              console.log(span);
          }
      }

      //FlyweightFactory
      class CharFactory {
          constructor() {
              this.chars = {};
          }

          //GetFlyweight(key)
          getChar(c) {
              let character = this.chars[c];
              if (character == undefined) {
                  character = new Char(c);
                  this.chars[c] = character;
              }
              return character;
          }
      }

      //Client
      let factory = new CharFactory();
      let charA = factory.getChar('A');
      charA.printSpan("font-size: 40pt");

      let charB = factory.getChar('B');
      charB.printSpan("font-size: 12");

      let charA1 = factory.getChar('A');
      charA1.printSpan("font-size: 12");

      let equal = charA === charA1;
      //equal is true

      console.log(equal);`,
    },
    {
      name: 'Patterns > Structural patterns > Proxy',
      code: `//Subject
      class Graphic {
          constructor(fileName) {
              this._fileName = fileName;
          }

          getFileName() {
              return this._fileName;
          }
      }

      //RealSubject
      class Image extends Graphic {
          constructor(fileName) {
              super(fileName);
          }

          //Request()
          draw() {
              console.log("draw " + this._fileName);
          }
      }

      //Proxy
      class ImageProxy extends Graphic {
          constructor(fileName) {
              super(fileName);
          }

          getImage() {
              if (this._image == undefined) {
                  this._image = new Image(this._fileName);
              }
              return this._image;
          }

          draw() {
              this.getImage().draw();
          }
      }

      //Client
      let proxy = new ImageProxy("1.png");
      //operation without creating a RealSubject
      let fileName = proxy.getFileName();
      //forwarded to the RealSubject
      proxy.draw();

      console.log(fileName);`,
    },
    {
      name: 'Regular expressions > Check match whole string',
      code: `let data2 = "aaaba";
      let pattern = /^a+b$/;

      let match1 = data1.match(pattern);
      let b1 = match1 !== null;
      //b1 is true

      let match2 = data2.match(pattern);
      let b2 = match2 !== null;
      //b2 is false

     `,
    },
    {
      name: 'Regular expressions > Regular expression options',
      code: `let data = "AaaA\n\raaaA";
      let pattern = /^a+$/im;
      let value = data.match(pattern);
      //value is "AaaA"`,
    },
    {
      name: 'Regular expressions > Replacement of the match',
      code: `let data = "Pi = 3.14, exponent = 2.718";
      let pattern = "(\\d+\\.\\d+)";
      data = data.replace(
          new RegExp(pattern, "g"), "<f>$1</f>");
      //data is "Pi = <f>3.14</f>, exponent = <f>2.718</f>`,
    },
    {
      name: 'Regular expressions > Replacement using a function',
      code: `//"world" in hexadecimal format
      let data = "x77x6Fx72x6Cx64";
      let regex = /x[0-9A-F]{2}/g;

      data = data.replace(regex, match => {
          let charCode = parseInt("0" + match, 16);
          return String.fromCharCode(charCode);
      });
      //data is "world"`,
    },
    {
      name: 'Regular expressions > Search all matches',
      code: `let data = "Pi = 3.14, exponent = 2.718";
      let pattern = /(\d+\.\d+)/g;
      data = data.match(pattern);
      //data is [3.14, 2.718]`,
    },
    {
      name: 'Regular expressions > Search for a match',
      code: `let data = "Pi is equal to 3.14";
      let pattern = /\d+\.\d+/;
      let match = data.match(pattern);
      if (match) {
          let pi = parseFloat(match[0]);
          //pi is 3.14
      }    `,
    },
    {
      name: 'Structures (records) > Constants',
      code: `//In Javascript there are no structures
      let boldLine = {
          'lineWidth': function () {
              return 10;
          }
      };
      Object.freeze(boldLine);

      let lineWidth1 = boldLine.lineWidth();
      //lineWidth is 10

      boldLine.lineWidth = 5;

      let lineWidth2 = boldLine.lineWidth();
      //lineWidth is 10`,
    },
    {
      name: 'Structures (records) > Constructors',
      code: `//In Javascript there are no structures
      function Point(x, y) {
          this.x = x;
          this.y = y;
      }

      let p1 = new Point(1, 2);
      let x1 = p1.x;
      //x1 is 1

      let p2 = new Point();
      let x2 = p2.x;
      //x2 is undefined`,
    },
    {
      name: 'Structures (records) > Definition and initialization',
      code: `//In Javascript there are no structures
      function Point(x, y) {
          this.x = x;
          this.y = y;
      }

      let p1 = { x: 0, y: 0 };
      let x1 = p1.x;
      //x1 is 0

      let p2 = new Point(1, 1);
      let x2 = p2.x;
      //x2 is 1`,
    },
    {
      name: 'Structures (records) > Fields and properties',
      code: `//In Javascript there are no structures
      let colorPoint = {
          x: 0, y: 0,
          color: "undefined"
      };

      console.log(colorPoint.color);`,
    },
    {
      name: 'Structures (records) > Methods',
      code: `//In Javascript there are no structures
      let p = {
          x: 1, y: 2,
          'toText': function() {
              return "x = " + this.x +
                  "; y = " + this.y;
          },
          'move': function(right, down) {
              this.x += right;
              this.y += down;
          }
      };

      let str1 = p.toText();
      //str1 is "x = 1; y = 2"

      p.move(5, -1);
      let str2 = p.toText();
      //str2 is "x = 6; y = 1"`,
    },
    {
      name: 'Structures (records) > Structure inside the structure',
      code: `let rect  = {
        point: {
            x: 3, y: 4
        },
        size: {
            width: 10,
            height: 12
        }
    };

    console.log("rect.point.x is",
        rect.point.x);
    console.log("rect.size.width is",
        rect.size.width);`,
    },
    {
      name: 'Structures (records) > Type members',
      code: `//In Javascript there are no structures
      function Setting() { }

      //type fields
      Setting.mode = 0;

      //type method
      Setting.setNextMode = function () {
          Setting.mode = (Setting.mode + 1) % 3;
      }

      Setting.mode = 3;
      Setting.setNextMode();
      //Setting.Mode is 1

      console.log("mode is", Setting.mode);`,
    },
    {
      name: 'Universal (dynamic) types > Call type members',
      code: `let d = "some string";
      d = d.toUpperCase();
      //d is "SOME STRING"

      d = 3.14;
      let s = d.toString();

      s = d.tostring(); //<- RunTime error`,
    },
    {
      name: 'Universal (dynamic) types > Initialization',
      code: `//Initialized by any type
      let d = "some string";
      d = 3.14;
      d = [2, 3, 5];
      d = new Date();
      `,
    },
    {
      name: 'Universal (dynamic) types > Return value',
      code: `function dynamicReturn(i)
      {
          switch (i) {
              case 1:
                  return 3.14;
              case 2:
                  return "any";
              case 3:
                  return true;
              default:
                  return null;
          }
      }

      let pi = dynamicReturn(1);
      //pi is 3.14
      let s = dynamicReturn(2);
      //s is "any"
      let b = dynamicReturn(3);
      //b is True`,
    },
    {
      name: 'Work with files > Basic operations > Check if the file exists',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.txt";

      //Asynchronously:
      fs.exists(filePath, (exists) => {
          if (exists) {
              console.log("File exist!");
          }
      });

      //Synchronously:
      if (fs.existsSync(filePath)) {
          console.log("File exist!");
      }`,
    },
    {
      name: 'Work with files > Basic operations > Copy a directory',
      code: `//using Node.js
      //npm i @types/node
      //npm install fs-extra
      const fse = require('fs-extra');

      let path = './data';
      let pathCopy = './data_copy';

      try {
          fse.copySync(path, pathCopy,
              { overwrite: true });
          console.log('Directory copied successfully!');
      } catch(e) {
          console.log('ErrorSync:', e.stack);
      }`,
    },
    {
      name: 'Work with files > Basic operations > Create a directory',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let path = './data';
      //Asynchronously:
      fs.mkdir(path, (err) => {
          if (err)
              console.log("Error:", err);
          else
                  console.log('successfully created!');
      });

      //Synchronously:
      if (!fs.existsSync(path)){
          fs.mkdirSync(path);
      }`,
    },
    {
      name: 'Work with files > Basic operations > Delete a directory',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let path = './data';

      //Asynchronously:
      fs.rmdir(path, (err) => {
          if (err)
              console.log("Error:", err);
          else
                  console.log('successfully deleted!');
      });

      //Synchronously:
      if (fs.existsSync(path)){
          fs.rmdirSync(path, { recursive: false });
      }`,
    },
    {
      name: 'Work with files > Basic operations > Delete a directory with data',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");
      let path = './data';

      //Synchronously:
      if (fs.existsSync(path)){
          fs.rmdirSync(path, { recursive: true });
          console.log('successfully deleted!');
      }`,
    },
    {
      name: 'Work with files > Basic operations > Delete a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require('fs');

      let filePath = "file.txt";

      fs.unlink(filePath, (err) => {
          if (err)
              console.log("Error:", err);
          else
              console.log('Deleted!');
      });`,
    },
    {
      name: 'Work with files > Basic operations > File copying',
      code: `//using Node.js
      //npm i @types/node
      const fs = require('fs');

      let filePath = "file.txt";
      let filePathTo = "file_copy.txt";

      fs.copyFile(filePath, filePathTo, (err) => {
          if (err)
              console.log("Error:", err);
          else
              console.log('File copied!');
      });`,
    },
    {
      name: 'Work with files > Basic operations > File moving',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.txt";
      let newFilePath = "file_new.txt";

      //Asynchronously:
      fs.rename(filePath, newFilePath, (err) => {
          if (err)
              console.log("Error:", err);
          else
                  console.log('File moved!');
      });

      //Synchronously:
      try {
          fs.renameSync(filePath, newFilePath);
          console.log('File moved successfully!');
      } catch(e) {
          console.log('ErrorSync:', e.stack);
      }`,
    },
    {
      name: 'Work with files > Basic operations > Get the working directory',
      code: `//__filename is the file name of the current module
      //__dirname is the directory name of the current module
      console.log(__filename);
      console.log(__dirname);`,
    },
    {
      name: 'Work with files > Basic operations > Getting file properties',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");
      const path = require("path");

      let filePath = "file.txt";

      let stats = fs.statSync(filePath);
      //file size
      let fileSize = stats.size;

      //file modification date
      let dateChanges = stats.mtime;

      //file creation date
      let creationDate = stats.birthtime;

      //can read, write, and execute
      let canRWE = (stats.mode &amp;&amp; fs.constants.S_IRWXU) ===
          fs.constants.S_IRWXU;

      //file extension
      let extension = path.extname(filePath);

      //file name
      let fileName = path.basename(filePath);

      //file name without extension
      let fileNameOnly = path.basename(filePath, extension);

      //file directory
      let fileDir = path.dirname(filePath);

      console.log("fileSize is", fileSize, "bytes");
      console.log("dateChanges is", dateChanges);
      console.log("creationDate is", creationDate);
      console.log("canRWE is", canRWE);
      console.log("extension is", extension);
      console.log("fileName is", fileName);
      console.log("fileNameOnly is", fileNameOnly);
      console.log("fileDir is", fileDir);`,
    },
    {
      name: 'Work with files > Basic operations > List of files in the directory',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let dir = __dirname;

      //Asynchronously:
      fs.readdir(dir, (err, files) => {
          if (err)
              throw err;
          files.forEach(file => {
              console.log(file);
          })
      });

      //Synchronously:
      fs.readdirSync(dir).forEach(file => {
          console.log(file);
      });`,
    },
    {
      name: 'Work with files > Binary files > Read array from a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.out";

      //Asynchronously:
      fs.readFile(filePath, (err, data) => {
          if (err)
              console.log("Error:", err);
          else {
              let numbers = new Int32Array(data.buffer);
              console.log("numbers is", numbers);
          }
      });`,
    },
    {
      name: 'Work with files > Binary files > Read dictionary from a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.out";

      let data = fs.readFileSync(
          filePath, 'utf8');

      let map = JSON.parse(data);
      console.log("map is", map);`,
    },
    {
      name: 'Work with files > Binary files > Reading a binary file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.out";

      //Asynchronously:
      fs.readFile(filePath, (err, data) => {
          if (err)
              console.log("Error:", err);
          else {
              console.log("data is", data);
              let bytes = Uint8Array.from(data);
              console.log("bytes is", bytes);
          }
      });`,
    },
    {
      name: 'Work with files > Binary files > Write array to a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let numbers = [1, 2, -3];

      let data = Int32Array.from(numbers);
      console.log("data is", data);
      let filePath = "file.out";

      //Asynchronously:
      fs.writeFile(filePath, data, (err) => {
          if (err)
              console.log("Error:", err);
          else
                  console.log('Data written to file!');
      })

      //Synchronously:
      fs.writeFileSync(filePath, data);`,
    },
    {
      name: 'Work with files > Binary files > Write dictionary to a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.out";

      let map = new Map([
          [ 1, "one" ],
          [ 2, "two" ]
      ]);

      let date = JSON.stringify([...map]);
      fs.writeFileSync(filePath,
          date, 'utf-8') ;`,
    },
    {
      name: 'Work with files > Binary files > Writing a binary file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let data = Uint8Array.from([120, 64, 97]);
      let filePath = "file.out";

      //Asynchronously:
      fs.writeFile(filePath, data, (err) => {
          if (err)
              console.log("Error:", err);
          else
                  console.log('Data written to file!');
      })

      //Synchronously:
      fs.writeFileSync(filePath, data);`,
    },
    {
      name: 'Work with files > Text files > Append text to a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.txt";

      //Asynchronously:
      fs.appendFile(filePath,
          '\nLine 4', function(err) {
          if (err)
              console.log("Error:", err);
          else
                  console.log('Appended!');
      });

      //Synchronously:
      try {
          fs.appendFileSync(filePath, '\nLine 3');
          console.log("Text added successfully!");
      } catch(e) {
          console.log('Error:', e.stack);
      }`,
    },
    {
      name: 'Work with files > Text files > Read file line by line',
      code: `//using Node.js
      //npm i @types/node

      const fs = require('fs');
      const readline = require('readline');

      let filePath = "file.txt";

      let lineReader = readline
          .createInterface({
          input: fs.createReadStream(filePath)
      });

      lineReader.on('line', (line) => {
          console.log('Line from file:', line);
      });`,
    },
    {
      name: 'Work with files > Text files > Read from a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.txt";

      //Asynchronously:
      fs.readFile(filePath,
          'utf8', function(err, text) {
          if (err)
              console.log("Error:", err);
          else
                  console.log(text);
      });

      //Synchronously:
      try {
          let data = fs.readFileSync(
              filePath, 'utf8');
          console.log(data.toString());
      } catch(e) {
          console.log('Error:', e.stack);
      }`,
    },
    {
      name: 'Work with files > Text files > Write to a file',
      code: `//using Node.js
      //npm i @types/node
      const fs = require("fs");

      let filePath = "file.txt";

      //Asynchronously:
      fs.writeFile(filePath,
          "Line 1\nLine 2", (err) => {
          if (err)
              console.log("Error:", err);
          else
                  console.log('Text written to file!');
      });

      //Synchronously:
      try {
          fs.writeFileSync(filePath, "Line 1\nLine 2");
          console.log("Successfully written!");
      } catch(e) {
          console.log('Error:', e.stack);
      }`,
    },
    {
      name: 'Work with files > XML files > Reading XML file',
      code: `//XML example:
      //<Lines>
      //    <Line Id="1">one</Line>
      //    <Line Id="2">two</Line>
      //</Lines>

      //using Node.js
      //npm i @types/node
      //npm install xml2js --save
      const fs = require("fs");
      const xml2js = require('xml2js');

      const parser = new xml2js
          .Parser({ attrkey: "ATTR" });

      // this example reads the file synchronously
      // you can read it asynchronously also
      let xml_string = fs
          .readFileSync("data/data.xml", "utf8");

      parser.parseString(xml_string, (err, result) => {
          if (err)
              console.log("Error:", err);
          else {
              console.log("line 1 value:",
                  result.Lines.Line[0]._);
              console.log("line 2 Id:",
                  result.Lines.Line[1].ATTR.Id);
          }
      });`,
    },
    {
      name: 'Work with simple types > Boolean > Conversion from a string',
      code: `let str1 = "true";
      let value1 = (str1.toLowerCase() == "true");
      //value1 is true

      let str2 = "false";
      let value2 = JSON.parse(str2);
      //value1 is false`,
    },
    {
      name: 'Work with simple types > Boolean > Conversion to a string',
      code: `let sunIsStar = true;
      let str1 = sunIsStar.toString();
      //str1 is "true"

      let earthIsStar = false;
      let str2 = earthIsStar.toString();
      //str2 is "false"`,
    },
    {
      name: 'Work with simple types > Boolean > Getting values',
      code: `let name = "Alex";
      let nameExists = name.length > 0;
      //name exists is true

      let number = 7;
      let isTen = number === 10;
      //isTen is false`,
    },
    {
      name: 'Work with simple types > Boolean > Logical operations',
      code: `let value1 = true;
      let value2 = false;

      let valueNot1 = !value1;
      //valueNot1 is false

      let valueNot2 = !value2;
      //valueNot2 is true

      let valueAnd = value1 &amp;&amp; value2;
      //valueAnd is false

      let valueOr = value1 || value2;
      //valueOr is true

      let valueXor = value1 ^ value2;
      //valueXor is 1`,
    },
    {
      name: 'Work with simple types > Character type > Converting to a number and back',
      code: `//In JavaScript there are no char
      //type, only string
      let charA = 'A';
      let intValue = charA.charCodeAt(0);
      //intValue is 65

      intValue++;
      let charB = String.fromCharCode(intValue);
      //charB is 'B'
    `,
    },
    {
      name: 'Work with simple types > Character type > Converting to a string',
      code: `//In JavaScript there are no char
      //type, only string
      let charA = 'A';

      let str = "character " + charA;
      //str is "character A"
   `,
    },
    {
      name: 'Work with simple types > Character type > Escape characters',
      code: `// \' for a single quote.
      let c1 = '\'';

      // \" for a double quote.
      let c2 = '\"';

      // \\ for a backslash.
      let c3 = '\\';

      // \0 for a null character.
      let c4 = '\0';

      // \b for a backspace.
      let c5 = '\b';

      // \n for a new line.
      let c6 = '\n';

      // \r for a carriage return.
      let c7 = '\r';

      // \t for a horizontal tab.
      let c8 = '\t';

      // \v for a vertical tab.
      let c9 = '\v';

      //  for a unicode character hex value.
      let c10 = '\x41'; // Symbol A

      console.log("c1 = \"" + c1 + "\".");
      console.log("c2 = \"" + c2 + "\".");
      console.log("c3 = \"" + c3 + "\".");
      console.log("c4 = \"" + c4 + "\".");
      console.log("c5 = \"" + c5 + "\".");
      console.log("c6 = \"" + c6 + "\".");
      console.log("c7 = \"" + c7 + "\".");
      console.log("c8 = \"" + c8 + "\".");
      console.log("c9 = \"" + c9 + "\".");
      console.log("c10 = \"" + c10 + "\".");`,
    },
    {
      name: 'Work with simple types > Character type > Getting from a string',
      code: `//In JavaScript there are no char
      //type, only string
      let str = "ABC";
      let charA = str.charAt(0);
      //charA is 'A'
      let charB = str.charAt(1);
      //charB is 'B'
      let charC = str.charAt(2);
      //charC is 'C'

      let charList = "";
      str.split("").forEach(function(c) {
          charList += c + ";";
      });
      //charList is "A;B;C;"`,
    },
    {
      name: 'Work with simple types > Date and time > Comparasion of dates',
      code: `let now = new Date();

      let yesterday = new Date();
      yesterday.setDate(now.getDate() - 1);

      let areEqual = now === yesterday;
      //areEqual is false

      let areLater = now > yesterday;
      //areLater is true

      let areEarlier = now < yesterday;
      //areEarlier is false`,
    },
    {
      name: 'Work with simple types > Date and time > Conversion from a string',
      code: `let stringDt = "1945-05-09 01:00";
      stringDt = stringDt.replace(" ", "T");
      //stringDate is "1945-05-09T01:00"
      let victoryDt = new Date(stringDt);
      //victoryDt is ‎5‎/‎9‎/‎1945‎ ‎1‎:‎00‎:‎00‎ ‎AM

      //first method
      let stringDate = "1945-05-09";
      let victoryDate1 = new Date(stringDate);
      //victoryDate1 is ‎5‎/‎9‎/‎1945‎ ‎12‎:‎00‎:‎00‎ ‎PM

      //second method
      //new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
      let parts = stringDate.split("-");
      let victoryDate2 = new Date(
          parts[0], parts[1] - 1, parts[2]);
      //victoryDate2 is ‎5‎/‎9‎/‎1945‎ ‎12‎:‎00‎:‎00‎ ‎AM

      console.log(victoryDt.toLocaleDateString("ru"));
      console.log(victoryDate1.toLocaleDateString("en"));
      console.log(victoryDate2.toLocaleDateString());`,
    },
    {
      name: 'Work with simple types > Date and time > Converting to a string',
      code: `let now = new Date();

      let options = {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit"
      };
      let shortStyleEn = now
          .toLocaleDateString("en-US", options);
      //shortStyleEn is "‎‎05‎/‎24‎/‎18‎ ‎5‎:‎36‎ ‎PM"

      options.hour = "2-digit";
      let shortStyleRu = now
          .toLocaleDateString("ru-Ru", options);
      //shortStyleRu is "‎‎‎25‎.‎05‎.‎18‎ 0‎8‎:‎54"

      let customStyle = now.toJSON().slice(0, 10);
      //customStyle is 2018-05-24`,
    },
    {
      name: 'Work with simple types > Date and time > Date changing',
      code: `let now = new Date();

      let yesterday = new Date();
      yesterday.setDate(now.getDate() - 1);

      let tomorrow = new Date(
          now.getTime() + 24 * 60 * 60 * 1000);

      let nextMonth = new Date();
      nextMonth.setMonth(now.getMonth() + 1);

      let nextYear = new Date();
      nextYear.setYear(now.getFullYear() + 1);`,
    },
    {
      name: 'Work with simple types > Date and time > Date initialization',
      code: `let year = 1945;
      let month = 5;
      let day = 9;
      let victoryDate = new Date(
          year, month - 1, day);

      console.log(victoryDate.toLocaleString("ru"));`,
    },
    {
      name: 'Work with simple types > Date and time > Getting of the current date',
      code: `let now = new Date();
      console.log(now);`,
    },
    {
      name: 'Work with simple types > Date and time > Getting of year , month , day',
      code: `let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      let dayOfWeek = now.getDay();
      `,
    },
    {
      name: 'Work with simple types > Date and time > The interval between the dates',
      code: `let victoryDate = new Date(1945, 4, 9);
      let now = new Date();

      let timeDiff = Math.abs(victoryDate - now);
      let msPerDay = 1000 * 3600 * 24;
      let days = Math.floor(timeDiff / msPerDay);
      //days is 26680

      let msPerMinute = 1000 * 60;
      let minutes = Math.floor(timeDiff / msPerMinute);
      //minutes is 38418424`,
    },
    {
      name: 'Work with simple types > Nullable types > Checking of presence of a value',
      code: `let n1 = 42;
      let exists1 = n1 != null;
      //exists1 is true

      let n2 = null;
      let exists2 = !!n2;
      //exists2 is false

      if (n1) {
          //will evaluate to true if value is not:
          //null
          //undefined
          //NaN
          //empty string ("")
          //0
          //false
          console.log("n1 defined");
      }`,
    },
    {
      name: 'Work with simple types > Nullable types > Initialization',
      code: `let number = 42;
      number = null;
      let charA = null;
      charA = "A";`,
    },
    {
      name: 'Work with simple types > Numbers > Double and Float > Arithmetic operations',
      code: `let d1 = 8.5 + 2.4;        // d1 is 10.9
      let d2 = 8.5 - 2.4;        // d2 is 6.1
      let d3 = 8.5 * 2;          // d3 is 17.0
      let d4 = 8.5 / 2;          // d4 is 4.25
      // mod
      let d5 = 7.5 % 2;          // d5 is 1.5
      let d6 = -7.5 % 2;         // d6 is -1.5
      // div
      let d7 = (7.5 / 2) | 0;    // d7 is 3
      let d8 = -d7;              // d8 is -3.0
      let d9 = 3.5;
      d9++;                      // d9 is 4.5
      d9--;                      // d9 is 3.5
      d9 += 1;                   // d9 is 4.5
      d9 -= 1;                   // d9 is 3.5
      let d10 = d9++;            // d10 is 3.5, d9 is 4.5
      let d11 = ++d9;            // d11 is 5.5, d9 is 5.5
      let d12 = Math.abs(-5.5);  // d12 is 5.5

      console.log("d1 =", d1);
      console.log("d2 =", d2);
      console.log("d3 =", d3);
      console.log("d4 =", d4);
      console.log("d5 =", d5);
      console.log("d6 =", d6);
      console.log("d7 =", d7);
      console.log("d8 =", d8);
      console.log("d9 =", d9);
      console.log("d10 =", d10);
      console.log("d11 =", d11);
      console.log("d12 =", d12);`,
    },
    {
      name: 'Work with simple types > Numbers > Double and Float > Conversion from a string',
      code: `//the first method
      let strPi = "3.14";
      let piFloat = parseFloat(strPi);

      //the second method
      let strExp = "2.71828";
      let exp = +strExp;

      //the third method
      let strHalf = "0,5";
      let half = +strHalf.replace(",", ".");

      console.log("piFloat =", piFloat);
      console.log("exp =", exp);
      console.log("half =", half);`,
    },
    {
      name: 'Work with simple types > Numbers > Double and Float > Conversion to a string',
      code: `let exp = 2.718281828;

      let s1 = exp.toString();
      //s1 is 2.718281828

      let s2 = exp.toFixed(3).toString();
      //s2 is 2,718

      let nf = new Intl.NumberFormat('ru-Ru',
          { maximumFractionDigits: 2 });
      let s3 = nf.format(exp * 1000000);
      //s3 is 2 718 281,83

      console.log("s1 =", s1);
      console.log("s2 =", s2);
      console.log("s3 =", s3);`,
    },
    {
      name: 'Work with simple types > Numbers > Double and Float > Converting to integer',
      code: `let pi = 3.1415926535;
      let intValue = pi | 0;
      //intValue is 3`,
    },
    {
      name: 'Work with simple types > Numbers > Double and Float > Getting random values',
      code: `let random = Math.random();
      //random double between 0.0 and 1.0`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > Rounding and truncating',
      code: `let pi = 3.1415;
      let piRound1 = Math.round(pi * 1000) / 1000;
      //piRound1 is 3.142
      let piRound2 = pi.toFixed(3);
      //piRound2 is 3.142

      let piTrunc = Math.floor(pi * 1000) / 1000;
      //piTrunc is 3.141

      let piCeil = Math.ceil(pi * 100) / 100;
      //piCeil is 3.15

      console.log("piRound1 =", piRound1);
      console.log("piRound2 =", piRound2);
      console.log("piTrunc =", piTrunc);
      console.log("piCeil =", piCeil);`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > Arithmetic operations',
      code: `let d1 = 8 + 2; //d1 is 10
      let d2 = 8 - 2; //d2 is 6
      let d3 = 8 * 2; //d3 is 16
      let d4 = 8 / 2; //d4 is 4
      let d5 = 5 % 2; //d5 is 1
      let d6 = -5 % 2; //d6 is -1
      let d7 = 1;
      d7++; //d7 is 2
      d7--; //d7 is 1
      let d8 = d7++; //d8 is 1, d7 is 2
      let d9 = ++d7; //d9 is 3, d7 is 3

      console.log("d1 =", d1);
      console.log("d2 =", d2);
      console.log("d3 =", d3);
      console.log("d4 =", d4);
      console.log("d5 =", d5);
      console.log("d6 =", d6);
      console.log("d7 =", d7);
      console.log("d8 =", d8);
      console.log("d9 =", d9);`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > BigInteger',
      code: `//maximum safe int value is 2^53
      let a = 9223372036854775807;
      // a is 9 223 372 036 854 776 000

      let b = 255;
      let c = 1000;

      let a1 = a * c;
      // a1 is 9.223372036854776e+21

      let a2 = (a1 + c) / b;
      // a2 is 36170086419038335000

      //ECMAScript 6 feature
      //Support: TC39: Stage 3, Node: 10.4+, Chrome: 67+, Firefox: 68+
      let bigI = BigInt( 9007199254740991 );
      console.log( large ); // 9007199254740991n

      let A = 9_007_199_254_740_991n;

      let B = A + 10n;
      //B is 9_007_199_254_741+001

      console.log("a1 =", a1);
      console.log("a2 =", a2);
      console.log("B =", B);`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > Bitwise operations',
      code: `let a = 5; //0101
      let b = 6; //0110

      //And
      let c1 = a &amp; b;
      //c1 is 4 (0100)

      //Or
      let c2 = a | b;
      //c2 is 7 (0111)

      //Xor
      let c3 = a ^ b;
      //c3 is 3 (0011)

      //shift right
      let c4 = a >> 1;
      //c4 is 2 (0010)

      //shift left
      let c5 = b << 1;
      //c5 is 12 (1100)

      //bits invertion
      let c6 = ~b;
      //c6 is -7 (-111)

      console.log("c1 =", c1);
      console.log("c2 =", c2);
      console.log("c3 =", c3);
      console.log("c4 =", c4);
      console.log("c5 =", c5);
      console.log("c6 =", c6);`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > Conversion from a string',
      code: `let strNumber = "42";
      let number1 = Number(strNumber);
      //number1 is 42

      let number2 = parseInt(strNumber);
      //number2 is 42

      let number3 = +strNumber;
      //number3 is 42
`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > Converting to a string',
      code: `let number = 42;
      let s1 = number.toString();
      //s1 is "42"

      let s2 = "" + number;
      //s2 id "42"

      let s3 = ("00" + number).slice(-3);
      //s3 is "042"`,
    },
    {
      name: 'Work with simple types > Numbers > Integer > Getting random values',
      code: `function getRandomInt(min, max) {
        return Math.floor(
            Math.random() * (max - min + 1)) + min;
    }

    let random = getRandomInt(0, 2);
    //random is 0, 1 or 2    `,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > Numeral System',
      code: `//decimal number system
      let decimal = 42;

      //octal number system
      let octal = 042;
      //octal is 34

      //hexadecimal number system
      let hexadecimal = 0x42;
      //hexadecimal is 66

      //binary number system
      let binary = 0b1010;
      //binary is 10

      //42 to decimal string
      let sDecimal = decimal.toString();
      //sDecimal is "42"

      //42 to octal string
      let sOctal = decimal.toString(8);
      //sOctal is "52"

      //42 to hexadecimal string
      let sHexadecimal = decimal.toString(16);
      //sHexadecimal is "2a"

      //42 to binary string
      let sBinary = decimal.toString(2);
      //sBinary is "101010"

      console.log("octal =", octal);
      console.log("hexadecimal =", hexadecimal);
      console.log("binary =", binary);
      console.log("sDecimal =", sDecimal);
      console.log("sOctal =", sOctal);
      console.log("sHexadecimal =", sHexadecimal);
      console.log("sBinary =", sBinary);`,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > Decimal logarithm',
      code: `let number = 1000;
      let result = Math.log10(number);
      //result is 3`,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > Exponentiation',
      code: `let number = 8;
      let power = 3;
      let result = Math.pow(number, power);
      //result is 512.0`,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > Logarithm',
      code: `let number = 512;
      let logBase = 8;
      let result = Math.log(number) / Math.log(logBase);
      //result is 3`,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > Sine , cosine and tangent',
      code: `let sin90 = Math.sin(Math.PI/2);
      //sin90 is 1

      let cos180 = Math.cos(Math.PI);
      //cos180 is -1

      let tan45 = Math.tan(Math.PI/4);
      //tan45 is 0.9999999999999999`,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > Square root',
      code: `let number = 100;
      let result = Math.sqrt(number);
      //result is 10`,
    },
    {
      name: 'Work with simple types > Numbers > Mathematical operations > min and max values',
      code: `let minValue = Math.min(2, 1, 3);
      //minValue is 1

      let maxValue = Math.max(2, 1, 3);
      //maxValue is 3`,
    },
    {
      name: 'Work with simple types > Strings > Change the case of characters',
      code: `let str = "Lower and upper";

      let lower = str.toLowerCase();
      //lower is "lower and upper"

      let upper = str.toUpperCase();
      //upper is "LOWER AND UPPER"`,
    },
    {
      name: 'Work with simple types > Strings > Character replacement',
      code: `let str = "1-3-2";
      let arStr = str.split("");
      arStr[2] = '2';
      arStr[4] = '3';
      str = arStr.join("");
      //str is "1-2-3"
      `,
    },
    {
      name: 'Work with simple types > Strings > Characters count',
      code: `function Reverse(word) {
        //Characters count
        let charCount = word.length;
        let result = "";
        for (let i = charCount - 1; i >= 0; i--)
        {
            result += word[i];
        }
        return result;
    }

    let stringReverse = Reverse("string");
    //stringReverse = "gnirts"

    console.log(stringReverse);`,
    },
    {
      name: 'Work with simple types > Strings > Converting to a number',
      code: `//to int
      let strNumber = "42";
      //the first method
      let number = Number(strNumber);
      //the second method
      number = parseInt(strNumber);

      //to Double and Float
      //the first method
      let strPi = "3.14";
      let pi = parseFloat(strPi);

      //the second method
      let strExp = "2.71828";
      let exp = +strExp;

      //the third method
      let strHalf = "0,5";
      let half = +strHalf.replace(",", ".");

      console.log("number =", number);
      console.log("pi =", pi);
      console.log("exp =", exp);
      console.log("half =", half);`,
    },
    {
      name: 'Work with simple types > Strings > Empty strings',
      code: `//Empty strings
      let someEmptyString = "";
      let anotherEmptyString = '';

      if (!anotherEmptyString) {
          console.log("string is empty");
      }`,
    },
    {
      name: 'Work with simple types > Strings > Escaping characters',
      code: `// \t Insert a tab.
      // \b Insert a backspace.
      // \n Insert a newline.
      // \r Insert a carriage return.
      // \' or ' Insert a single quote.
      // \" Insert a double quote.
      // \\ Insert a backslash character.

      let str = "She said \"Hello!\" to me.";
      //str is "She said "Hello!" to me."`,
    },
    {
      name: 'Work with simple types > Strings > Getting substring',
      code: `let str = "one way ticket";
      let way = str.substring(4, 7);
      //way is "way"
      `,
    },
    {
      name: 'Work with simple types > Strings > Iterating over a string',
      code: `et str = "level";

      for (let c of str) {
          console.log(c);
      }

      //Iterating with index
      for (let i = 0; i < str.length; i++) {
          console.log(str[i]);
      }`,
    },
    {
      name: 'Work with simple types > Strings > Removing spaces',
      code: `let str = "  Spaces  ";

      let trimStr = str.trim();
      //trimStr is "Spaces"

      console.log("\"" + trimStr + "\"");`,
    },
    {
      name: 'Work with simple types > Strings > Replace multiple characters',
      code: `let str = "1-/[=2=/]-3";
      let separators = /[=/\\[]|]/;
      let arStr = str.split(separators);
      str = arStr.join("");
      //str is "1-2-3"
      `,
    },
    {
      name: 'Work with simple types > Strings > Split into an array',
      code: `let strData = "1981|Kim Victorya|engineer";
      let arrData = strData.split("|");
      let year = parseInt(arrData[0]);
      //year is 1981
      let fullName = arrData[1];
      //name is "Kim Victorya"
      let position = arrData[2];
      //position is "engineer"`,
    },
    {
      name: 'Work with simple types > Strings > Strings comparison',
      code: `let first = "A";
      let second = "B";
      let third = 'A';

      let areEqual1 = first === second;
      //areEqual1 is false

      let areNotEqual = first !== second;
      //areNotEqual is true

      let areEqual2 = first.localeCompare(third) === 0;
      //areEqual2 is true

      let moreThan = first.localeCompare(second) > 0;
      //moreThan is False`,
    },
    {
      name: 'Work with simple types > Strings > Strings concatenating',
      code: `let s1 = "three";
      let s2 = "two";
      let s3 = s1 + ", " + s2;
      s3 += ", one";
      let sGo = s3.concat(", ", "go!");
      //sGo is "three, two, one, go!"`,
    },
    {
      name: 'Work with simple types > Strings > String list concatenating',
      code: `let numbers =  ["one", "two", "three"];
      let numberList = numbers.join("; ");
      //numberList is "one; two; three"

      console.log(numberList);`,
    },
    {
      name: 'Work with simple types > Strings > Substring index',
      code: `let dataString = "Substring index";
      let index = dataString.indexOf("string");
      // index is 3`,
    },
    {
      name: 'Work with simple types > Strings > Substring inserting',
      code: `String.prototype.insert = function (index, string) {
        return this.slice(0, index) +
            string + this.slice(index);
    };

    let dataString = "string";

    dataString = dataString.insert(0, "Sub");
    //dataString is "Substring"
    console.log(dataString);

    dataString = dataString.insert(9, "!");
    //dataString is "Substring!"
    console.log(dataString);

    dataString = dataString.insert(9, " inserting");
    //dataString is "Substring inserting!"
    console.log(dataString);`,
    },
    {
      name: 'Work with simple types > Strings > Substring removing',
      code: `let dataString = "Substring removing!";

      //there is no "remove" method
      dataString = dataString.slice(0, 9) +
          dataString.slice(18);
      //dataString is "Substring!"
      console.log(dataString);

      dataString = dataString.slice(3);
      //dataString is "string!"
      console.log(dataString);`,
    },
    {
      name: 'Work with simple types > Strings > Substring replacement',
      code: `let startString = "3, 2, 1, go!";
      startString = startString
          .replace("1", "one")
          .replace("2", "two")
          .replace("3", "three");
      //startString = "three, two, one, go!"
      console.log(startString);

      //replace all
      let oneString = "1 1 1";
      oneString = oneString
          .replace(new RegExp("1", "g"), "one");
      //oneString is "one one one"
      console.log(oneString);`,
    },
    {
      name: 'Work with simple types > Strings > Substring searching',
      code: `let dataString = "Substring search";
      if (dataString.includes("string")) {
          console.log("dataString contain \"string\"");
      }
      if (dataString.indexOf("Sub") === 0) {
          console.log("dataString starts with \"Sub\"");
      }
      let search = "search";
      if (dataString.indexOf(search) === dataString.length - search.length) {
          console.log("dataString ends with \"search\"");
      }`,
    },
    {
      name: 'Work with simple types > Tuple ',
      code: `//In JavaScript there are no
      //tuple type
      let one = [1, "one"];
      let numberOne = one[0];
      // numberOne is 1
      let nameOne = one[1];
      // nameOne is "one"

      let two = { number: 2, name: "two" };
      let numberTwo = two.number;
      // numberTwo is 2
      let nameTwo = two.name;
      // nameTwo is "two"`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
