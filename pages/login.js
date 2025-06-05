import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
};

export default Login;
