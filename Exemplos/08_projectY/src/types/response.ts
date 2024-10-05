export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Person {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
