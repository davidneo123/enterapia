 mongoexport -d historia-clinica -c maestros -o maestros.json


mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-u5dbz.mongodb.net:27017,cluster0-shard-00-01-u5dbz.mongodb.net:27017,cluster0-shard-00-02-u5dbz.mongodb.net:27017 --ssl --username camilo --password 1234567890 --authenticationDatabase admin --db test --collection maestros --type json --file maestros.json
