import {object, string} from 'yup';

export const loginSchema = object({
    password:string()
    .required("La contraseña es requerida")
    .min(8,"La contraseña debe tener al menos 8 caracteres")
    .matches(/(?=.*[0-9])/,"La contraseña debe tener al menos un número")
    .matches(/(?=.*[A-Z])/,"La contraseña debe tener al menos una mayúscula")
    .matches(/(?=.*[!@#$%^&*])/,"La contraseña debe tener al menos un caracter especial"),
    email:string()
    .required("El email es requerido")
    .email("El email no es válido"), 
});