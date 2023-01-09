//  velg andre element i arr
//  Sammenligne med elem før det og swap om nødvendig
//  Fortsett til neste element og hvis det ikke er i riktig posisjon:
//  loop gjennom sorterte delen, (venstre) og plasser
//  elementet i riktig posisjon

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = currentVal;
  }

  return arr;
}

console.log(insertionSort([4, 2, 1, 11, 44, 23]));
