import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosApiBack = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postRegister = async (data: unknown) => {
  const response = await axiosApiBack.post("/auth/signup", data);
  if (!response.data) throw new Error("No se pudo registrar el usuario");
  return "Usuario registrado correctamente";
};

export const postLogin = async (data: Login) => {
  console.log(data)
  const response = await axiosApiBack.post("/auth/signin", data);
  if (!response.data) throw new Error("Credenciales incorrectas");
  return { message: "Sesión iniciada correctamente", data: response.data };
};