import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Escolha o estilo</h1>
      <Link to="/tailwind" className="text-blue-500 underline">Ver com Tailwind</Link>
      <Link to="/styled" className="text-pink-500 underline">Ver com Styled-Components</Link>
    </div>
  );
}
