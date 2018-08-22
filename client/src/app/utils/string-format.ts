export const formatError = (value: string, field: string, details: object) => {
  value = value.replace('{field}', field);

  let copying = false;
  let word: string[] = [];
  value.split('').forEach((l, index) => {
    if (l === '}') {
      const wordJoin = word.join('');
      value = value.replace(`{${wordJoin}}`, details[wordJoin] || '');
      word = [];
      copying = false;
    } else if (copying) {
      word.push(l);
    } else if (l === '{') {
      copying = true;
    }
  });

  value = value.charAt(0).toUpperCase() + value.slice(1);

  return value;
};
