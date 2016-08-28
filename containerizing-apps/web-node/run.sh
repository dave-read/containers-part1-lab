
if [ ! -d ./node_modules ]
then
   echo "installing node modules"
   npm install
fi
node server.js

