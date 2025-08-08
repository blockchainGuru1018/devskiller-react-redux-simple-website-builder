/**
 * UUID v4 generator.
 * Not perfect, but good enough. Based on https://stackoverflow.com/a/2117523
 */
function uuidv4() {
  /* eslint-disable */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  /* eslint-enable */
}

export const uuid = uuidv4
