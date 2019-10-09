export const min = value => {
  return value.length >= 3;
};

export const isANumber = value => {
  return !isNaN(value);
};

export const isAHttp = value => {
  return value.match(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );
};
