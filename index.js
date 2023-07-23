const express = require('express');
const app = express();

// app.get()
// app.post();
// app.put();
// app.delete();

//app get takes 2 arguments, 1st - the path or URL & 2nd - the call back Fn
app.get('/', (req, res)=> {
res.send('Hello W');
});

app.get('/api/course', (req, res)=> {
res.send([1, 2, 3]);
});


app.listen(3000, () => console.log('Listening on port 3000...'));
