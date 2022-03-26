import {IAuthError, IUser} from "@/features/Auth/ducks/types";

export class ApiMock {

  static authUser = (username: string, password: string) => new Promise<IUser>((done, reject) => {

    if (username === 'test' && password === 'password') {

      done({
        id: 1,
        firstName: "John",
        lastName: "Smith",
        login: "test",
      } as IUser);

      return;
    }

    reject({
      error: 1,
      error_description: "Wrong username or password",
    } as IAuthError);

  });

  static recoverPassword = (email: string) => new Promise<void>((done) => done())

}