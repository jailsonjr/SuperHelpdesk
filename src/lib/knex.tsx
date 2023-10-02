import knexConfig from '@/config/knex.config';
import { knex } from 'knex';

const databaseInstance = knex(knexConfig);

export default databaseInstance;




