
if Not Exist "node_modules" (
    echo "Installing node modules ..."
    call npm install
)
node server.js