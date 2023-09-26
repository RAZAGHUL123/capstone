import React, { useEffect } from 'react';

const SignOut = () => {
  useEffect(() => {
    // Add sign-out logic here (e.g., clear authentication tokens or cookies)
    console.log('User signed out');
  }, []);

  return (
    <div className="container mt-5">
      <h2>Sign Out</h2>
      <p>You have been successfully signed out from your account.</p>
      {/* You can add additional content or redirection logic here */}
    </div>
  );
}

export default SignOut;
