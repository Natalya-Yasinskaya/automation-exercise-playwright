export type UserData = {
  name: string;
  email: string;
  password: string;
  title: string;
  birth_date: string;
  birth_month: string;
  birth_year: string;
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobile_number: string;
};

export function generateUserData(): UserData {
  const timestamp = Date.now();
  return {
    name: `User_${timestamp}`,
    email: `test_user_${timestamp}@gmail.com`,
    password: 'Password123!',
    title: 'Mr',
    birth_date: '10',
    birth_month: '05',
    birth_year: '1995',
    firstname: 'Test',
    lastname: 'User',
    company: 'QA Corp',
    address1: '123 Test St',
    address2: 'Apt 4',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobile_number: '1234567890',
  };
}