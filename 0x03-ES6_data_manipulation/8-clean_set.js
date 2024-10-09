const cleanSet = (set, string) => {
  if (!string || !string.length) return '';
  let value = '';
  for (const word of set) {
    if (word && word.startsWith(string)) {
      value += value.length === 0 ? word.replace(string, '') : word.replace(string, '-');
    }
  }
  return value;
};

export default cleanSet;
