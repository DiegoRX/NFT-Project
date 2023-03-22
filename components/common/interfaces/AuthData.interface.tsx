export default interface AuthData {
  user: {
    walletAddress;
    email;
    password;
    name;
    role;
    address;
    phone;
    city;
    country;
  };
  signIn;
  register;
  logout;
  accounts: Array<string>;
  setAccounts;
  getUser;
  setUser;
}
