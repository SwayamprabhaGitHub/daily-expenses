import React from "react";

const SignUpPage = () => {
  return (
    <section>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="user-email">Email</label>
          <input type="email" id="user-email" required />
        </div>
        <div>
          <label htmlFor="user-pswrd">Password</label>
          <input type="password" id="user-pswrd" required />
        </div>
        <div>
          <label htmlFor="user-confirmpswrd">Confirm Password</label>
          <input type="password" id="user-confirmpswrd" required />
        </div>
        <button>Sign Up</button>
      </form>
      <div>
        <button>Have an account? Login</button>
      </div>
    </section>
  );
};

export default SignUpPage;
