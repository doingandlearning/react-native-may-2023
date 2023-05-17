export function reverseString(string) {
  return string.split("").reverse().join("");
}

export function createUserObject(name, job) {
  return {
    name,
    job,
    company: "Howdens",
  };
}
