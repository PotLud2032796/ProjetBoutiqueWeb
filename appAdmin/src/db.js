import Dexie from 'dexie';

export const db = new Dexie('myDatabaseasdasd');
db.version(2).stores({
  login: '++utilisateur, mdp', // Primary key and indexed props
});