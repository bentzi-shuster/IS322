export default async function Login() {

    return (
      <form action="/auth/login" method="post" className="login-form flex flex-col">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button className="mx-auto  my-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded max-w-max">Sign In</button>
        <button formAction="/auth/sign-up" className="mx-auto  my-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded max-w-max" >Sign Up</button>
        <button
        className="mx-auto  my-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded max-w-max"
            formAction="/auth/github">

            Sign in with GitHub
            </button>
      </form>
    )
  }