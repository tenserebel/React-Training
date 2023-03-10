export const arraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase();
  return array.filter((value) => {
    return value.name.toLowerCase().match(new RegExp(searchTerm, "g"));
  });
};

export const stockCheck = (array) => {
  return array.filter((value) => {
    return value.instock === true;
  });
};
