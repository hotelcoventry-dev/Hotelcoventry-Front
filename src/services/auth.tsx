import { Login } from "@/types";
import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosApiBack = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postLogin = async (data: Login) => {
  console.log(data)
  const response = await axiosApiBack.post("/auth/signin", data);
  if (!response.data) throw new Error("Credenciales incorrectas");
  return { message: "Sesión iniciada correctamente", data: response.data };
};
