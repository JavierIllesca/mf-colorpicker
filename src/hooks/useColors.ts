import { ChangeEvent, SubmitEvent, useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
    const [color, setColor] = useState<string>(getLastColor());
    const [colorsList, setColorsList] = useState<string[]>(getColorList());
    
    const handleChangeColor = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setColor(event.target.value);
    }

    const handleSubmitSaveColor = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (colorsList.some(c => c.toLowerCase() === color.toLowerCase())) return;
        setColorsList([color, ...colorsList]);
    }

    useEffect(() => localStorage.setItem("colorsList", JSON.stringify(colorsList)), [colorsList])

    return { color, colorsList, handleChangeColor, handleSubmitSaveColor };
}