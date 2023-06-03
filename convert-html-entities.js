function convertHTML(str) {
    const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.split("").map(each => htmlEntities[each] || each).join(""); 
}

convertHTML("Dolce & Gabbana");