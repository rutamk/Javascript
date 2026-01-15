const typeOf = (input) =>
  Object.prototype.toString.call(input).slice(8, -1).toLowerCase();

const shallowCompare = (source, target) => {
    if (source === null || target === null) {
        return source === target;
    }

    const type = typeOf(source);
    if (type !== typeOf(target)) return false;

    if (type === "array") {
        return source.length === target.length &&
               source.every((el, i) => el === target[i]);
    }

    if (type === "object") {
        const keys = Object.keys(source);
        return keys.length === Object.keys(target).length &&
               keys.every(key => source[key] === target[key]);
    }

    if (type === "date") {
        return source.getTime() === target.getTime();
    }

    return source === target;
};

console.log(shallowCompare(1,1),
shallowCompare([1],[1]),
shallowCompare({a:1},{a:1}));