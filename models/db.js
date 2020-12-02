const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/phoneListDB', {useNewUrlParser:true, useUnifiedTopology:true});
require('./phone');
