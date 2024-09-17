import {object, string, ref} from 'yup';

export const registerSchema = object({

    confirmPassword: string()
    .required("La confirmación de la contraseña es requerida")
    .oneOf([ref("password"), null], "Las contraseñas no coinciden"),
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