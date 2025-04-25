import { useState } from 'react';
import axios from 'axios';
import TailwindCard from './TailwindCard';
import StyledCard from './StyledCard';

type Profile = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
};

interface Props {
  useStyled: boolean;
}

export default function ProfileCard({ useStyled }: Props) {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setProfile(res.data);
    } catch (err) {
      alert('Usuário não encontrado.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite o usuário do GitHub"
        className="border px-4 py-2 rounded"
      />
      <button onClick={fetchProfile} className="bg-blue-500 text-white px-4 py-2 rounded">
        Buscar Perfil
      </button>

      {profile && (
        useStyled ? <StyledCard profile={profile} /> : <TailwindCard profile={profile} />
      )}
    </div>
  );
}
