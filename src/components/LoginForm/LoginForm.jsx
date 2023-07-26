import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
        logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Email
        <input type="email" name="email" utoComplete="off"/>
      </label>
      <label >
        Password
        <input type="password" name="password" utoComplete="off"/>
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};