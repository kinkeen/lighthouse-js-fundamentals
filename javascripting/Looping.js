const range = function(start, end, step) {
    if (
      [start, end, step].some(arg => arg === undefined)
      || start > end
      || step < 0
    ) {
      return [];
    }
    const result = []
    for (let i = start; i <= end; i += step) {
      result.push(i)
    }
    return result;
  }