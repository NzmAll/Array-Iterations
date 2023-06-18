// //1. Find
// function customFind(arr, predicate) {
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i])) {
//       return arr[i];
//     }
//   }
//   return undefined;
// }

// //2. Filter
// function customFilter(arr, predicate) {
//   const filteredArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i])) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// //3. Sort
// function customSort(arr) {
//   const sortedArray = [...arr];
//   sortedArray.sort();
//   return sortedArray;
// }

// //4. Some
// function customSome(arr, predicate) {
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// //5. Every
// function customEvery(arr, predicate) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!predicate(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// //6. forEach
// function customForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// //7. Map
// function customMap(arr, callback) {
//   const mappedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     mappedArray.push(callback(arr[i]));
//   }
//   return mappedArray;
// }

// //8. FindIndex
// function customFindIndex(arr, predicate) {
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i])) {
//       return i;
//     }
//   }
//   return -1;
// }
