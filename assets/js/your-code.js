export function getAllDogs() {
  return window.fetch("/dogs");
}

export function getDogNumberTwo() {
  return window.fetch("/dogs/2");
}

export function postNewDog() {
  // Your code here
}

export function postNewDogV2(name, age) {
  // Your code here
}

export function deleteDog(id) {
  // Your code here
}
