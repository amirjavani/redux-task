import { useEffect, useRef } from "react";

function AuthPage() {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
  });
  console.log()

  return (
    <div className="flex flex-col justify-center">
      <div className=" p-10 mx-auto mt-10 border-1 flex flex-col gap-2 ">
        <p>Login</p>
        <input
          ref={input}
          className="border p-2 rounded"
          placeholder="username"
          type="text"
        />
        <input
          className="border p-2 rounded"
          placeholder="password"
          type="text"
        />
        <button type="button">login</button>
      </div>
    </div>
  );
}

export default AuthPage;
