module.exports = class Init1656696238042 {
  name = 'Init1656696238042'

  async up(db) {
    await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "to" text, "from" text, "balance" numeric NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
  }

  async down(db) {
    await db.query(`DROP TABLE "transfer"`)
  }
}
