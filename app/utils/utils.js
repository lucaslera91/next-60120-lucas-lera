export const findItem = (list, find) =>
  list.filter((item) => item.slug === find);

export const hasFalsyAttributes = (obj) =>
  Object.values(obj).some((value) => !value);

export const generateId = (prefix = "id") => {
  const uniqueId = Date.now().toString(36);
  return `${prefix}-${uniqueId}`;
};
