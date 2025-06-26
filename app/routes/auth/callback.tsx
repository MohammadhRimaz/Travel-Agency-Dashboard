import { useEffect } from "react";
import { useNavigate } from "react-router";
import { account } from "~/appwrite/client";

const AuthCallBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      try {
        const user = await account.get();

        const isAdmin = user.labels?.includes("admin");

        if (isAdmin) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } catch (error: any) {
        console.error("OAuth Callback Error: ", error);

        if (error.code === 409) {
          try {
            const session = await account.getSession("current");
            if (session) {
              navigate("/");
            } else {
              navigate("/sign-in");
            }
          } catch {
            navigate("/sign-in");
          }
        } else {
          navigate("/sign-in");
        }
      }
    };
    handleOAuthRedirect();
  }, [navigate]);
  return <p>Authenticating.... Please wait!</p>;
};

export default AuthCallBack;
