/* A type definition for the UserLogin object. */
interface UserLogin {
  id: number;
  usuario: string;
  senha: string;
  token?: string| null
}

export default UserLogin;