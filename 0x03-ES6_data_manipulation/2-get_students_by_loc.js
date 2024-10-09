export default function getStudentsByLocation(array, city) {
  let arr = [];

  if (Array.isArray(array)) {
    arr = array.filter((x) => x.location == city);
  }
  return arr;
}
