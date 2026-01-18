// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]

const result1 = loc.map((locEl, index) => {
    return locEl.location_key.map((locKey) => {
        return {
            config_key: bulkConfig[index].dataValues.config_key,
            location_key: locKey,
            autoassign: locEl.autoassign
        }
    })
}).reduce((arr,acc) => arr.concat(acc), []);

const result2 = loc.flatMap((locEl, index) => {
    return locEl.location_key.map((locKey) => {
        return {
            config_key: bulkConfig[index].dataValues.config_key,
            location_key: locKey,
            autoassign: locEl.autoassign
        }
    })
})

console.log(result1);
console.log(result2);