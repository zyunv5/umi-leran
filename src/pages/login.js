import React, { useState } from 'react';

function Login() {
  const [count, setCount] = useState(99);

  return <div>{count}</div>;
}

export default React.memo(Login);
