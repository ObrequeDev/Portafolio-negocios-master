Psycopg2 para Macc y Linux:
sudo apt install python3-dev libpq-dev

Al clonar el repositorio:
- instalar requirements.txt en un ambiente virtual
- instalar depedencias node con - npm install

para que funcione correctamente el proyecto debera crear archivo llamado .env dentro de core con los siguientes datos:

SECRET_KEY="aca va la secret key" (omite esto y las comillas dobles)

//esta dos lines son opcionales sirve para el envio de correos
ACTIVE_CAMPAIGN_URL=''
ACTIVE_CAMPAIGN_KEY=''

SKIP_PREFLIGHT_CHECK=true
//esta linea es para que react pueda comunicarse con el backend sin problemas
REACT_APP_API_URL='http://localhost:8000'