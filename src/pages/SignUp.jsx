import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schema/SignupSchema";
const Signup = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  // const [errors, setErrors] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmitFunc = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg md:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create an Account
          </h1>

          <p className="mt-2 text-gray-500">
            Fill in the information below to create your account.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(handleSubmitFunc)}>
          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              {...register("fullName")}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                {...register("email")}
                
                placeholder="example@email.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                {...register("phone")}
                placeholder="+880 1XXXXXXXXX"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone?.message}
                </p>
              )}
            </div>
          </div>

          {/* Password + Confirm Password */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                {...register("password")}
                placeholder="Enter password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirm password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
          >
            Create Account
          </button>

          {/* Login */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
