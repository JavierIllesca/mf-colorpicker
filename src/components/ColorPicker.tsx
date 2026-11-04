import { ChangeEventHandler, SubmitEventHandler } from "react";


interface colorPickerProps {
    color: string,
    handleChangeColor: (ChangeEventHandler<HTMLInputElement, HTMLInputElement>),
    handleSubmitSaveColor: (SubmitEventHandler<HTMLFormElement>),
}

const ColorPicker = ({ color, handleChangeColor, handleSubmitSaveColor }: colorPickerProps) => {

    return (
        <>
        <form onSubmit={handleSubmitSaveColor}>
            <input type="color" className="form-control" style={{
                    width: "100%",
                    height: "240px",
                }}
                title="Seleccione un color..."
                value={color}
                onChange={handleChangeColor}
            />
            <div className="text-center">
                <h2 className="mt-3 fw-bolder">
                    <div style={{
                        width: "24px",
                        height: "24px",
                        background: color,
                        display: "inline-block",
                        margin: "0 1rem",
                        borderRadius: "100%"
                    }}></div>
                    {color}
                </h2>
                <button type="submit" className="btn btn-success">Guardar Color</button>
            </div>
        </form>
        </>
    )
}

export default ColorPicker;