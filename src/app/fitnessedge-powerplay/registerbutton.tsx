"use client"
import { useRouter } from 'next/navigation';

const RegisterButton = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('fitnessedge-powerplay/register'); // Replace '/register' with the actual route for your registration form
  };

  return (
    <button
      onClick={handleRegisterClick}
      className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300"
    >
      Register
    </button>
  );
};

export default RegisterButton;
