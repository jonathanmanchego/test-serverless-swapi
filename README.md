## Para usar el endpoint de creacion 
Desplegar la base de datos en algun servidor de MySQL, usando el archivo en database/create-table-template.sql y luego colocarlo en .env

````env
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWD=
MYSQL_DB=
````

## Para consumir los endpoints disponibles

### Crear Persona Local
````curl
curl --request POST \
  --url http://localhost:3000/dev/v1/people \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5' \
  --data '{
	"name": "Jonathan",
	"height": 180,
	"mass": 85,
	"hair_color": "black",
	"skin_color": "brown",
	"eye_color": "brown",
	"birth_year": 1999,
	"gender": "M",
	"homeworld": "Earth"
}'
````

### Buscar Persona
````curl
curl --request GET \
  --url http://localhost:3000/dev/v1/people/4
````

### Buscar Personas
````curl
curl --request GET \
  --url http://localhost:3000/dev/v1/people
````