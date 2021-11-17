
module.exports = 
{
    "type": "postgres" ,
    "url": process.env.DATABASE_URL,
    
    "entities": process.env.NODE_ENV == "production" 
        ? ["dist/models/*.js"] 
        : ["src/models/*.ts"],

    "migrations": process.env.NODE_ENV == "production"
        ? ["dist/databases/migrations/*.js" ]
        : ["src/databases/migrations/*.ts" ],
        
    "cli": {
        "migrationsDir": [
            "src/databases/migrations"
        ],
        "entitiesDir": "src/models"
    }
}
/*
{
    "type":"postgres",
    "host":"localhost",
    "port":5432,
    "username":"postgres",
    "password":"postgres",
    "database":"mas",
    "migrations":["./src/databases/migrations/**.ts"],
    "entities":["./src/models"],
    "cli": {
        "migrationsDir":"./src/databases/migrations"
    }
}
*/