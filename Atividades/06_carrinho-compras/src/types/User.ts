export interface UserDTO {
  accessToken: string;
  user: User;
}

export interface User {
  id: number;
  fname: string;
  lname: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
}
