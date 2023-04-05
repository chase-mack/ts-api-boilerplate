import app from './app';
import { PORT } from './config';

app.listen(PORT, () => {
    console.log('Express servers listening on port ' + PORT);
})