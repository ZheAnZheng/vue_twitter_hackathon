import emptyImage from "../assets/Logo@X2.png";
export const activeLinkHandler = {
  methods: {
    getClass(route) {
      if (this.$route.name === route) {
        return "linking";
      } else {
        return "link";
      }
    },
  },
};

export const emptyImageFilter = {
  filters: {
    imageFilter(val) {
      if (!val) {
        return emptyImage;
      } else {
        return val;
      }
    },
  },
};
