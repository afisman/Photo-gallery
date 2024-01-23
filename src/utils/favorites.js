export const isFavorite = (image, favorites) => {
    return favorites?.some((favorite) => favorite.id === image.id)
}

