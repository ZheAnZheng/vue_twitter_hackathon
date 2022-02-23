import profileAvatar from "../assets/Photo.png";
import coverImage from "../assets/CoverPhoto.png";
export default {
  createCurrentUser: function () {
    return {
      id: 1,
      name: "John Doe",
      account: "heyjohn",
      image: profileAvatar,
      coverImage: coverImage,
      tweetsCount: 1000,
      description:
        "EU Champion with the French ZooEU Champion with the French ZooEU Champion with the French ZooEU Champion with the French Zoo",
      followed: 59,
      following: 23,
    };
  },
  createTopUser: function () {
    const dummyData = [];
    for (let i = 0; i < 10; i++) {
      dummyData.push({
        id: i,
        name: "John Doe",
        account: "heyjohn",
        image: "",
        isFollowed: Math.random() * 100 > 50,
      });
    }
    return dummyData;
  },
  createTweets(num) {
    const dummyData = [];
    for (let i = 0; i < num; i++) {
      dummyData.push({
        id: i,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createAt: new Date(),
        user: {
          id: Math.floor(Math.random() * 100),
          name: "John",
          account: "heyjohn",
          image: "",
        },
        replys: [],
        like: [],
        isLiked: Math.random() * 100 > 50,
      });
    }
    return dummyData;
  },
  createReplys(num) {
    const dummyData = [];
    for (let i = 0; i < num; i++) {
      dummyData.push({
        id: i,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        createAt: new Date(),
        user: {
          id: Math.floor(Math.random() * 100),
          name: "ammy",
          account: "heyammy",
        },
      });
    }
    return dummyData;
  },
  createFollow(num) {
    const dummyData = [];
    for (let i = 0; i < num; i++) {
      dummyData.push({
        id: i,
        name: "Laure",
        image: "",
        account: "Laure",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        isFollowed: Math.random() * 100 > 50,
      });
    }
    return dummyData;
  },
};
