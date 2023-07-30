import express from 'express';
import { Prisma } from '@prisma/client';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bycript from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Tá funcionando CRLH! ${port}`);
  }
);
