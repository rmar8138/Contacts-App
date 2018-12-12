let env = process.env.NODE_ENV || development;

if (env === 'development') {
  process.env.PORT = 4444;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Contacts-App';
} else if (env === 'test') {
  process.env.PORT = 4444;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Contacts-App-Test';
}
