import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User, Course, Admin } from '../db';
import { authenticateJwt } from '../middleware/auth';

const router = express.Router();

interface User{
  username : string | null;
  password : string | null;
}

interface CustomRequest extends Request {
  user?: User;
}

router.get('/me', authenticateJwt, async (req: CustomRequest, res: Response) => {
  const admin = await Admin.findOne({ username: (req.user as User).username });
  if (!admin) {
    res.status(403).json({ msg: 'Admin doesnt exist' });
    return;
  }
  res.json({
    username: admin.username,
  });
});

router.post('/signup', (req: Request, res: Response) => {
  const { username, password } = req.body;
  function callback(admin: any) {
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();

      const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET || '', { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }
  }
  Admin.findOne({ username }).then(callback);
});

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET || '', { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});

router.post('/courses', authenticateJwt, async (req: Request, res: Response) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: 'Course created successfully', courseId: course.id });
});

router.put('/courses/:courseId', authenticateJwt, async (req: Request, res: Response) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

router.get('/courses', authenticateJwt, async (req: Request, res: Response) => {
  const courses = await Course.find({});
  res.json({ courses });
});

router.get('/course/:courseId', authenticateJwt, async (req: Request, res: Response) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({ course });
});

export default router;
