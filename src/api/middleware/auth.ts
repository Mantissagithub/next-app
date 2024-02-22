import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET || 'SECr3t';

interface User{
  username : string | null;
  password : string | null;
}

const authenticateJwt = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; //as User;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export {
    authenticateJwt,
    SECRET
};
