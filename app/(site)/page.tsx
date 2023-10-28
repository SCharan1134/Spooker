import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gradient-to-br
        from-stone-700 from-1%
        via-stone-800 via-50%
        to-stone-900 to-1%
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="56"
          width="56"
          className="mx-auto w-auto"
          src="/images/Logo.png"
          alt="Logo"
        />
        <h2
          className="
            mt-4 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-stone-400
          "
        >
          Spooker
        </h2>
        <h2
          className="
            mt-2 
            text-center 
            text-lg 
            font-semibold 
            tracking-tight 
            text-stone-400
          "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
