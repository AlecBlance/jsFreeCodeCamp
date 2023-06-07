function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(str);
  return str.toLowerCase().split("").reverse("").join("") == str;
}

palindrome("A man, a plan, a canal. Panama");