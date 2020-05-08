from zeep import Client

client = Client("http://localhost:5000/salarioliquido?wsdl")

print(client.service.calcular(3000.00,100.00,0))