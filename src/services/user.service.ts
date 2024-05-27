import axios from 'axios';
import { Http } from './http';
import { type User } from '../interfaces/user.interface';

export const fetchUsers = (): Promise<User[]> => {
  return Http.get<User[]>('/user').then(res => res.data);
};

export const getAllUsers = async (): Promise<[Error | null, User[]?]> => {
  try {
    const res = await Http.get<User[]>('/user');

    if (res.statusText !== 'OK') {
      return [new Error(`Error to get users: ${res.statusText}`)];
    }

    return [null, res.data];
  } catch (e) {
    if (axios.isAxiosError(e)) return [e];

    return [new Error('Unknown Error')];
  }
};
