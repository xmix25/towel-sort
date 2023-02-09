// You should implement your task here.

module.exports = function towelSort(matrix) {
    return !matrix
        ? []
        : matrix.reduce((arr, element, index) => {
              return index % 2 === 0
                  ? arr.concat(element)
                  : arr.concat(element.reverse());
          }, []);
};
