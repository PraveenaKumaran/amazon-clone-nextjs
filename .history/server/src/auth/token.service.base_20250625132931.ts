export interface JwtPayload {
  sub: string;
  username: string;
  roles?: string[];
}

export abstract class TokenServiceBase {
  /**
   * Generates a JWT access token for the given payload.
   */
  abstract generateToken(payload: JwtPayload): Promise<string>;

  /**
   * Verifies a JWT token and returns its payload.
   */
  abstract verifyToken(token: string): Promise<JwtPayload>;
}