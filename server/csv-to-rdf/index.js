const parser = require("rocketrml");

const doMapping = async () => {
  const options = {
    toRDF: true,
    verbose: true,
  };
  const result = await parser
    .parseFile("mappingRule/CSVmapping.ttl", "convertedRDF/CSVout.n3", options)
    .catch((err) => {
      console.log(err);
    });
  // console.log(result);
};

doMapping();
