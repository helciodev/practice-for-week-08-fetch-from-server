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
    body: new URLSearchParams("name=marvel&age=5"),
  });
}

export function postNewDogV2(name, age) {
  return window.fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(`name=${name}&age=${age}`),
  });
}

export function deleteDog(id) {
  return window.fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: { AUTH: "ckyut5wau0000jyv5bsrud90y" },
    body: `id=${id}`,
  });
}
