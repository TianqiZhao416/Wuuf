const db = require('better-sqlite3')('./server/model/dev.db', {verbose: (msg) => console.log(msg)});


const creationSql = 'CREATE TABLE IF NOT EXISTS "Pooch" ( "id" TEXT NOT NULL PRIMARY KEY, "name" TEXT NOT NULL, "zip" TEXT, "breed" TEXT, "size" TEXT, "age" INTEGER, "gender" TEXT NOT NULL, "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "DeletedOn" DATETIME); CREATE TABLE IF NOT EXISTS "swipe" ( "id" TEXT NOT NULL PRIMARY KEY, "swipedRight" BOOLEAN NOT NULL, "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "poochId" TEXT NOT NULL, "swipedId" TEXT NOT NULL, CONSTRAINT "swipe_poochId_fkey" FOREIGN KEY ("poochId") REFERENCES "Pooch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE, CONSTRAINT "swipe_swipedId_fkey" FOREIGN KEY ("swipedId") REFERENCES "Pooch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE); CREATE UNIQUE INDEX "swipe_poochId_key" ON "swipe"("poochId"); CREATE UNIQUE INDEX "swipe_swipedId_key" ON "swipe"("swipedId");';






module.exports = db;