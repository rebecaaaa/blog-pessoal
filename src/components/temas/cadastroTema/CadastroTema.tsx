import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
//import useLocalStorage from 'react-use-localstorage';//
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function CadastroTema() {

    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
    //const [token, setToken] = useLocalStorage("token");
  
    /* Um hook que é usado para obter o estado do token. */  
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    const [tema, setTema] = useState<Tema>({
      id: 0,
      descricao: "",
    });
  
    useEffect(() => {
      if (token === "") {
        toast.info('Você precisa estar logado', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        navigate("/login");
      }
    }, [token]);
  
    useEffect(() => {
      if (id !== undefined) {
        findById(id);
      }
    }, [id]);
  
    async function findById(id: string) {
      buscaId(`/tema/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
      setTema({
        ...tema,
        [e.target.name]: e.target.value,
      });
    }
  
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log("tema " + JSON.stringify(tema));
  
      if (id !== undefined) {
        console.log(tema);
        put(`/tema`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema atualizado com sucesso', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        post(`/tema`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema cadastrado com sucesso', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      back();
    }
  
    function back() {
      navigate("/temas");
    }
  
    return (
      <Container maxWidth="sm" className=" container-cadastroTema">
        <form onSubmit={onSubmit} className="cadastroTema-formulario">
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Formulário de cadastro de temas
          </Typography>
          <TextField
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
            id="descricao"
            label="Digite seu tema"
            variant="outlined"
            name="descricao"
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
      </Container>
    );
  }
  
  export default CadastroTema;