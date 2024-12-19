const ProfilePicture = () => {
    return (
      <div className="relative w-48 h-48 rounded-full border-4 border-accent overflow-hidden">
        <img
          src="/profile.jpg" // Replace with your profile picture
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default ProfilePicture;
  