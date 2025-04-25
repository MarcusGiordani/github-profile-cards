import styled from 'styled-components';

type Profile = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
};

const Card = styled.div`
  max-width: 300px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export default function StyledCard({ profile }: { profile: Profile }) {
  return (
    <Card>
      <Avatar src={profile.avatar_url} alt="Avatar" />
      <h2>{profile.name}</h2>
      <p>@{profile.login}</p>
      <p>{profile.bio}</p>
    </Card>
  );
}
