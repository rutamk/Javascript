const typeOf = (input) =>
  Object.prototype.toString.call(input).slice(8, -1).toLowerCase();

const deepCompare = (source, target) => {
    if (source === null || target === null) {
        return source === target;
    }

    const type = typeOf(source);
    if (type !== typeOf(target)) return false;

    if (type === "array") {
        return source.length === target.length &&
               source.every((el, index) => deepCompare(el, target[index]));
    }

    if (type === "object") {
        const keys = Object.keys(source);
        return keys.length === Object.keys(target).length &&
               keys.every(key => deepCompare(source[key], target[key]));
    }

    if (type === "date") {
        return source.getTime() === target.getTime();
    }

    return source === target;
};

console.log(deepCompare(1,1),
deepCompare([1],[1]),
deepCompare({a: {b: 1}},{a:{b: 1}}),
deepCompare({a: {b: 1}},{a:{b: 2}}));

