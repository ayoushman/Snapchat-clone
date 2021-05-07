export const setImage = (image) => {
  return {
    type: "CAPTURE_IMAGE",
    payload: image,
  };
};

export const resetImage = () => {
  return {
    type: "RESET_IMAGE",
  };
};

export const viewImage = (imageURL) => {
  return {
    type: "VIEW_IMAGE",
    payload: imageURL,
  };
};

export const resetViewImage = () => {
  return {
    type: "RESET_VIEW_IMAGE",
  };
};
