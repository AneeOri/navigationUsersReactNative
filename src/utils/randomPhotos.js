export const getRandomPhoto = () => {
    const photos = [
       require('../../assets/Images/1.png'),
       require('../../assets/Images/2.png'),
       require('../../assets/Images/3.png'),
       require('../../assets/Images/4.png'),
       require('../../assets/Images/5.png'),
       require('../../assets/Images/6.png'),
       require('../../assets/Images/7.png'),
       require('../../assets/Images/8.png'),
       require('../../assets/Images/9.png'),
       require('../../assets/Images/10.png'),
    ];
    return photos[Math.floor(Math.random() * photos.length)];
};