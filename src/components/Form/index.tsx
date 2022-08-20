import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IUser, UserContext } from "../../contexts/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const { login } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um Email válido")
      .required("Digite um Email"),
    senha: yup.string().min(6, "Insira senha com mais de 6 letras"),
  });

  const { register, handleSubmit } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        {/* <p>{errors.email?.message}</p> */}

        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" {...register("senha")} />
        {/* <p>{errors.senha?.message}</p> */}

        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default Form;
