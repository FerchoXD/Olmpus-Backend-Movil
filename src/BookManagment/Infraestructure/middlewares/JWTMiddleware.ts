import { Request, Response, NextFunction } from 'express';
import { JWTService } from '../../Application/JWT/JWTService';

declare global {
    namespace Express {
      interface Request {
        user?: { [key: string]: any };
      }
    }
  }
  

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extraer el token de Bearer
  
  if (!token) {
    return res.status(401).json({ message: 'Token de autorización no proporcionado' });
  }

  try {
    const user = JWTService.verifyToken(token) as { [key: string]: any };
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
}
