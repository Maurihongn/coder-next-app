import LoginForm from '@/app/components/auth/LoginForm';
export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Coderhouse app - Login`,
  };
}

const Login = () => {
  return (
    <section className=''>
      <LoginForm />
    </section>
  );
};
export default Login;
