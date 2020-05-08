const soap = require("soap");
const url = "http://localhost:5000/salarioliquido?wsdl";
const args = { salarioBruto: "3000", pensaoAlimenticia: "100", numeroDependentes: "0"};
soap.createClient(url, function (err, client) {
  client.calcular(args, function (err, result) {
    console.log(result);
  });
});