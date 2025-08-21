"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/context/authContext";
import { postLogin } from "@/services/auth";
import { useFormik } from "formik";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";
import * as Yup from "yup";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

const IniciarSesion = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { saveUserData } = useAuthContext();
  //   const { saveCartData } = useCartContext();
  const router = useRouter();

  const formik = useFormik({
    initialValues: { EmployeeNumber: "", password: "" },
    validationSchema: Yup.object({
      EmployeeNumber: Yup.number().required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await postLogin({
          ...values,
          EmployeeNumber: Number(values.EmployeeNumber),
        });
        // const dataUser = response.data.user;
        // const Token = response.data.accessToken;

        // saveUserData({
        //   accessToken: Token,
        //   user: {
        //     id: dataUser.id,
        //     EmployeeNumber: dataUser.EmployeeNumber,
        //     username: dataUser.username,
        //     isReceptionist: dataUser.isReceptionist,
        //     isManager: dataUser.isManager,
        //   },
        //   isAuth: true,
        // });
        console.log("hola")
        toast.success("Sesión iniciada correctamente");
        router.push(routes.admin);
      } catch (error: unknown) {
        // toast.error(error?.response.data.message || "Error al iniciar sesión");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <Input
          type="number"
          name="EmployeeNumber"
          placeholder="Número de empleado"
          value={formik.values.EmployeeNumber}
          onChange={formik.handleChange}
        />
        {formik.touched.EmployeeNumber && formik.errors.EmployeeNumber && (
          <p className="text-red-500 text-xs">{formik.errors.EmployeeNumber}</p>
        )}
      </div>

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="********"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
        >
          {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs">{formik.errors.password}</p>
        )}
      </div>

      {/* 🔗 Enlace a "Olvidaste tu contraseña" */}
      <div className="text-right">
        <a
          href="/forgotPassword"
          className="text-sm text-blue-600 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Button
        type="submit"
        className="w-full text-white bg-[#005F2D] hover:bg-[#267B21]"
        disabled={loading}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </Button>
    </form>
  );
};

export default IniciarSesion;
