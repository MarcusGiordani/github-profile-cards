import ProfileCard from '../components/ProfileCard';

export default function TailwindProfile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Tailwind CSS</h1>
      <ProfileCard useStyled={false} />
    </div>
  );
}
