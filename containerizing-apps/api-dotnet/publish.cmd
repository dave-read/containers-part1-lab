
set framework=netcoreapp1.0
set runtimeID=debian.8-x64
set Environment=Debug
set pubFolder="bin\%Environment%\%framework%\publish"

dotnet publish -f %framework% -r %runtimeID% -c %Environment% -o %pubFolder%
