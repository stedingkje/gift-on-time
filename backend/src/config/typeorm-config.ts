import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT! || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [__dirname + "/../**/*.entity.{js,ts}"], // Zorg ervoor dat dit pad overeenkomt met de locatie van je entiteiten
  synchronize: true, // Dit zou in productie op 'false' moeten staan en je zou migraties moeten gebruiken
};
