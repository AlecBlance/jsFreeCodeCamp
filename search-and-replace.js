function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) after = after.charAt(0).toUpperCase() + after.slice(1);
  else after = after.toLowerCase();
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));