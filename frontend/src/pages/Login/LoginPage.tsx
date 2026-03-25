import { useState } from "react";
import Axios from 'axios';
import "./LoginPageCss.css"

export default function LoginPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    async function handleLogin(email: string, password: string) {
        // Criar depois a função Login
    }

    async function handleCreateAccount(userName: string, email: string, password: string) {
        // Criar depois a função Create Account
    }

    return (
        <div className="login-container">
            {isLogin ? (
                <div className="login-card">
                    <h1>Execute seu Login</h1>
                    
                    <input className="login-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input className="login-input" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    
                    <button className="btn-primary" onClick={() => handleLogin(email, password)}>Login</button>
                    
                    <span className="toggle-text">
                        Não tem conta criada? <button className="btn-link" onClick={() => setIsLogin(false)}>Criar</button>
                    </span>
                </div>
            ) : (
                <div className="login-card">
                    <h1>Seja Bem Vindo!</h1>
                    <span className="login-subtitle">Crie sua conta para continuar</span>
                    
                    <input className="login-input" type="text" placeholder="Nome de usuário" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    <input className="login-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input className="login-input" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    
                    <button className="btn-primary" onClick={() => handleCreateAccount(userName, email, password)}>Criar</button>
                    
                    <span className="toggle-text">
                        Já tem conta? <button className="btn-link" onClick={() => setIsLogin(true)}>Fazer login</button>
                    </span>
                </div>
            )}
        </div>
    );
}