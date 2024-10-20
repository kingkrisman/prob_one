import React from 'react';
import ProfileCard from './ProfileCard';




const Appli = () => {
  const users = [
    { name: 'Chistian Daniella', age: 20, location: 'Canada', profileImage: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
      , theme: 'light' },
    { name: 'Harry Kane', age: 32, location: 'Tottenham', profileImage: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light', theme: 'dark' },
    { name: 'Queen Di', age: 26, location: 'Nigeria', profileImage: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Prescription01&hatColor=Blue03&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Black', theme: 'light' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          age={user.age}
          location={user.location}
          profileImage={user.profileImage}
          theme={user.theme}
        />
      ))}
    </div>
  );
};

export default Appli