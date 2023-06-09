import app from './app.js'
import {PORT} from './config.js'

// settings
app.set("port", PORT);

app.listen(PORT);

console.log(`Server on port ${PORT}`);
