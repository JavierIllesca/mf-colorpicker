export const getColorList = (): string[] => {
    const storedColors = localStorage.getItem("colorsList");

    if (storedColors === null) return [];

    const parsedColors: unknown = JSON.parse(storedColors);

    return Array.isArray(parsedColors) ? parsedColors : [];
}

export const getLastColor = () => {
    const listColor = getColorList();

    return listColor[0] || "#732812";
}