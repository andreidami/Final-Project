export const getFavourites = () => {
  const data = JSON.parse(localStorage.getItem("list")) || [];
  console.log(data);
  return data;
};
export const checkPhoto = (id) => {
  const list = getFavourites();
  console.log(list.findIndex((photo) => photo.id === id));
  console.log("idfromcheckphotos", id);

  return list.findIndex((photo) => photo.id === id) !== -1;
};
export const updateFavourites = (photo) => {
  const isPhotoInFavourites = checkPhoto(photo.id);
  if (isPhotoInFavourites) return;
  const list = getFavourites();
  const newList = [...list, photo];
  localStorage.setItem("list", JSON.stringify(newList));
};
