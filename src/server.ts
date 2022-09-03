import express from 'express';

import { pacientRoutes } from './routes/patients.routes';
import { professionalsRoutes } from './routes/professionals.routes';

const app = express();
app.use(express.json());

app.use('/professionals', professionalsRoutes);
app.use('/pacients', pacientRoutes);

app.listen(3333, () => console.log('Server running on 3333'));
