import * as express from 'express';
import { Request, Response } from 'express';

const PORT = process.env.PORT || 8080;

const app = express();



app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});