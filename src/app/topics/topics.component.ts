import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
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
    console.log('Sort Items:',sortItems);`
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
    console.log(sortItems);`
    },
    {
      name:'Algorithms > Sorting > Merge Sort',
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
    console.log(sortItems);`
    },
    {
      name:'Algorithms > Sorting > Quick Sort',
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
      `
    },
    {
      name:'Algorithms > Sorting > Radix Sort',
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
    console.log(sortItems);`
    },
    {
      name:'Algorithms > Search > Binary Search',
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
      //print null`
    },
    {
      name:'Algorithms > Search > Fast linear Search',
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
      //print null`
    },
    {
      name:'Algorithms > Search > Interpolation Search',
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
      `
    },
    {
      name:'Algorithms > Search > Linear Search',
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
      //print null`
    },
    {
      name:'Arrays > Adding and removing of elements',
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
      console.log(primeNumbers);`
    },
    {
      name:'Arrays > Array copying',
      code: `let numbers1 = [ 1, 2, 3, 4, 5 ]
      let numbers2 = numbers1.slice()
      //numbers2 is [ 1, 2, 3, 4, 5 ]

      //ECMAScript 6 feature
      let numbers3 = [...numbers1];
      //numbers3 is [ 1, 2, 3, 4, 5 ]

      numbers1[0] = 100
      console.log('numbers1 is ',numbers1)
      console.log('numbers2 is ',numbers2)
      console.log('numbers3 is' ,numbers3)`
    },
    {
      name:'Arrays > Array length',
      code: `let numbers = [ 1, 2, 3 ];
      let len = numbers.length;
      //len is 3

      console.log('len is ',len);`
    },
    {
      name:'Arrays > Array with a default value',
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
      console.log("fives is", fives)`
    },
    {
      name:'Arrays > Arrays comparing',
      code: `let ar1 = [ 1, 2, 4, 3 ];
      let ar2 = [ 1, 2, 3, 4, 5 ];

      let diff = ar2.filter(i => ar1.indexOf(i) < 0);
      //diff is [ 5 ]
      console.log('diff is', diff);`
    },
    {
      name:'Arrays > Arrays initialization',
      code: `//Empty array
      let n1 = [];
      let n2 = new Array();

      // Single-dimensional array
      let n3 = [1, 2, 3];
      let s1 = ["1", "2", "3"];

      // Multidimensional array.
      let n4 = [[1, 2], [3, 4, 5]];
      n4[1][2] = 7;

      console.log("n4 is", n4);`
    },
    {
      name:'Arrays > Arrays merging ',
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
      console.log("allNumbers2 is", allNumbers2);`
    },
    {
      name:'Arrays > Checking equality of arrays',
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
      }`
    },
    {
      name:'Arrays > Converting of an array',
      code: `let numbers = [1, 2, 3, 4, 5];
      let numbers2 = numbers
          .map(function (n) { return n * 2 });
      //numbers2 is [ 2, 4, 6, 8, 10 ]
      console.log('numbers2 is ',numbers2);

      //ECMAScript 6 feature
      let numbers3 = numbers.map(n => n * 3);
      //numbers3 is [ 3, 6, 9, 12, 15 ]
      console.log('numbers3 is ',numbers3)`
    },
    {
      name:'Arrays > Dynamic arrays',
      code: `let count = 15;
      let arInt1 = new Array(count);
      arInt1[0] = 1;
      //arInt1 is [1,,,,,,,,,,,,,,]
      console.log('arInt1 is ',arInt1);

      //ECMAScript 6 feature
      let arInt2 = new Array(count).fill(0);
      arInt2[0] = 1;
      //arInt2 is [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      console.log('arInt2 is ',arInt2);`
    },
    {
      name:'Arrays > Filtering of elements',
      code: `let numbers = [1, 2, 3, 4, 5];
      let oddItems = numbers.filter(function(i) {
              return i % 2 === 1;
      });
      //oddItems is [ 1, 3, 5 ]
      console.log('oddItems is ',oddItems);

      //ECMAScript 6 feature
      let evenItems = numbers.filter(i => i % 2 === 0)
      //evenItems is [ 2, 4 ]
      console.log('evenItems is ',evenItems);`
    },
    {
      name:'Arrays > Finding an array element',
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
      console.log('index5 is ',index5);`
    },
    {
      name:'Arrays > Getting Min and Max values',
      code: `let numbers = [2, 3, 5, 7, 11];
      let min = Math.min( ...numbers )
      //min is 2
      let max = Math.max( ...numbers )
      //max is 11

      console.log("min = " + min);
      console.log("max = " + max);`
    },
    {
      name:'Arrays > Getting part of an array',
      code: `let numbers = [2, 3, 5, 7, 11];
      let first2 = numbers.slice(0, 2);
      //first2 is [ 2, 3 ]
      let last3 = numbers.slice(2, numbers.length);
      //last3 is [ 5, 7, 11 ]

      console.log('first2 is ',first2);
      console.log('last3 is ',last3);`
    },
    {
      name:'Arrays > Getting unique values',
      code: `let numbers = [1, 3, 2, 1, 3];

      function isUnique(value, index, self) {
          return self.indexOf(value) === index;
      }

      let unique = numbers.filter(isUnique);
      //unique is [1, 3, 2]

      console.log('unique is' ,unique);`
    },
    {
      name:'Arrays > Iterating over an array',
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
      console.log('str2 is ',str2);`
    },
    {
      name:'Arrays > Iterating over an array with index',
      code: `let numbers = [2, 3, 5, 7, 11, 13, 17];
      let str = "";
      let len = numbers.length;
      for (let i = 0; i < len; i++) {
          str += (str === "" ? "" : "; ") + numbers[i];
          //Do something
      }
      //str is "2; 3; 5; 7; 11; 13; 17"

      console.log('str is ',str);`
    },
    {
      name:'Arrays > Sorting of elements',
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
      console.log('numbers is ', numbers);`
    },
    {
      name:'Arrays > every() and some() methods',
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
      console.log(allOdd);`
    },

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
