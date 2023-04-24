const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { EnapsoGraphDBClient } = require("@innotrade/enapso-graphdb-client");
const natural = require("natural");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/search", (req, res) => {
  const sentence = req.body.sentence;
  // console.log(sentence);
  const query = `select distinct ?g ?make ?2020_Census_Tract ?Base_MSRP ?Clean_Alternative_Fuel_Vehicle ?congressionalDistricts ?DOL_Vehicle_ID ?Electric_Utility ?electricRange ?model ?modelYear ?type ?Vehicle_Location ?VIN ?WAOFM_GIS_Legislative_District_Boundary ?bodyAssembleLocation ?bodyType ?brakesType ?engineAssembleLocation ?engineConfiguration ?fuelCapacity ?fuelInjection ?horsePower ?oilCapacity ?transmissionType
  where  {
      {
          graph ?g{
              ?iri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/model/electric/vehciles#Vehicle>.
              optional{
                  ?iri <http://www.semanticweb.org/model/electric/vehciles#hasRegister> ?hasRegister.
                  ?hasRegister <http://www.semanticweb.org/model/electric/vehciles#city> ?registerCity.
                  ?hasRegister <http://www.semanticweb.org/model/electric/vehciles#state> ?registerState.
              }
              ?iri <http://www.semanticweb.org/model/electric/vehciles#hasMake> ?hasMake.
              ?hasMake <http://www.semanticweb.org/model/electric/vehciles#name> ?make.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#2020_Census_Tract> ?2020_Census_Tract.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#Base_MSRP> ?Base_MSRP.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#Clean_Alternative_Fuel_Vehicle> ?Clean_Alternative_Fuel_Vehicle.
              optional{
                  ?iri <http://www.semanticweb.org/model/electric/vehciles#congressionalDistricts> ?congressionalDistricts.
              }
              ?iri <http://www.semanticweb.org/model/electric/vehciles#DOL_Vehicle_ID> ?DOL_Vehicle_ID.
              optional{
                  ?iri <http://www.semanticweb.org/model/electric/vehciles#Electric_Utility> ?Electric_Utility.
              }
              optional{
                  ?iri <http://www.semanticweb.org/model/electric/vehciles#electricRange> ?electricRange.
              }
              ?iri <http://www.semanticweb.org/model/electric/vehciles#model> ?model.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#modelYear> ?modelYear.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#type> ?type.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#VIN> ?VIN.
              optional{
                  ?iri <http://www.semanticweb.org/model/electric/vehciles#WAOFM_GIS_Legislative_District_Boundary> ?WAOFM_GIS_Legislative_District_Boundary.
              }
          }
      }
      union
      {
          graph ?g{
              ?iri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.semanticweb.org/model/electric/vehciles#Vehicle>.
              ?iri <http://www.semanticweb.org/model/electric/vehciles#hasTechnicalSpecification> ?hasTechnicalSpecification.
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#bodyAssembleLocation> ?bodyAssembleLocation.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#bodyType>  ?bodyType.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#brakesType> ?brakesType.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#engineAssembleLocation> ?engineAssembleLocation.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#engineConfiguration> ?engineConfiguration.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#fuelCapacity> ?fuelCapacity.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#fuelInjection> ?fuelInjection.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#horsePower> ?horsePower.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#oilCapacity> ?oilCapacity.
              }
              optional{
                  ?hasTechnicalSpecification <http://www.semanticweb.org/model/electric/vehciles#transmissionType> ?transmissionType.
              }
          }
      }
  }
  `;
  // Connect to your RDF dataset
  let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
    baseURL: "http://localhost:7200",
    repository: "customRepo",
  });

  // read the class
  graphDBEndpoint
    .query(query, { transform: "toJSON" })
    .then((result) => {
      const filteredResults = filterResults(result.records, sentence);
      res.send(filteredResults);
      // const filterResultsBySentenc = filterResultsBySentences(
      //   result.records,
      //   sentence
      // );
      // console.log(JSON.stringify(filterResultsBySentenc, null, 2));
    })
    .catch((err) => {
      console.log(err);
    });
  // Define a function to filter the results based on a natural language sentence
  function filterResults(results, sentence) {
    const tokenizer = new natural.WordTokenizer();
    const keywords = tokenizer.tokenize(sentence);

    return results.filter((result) => {
      return (
        keywords.includes(result.modelYear) ||
        keywords.includes(result.Electric_Utility) ||
        keywords.includes(result.make) ||
        keywords.includes(result.Base_MSRP) ||
        keywords.includes(result.Clean_Alternative_Fuel_Vehicle) ||
        keywords.includes(result.DOL_Vehicle_ID) ||
        keywords.includes(result.electricRange) ||
        keywords.includes(result.model) ||
        keywords.includes(result.modelYear) ||
        keywords.includes(result.type) ||
        keywords.includes(result.VIN)
      );
    });
  }
  function filterResultsBySentences(vehicles, sentence) {
    const regexMap = {
      Electric_Utility: /Electric Utility/i,
      Base_MSRP: /\$\d+(?:,\d+)*(?:\.\d+)?/,
      Clean_Alternative_Fuel_Vehicle: /Clean Alternative Fuel Vehicle/i,
      DOL_Vehicle_ID: /DOL Vehicle ID of (\d+)/i,
      electricRange: /Electric Range of (\d+) miles/i,
      model: /Model is ([\w-]+)/i,
      modelYear: /(\d{4}) model year/i,
      type: /(sedan|hatchback|suv)/i,
      make: /make is ([\w\s]+)/i,
      VIN: /with VIN (\w{17})/i,
    };

    const filterObj = {};

    for (const [key, regex] of Object.entries(regexMap)) {
      const match = sentence.match(regex);
      if (match) {
        filterObj[key] = match[1] || match[0];
      }
    }
    return filterObjects(filterObj, vehicles);
  }
  const filterObjects = (obj, arr) => {
    return arr.filter((item) =>
      Object.keys(obj).every((key) => obj[key] === item[key])
    );
  };
});

app.listen(9000, () => console.log("Server started on port 9000"));
