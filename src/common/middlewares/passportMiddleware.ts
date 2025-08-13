import passport from "passport";
import {jwtKey} from "../../config";
import {ExtractJwt,Strategy as JwtStrategy} from "passport-jwt"
import { getUserById } from "../../users/user.services";


// const jwtKey = process.env.JWT_KEY;

if (!jwtKey) {
  throw new Error("JWT_KEY is not defined in environment variables.");
}

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtKey
};

passport.use(
  new JwtStrategy(opts, async (payload: any, done: any) => {
    try {
      const user = await getUserById(payload.id);

      if (!user) {
        // Este error puede ser manejado en el middleware global
        const error = new Error("User not found");
        (error as any).status = 401;
        return done(error, false);
      }

      return done(null, user);
    } catch (err: any) {
      // Pasa el error al middleware global
      return done(err, false);
    }
  })
);

export default passport;
