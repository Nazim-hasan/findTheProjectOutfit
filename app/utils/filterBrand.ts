import Brand from "models/brand";
export default function filterBrand(
  Brands: Brand[],
  deleted: boolean,
): Brand[] {
  return Brands.filter(brand => brand.isDeleted === deleted);
}
