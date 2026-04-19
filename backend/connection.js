const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://server2028sarvan_db_user:SvEVMex8pFkbnTCo@cluster1.dobsek9.mongodb.net/?appName=Cluster1')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));