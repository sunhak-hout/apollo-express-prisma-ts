import { Request, Response } from 'express';
import fs from 'fs';
import Jimp from 'jimp';
import multer from 'multer';
import { services } from '../context';

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  }),
});

export const fileUpload = async (req: Request, res: Response) => {
  const file = req.file;
  const img = await Jimp.read(file.path);
  const filename = Date.now() + file.originalname;

  const path = {
    sm: `uploads/sm/${filename}`,
    md: `uploads/md/${filename}`,
    lg: `uploads/lg/${filename}`,
  };

  img.resize(Jimp.AUTO, 1024).write(path.lg);
  img.resize(Jimp.AUTO, 512).write(path.md);
  img.resize(Jimp.AUTO, 128).write(path.sm);
  fs.unlink(file.path, () => {});

  // const image = await services.imageService.create(path);
  // res.json({ image });
};
