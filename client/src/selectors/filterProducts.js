const filterProducts = (catalogArr, filtersObj) => {
  return catalogArr.filter((item) => {
    const priceRange = filtersObj.priceRange.length ? filtersObj.priceRange.includes(item.tags.priceRange) : item.tags.priceRange;
    const brand = filtersObj.brand.length ? filtersObj.brand.includes(item.tags.brand) : item.tags.brand;
    const repair = filtersObj.repair.length ? filtersObj.repair.includes(item.tags.repair) : item.tags.repair;
    const replist = filtersObj.replist.length ? filtersObj.replist.includes(item.tags.replist) : item.tags.replist;
  
    return priceRange && brand && repair && replist;
  });
};

export default filterProducts;