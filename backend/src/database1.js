const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://root:zaq@cluster0-uoqxp.mongodb.net/p0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));