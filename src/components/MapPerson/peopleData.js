import avatarIvan from "../../assets/images/Ivan_Petrov.png";

export const peopleData = [
  {
    id: 1,
    name: "ИВАН ПЕТРОВ",
    coordinates: [55.751244, 37.618423],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    region: "Москва",
    profession: "Спасатель",
    avatar: avatarIvan,
    videos: [
      {
        id: 1,
        thumbnail: "url_to_thumbnail1.jpg",
        videoUrl: "url_to_video1.mp4",
        title: "Название видео 1",
      },
      {
        id: 2,
        thumbnail: "url_to_thumbnail2.jpg",
        videoUrl: "url_to_video2.mp4",
        title: "Название видео 2",
      },
      // Добавьте больше видео
    ],
  },
  {
    id: 2,
    name: "АННА ИВАНОВА",
    coordinates: [59.938955, 30.315644],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    region: "Санкт-Петербург",
    profession: "Врач",
    avatar: avatarIvan,
    videos: [
      {
        id: 1,
        thumbnail: "url_to_thumbnail3.jpg",
        videoUrl: "url_to_video3.mp4",
        title: "Название видео 3",
      },
      {
        id: 2,
        thumbnail: "url_to_thumbnail4.jpg",
        videoUrl: "url_to_video4.mp4",
        title: "Название видео 4",
      },
    ],
  },
];
