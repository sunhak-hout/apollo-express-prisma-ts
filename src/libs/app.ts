import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { fileUpload, upload } from './upload';

export const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => res.json({ msg: 'OK' }));

app.post('/upload', upload.single('file'), fileUpload);
