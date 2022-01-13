export class JwtResponse {
    user_name(user_name: any) {
      throw new Error('Method not implemented.');
    }
    accessToken!: string;
    type!: string;
    username!: string;
    authorities!: string[];
}
