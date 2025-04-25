import ProfileCard from '../components/ProfileCard';

export default function StyledProfile() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>Styled Components</h1>
      <ProfileCard useStyled={true} />
    </div>
  );
}
