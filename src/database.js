import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Database is Connected'))
  .catch(err => console.log(err));