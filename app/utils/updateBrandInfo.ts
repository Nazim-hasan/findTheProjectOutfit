import Brand from "models/brand";

export function deleteBrand(brands: Brand[], id: number, isDeleted: boolean): Brand[] {
  return brands.map(brand => {
    if (brand.id === id) {
      return {
        ...brand,
        isDeleted: isDeleted,
      };
    }
    return brand;
  });
}
export function toggleFollowBrand(brands: Brand[], id: number): Brand[] {
  return brands.map(brand => {
    if (brand.id === id) {
      return {
        ...brand,
        isFollowed: !brand.isFollowed // Toggle the value of isFollowed
      };
    }
    return brand;
  });
}