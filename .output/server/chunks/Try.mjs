const Try = (promise) => {
  return promise.then((result) => {
    return [false, result];
  }).catch((err) => {
    return [err, false];
  });
};

export { Try as T };
//# sourceMappingURL=Try.mjs.map
