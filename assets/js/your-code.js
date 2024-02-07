export function getAllDogs() {
  return window.fetch("/dogs");
}

export function getDogNumberTwo() {
  return window.fetch("/dogs/2");
}

export function postNewDog() {
  return window.fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "name=marvel&age=5",
  });
}

export function postNewDogV2(name, age) {
  // Your code here
}

export function deleteDog(id) {
  // Your code here
}
