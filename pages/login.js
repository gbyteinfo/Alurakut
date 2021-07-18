import React from 'react';

//HOOK DO NEXT
import { useRouter } from 'next/router'

export default function LoginScreen() {
  const router = useRouter();  
  const [usuarioLogado, setUsuarioLogado] = React.useState('gbyteinfo'); //gbyteinfo padrao no campo


 return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
            <form className="box" onSubmit={(event) => {
                    event.preventDefault()
                    alert("Login Efetuado de: ", usuarioLogado)
                    router.push('/', {})
                }}>
                <p>Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!</p>

                <input 
                    placeholder="Usuário" 
                    value={usuarioLogado} 
                    onChange={(event) => {
                        
                        console.log('EVENTO => ', event.target.value)
                        setUsuarioLogado(event.target.value)
                    
                    }}
                />
    
                <p style={{marginTop:"0px"}}><strong style={{color: "var(--colorQuarternary)"}}>{usuarioLogado.length === 0 ? 'Preencha o Username' : ''}</strong></p>
                <button type="submit">Login</button>
            </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 Alurakut - <a href="https://gbyteinfo.com.br">Gbyteinfo</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  )
} 