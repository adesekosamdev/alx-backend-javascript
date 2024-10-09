export default function getListStudentIds(array) {
  let arr = [];
  if (Array.isArray(array)) {
    arr = array.map((x) => x.id);
  }
  return arr;
}
