type Profile = {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
  };
  
  export default function TailwindCard({ profile }: { profile: Profile }) {
    return (
      <div className="max-w-sm p-6 bg-white rounded-xl shadow-md text-center">
        <img className="w-24 h-24 mx-auto rounded-full" src={profile.avatar_url} alt="Avatar" />
        <h2 className="text-lg font-semibold mt-4">{profile.name}</h2>
        <p className="text-gray-500">@{profile.login}</p>
        <p className="mt-2">{profile.bio}</p>
      </div>
    );
  }
  