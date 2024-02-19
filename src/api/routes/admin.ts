import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User, Course, Admin } from '../db';
import { SECRET, authenticateJwt } from '../middleware/auth';

const router = express.Router();

router.get('/me', authenticateJwt, async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findOne({ username: req.user.username });
    if (!admin) {
      return res.status(403).json({ msg: 'Admin does not exist' });
    }
    return res.json({ username: admin.username });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(403).json({ message: 'Admin already exists' });
    }
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Admin created successfully', token });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      return res.json({ message: 'Logged in successfully', token });
    }
    return res.status(403).json({ message: 'Invalid username or password' });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/courses', authenticateJwt, async (req: Request, res: Response) => {
  try {
    const course = new Course(req.body);
    await course.save();
    return res.json({ message: 'Course created successfully', courseId: course.id });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/courses/:courseId', authenticateJwt, async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      return res.json({ message: 'Course updated successfully' });
    }
    return res.status(404).json({ message: 'Course not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/courses', authenticateJwt, async (req: Request, res: Response) => {
  try {
    const courses = await Course.find({});
    return res.json({ courses });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/course/:courseId', authenticateJwt, async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    return res.json({ course });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
