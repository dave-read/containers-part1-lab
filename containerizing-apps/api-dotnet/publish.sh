
framework=netcoreapp1.0
runtimeID=debian.8-x64
Environment=Debug
pubFolder="bin/$Environment/$framework/$publish"

dotnet publish -f $framework -r $runtimeID -c $Environment -o $pubFolder
