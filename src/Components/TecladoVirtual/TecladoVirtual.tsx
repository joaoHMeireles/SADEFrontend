import { SetStateAction, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import "./TecladoVirtual.scss";
import Keyboard from 'react-simple-keyboard';
import Draggable from 'react-draggable';
import 'react-simple-keyboard/build/css/index.css';
import layout from "simple-keyboard-layouts/build/layouts/brazilian";


export default function TecladoVirtual(props: {
    valorInput: string;
    setValorInput: React.Dispatch<SetStateAction<string>>;
}) {
    const [layoutName, setLayoutName] = useState("default")

    const onChange = (input: string) => {
        props.setValorInput(input);
        console.log("Input changed", input);
    };

    const onKeyPress = (button: any) => {
        console.log("Button pressed", button);

        if (button === "{shift}" || button === "{lock}") {
            handleShift();
        }
    };

    const handleShift = () => {
        const previousLayoutName = layoutName;

        setLayoutName(previousLayoutName === "default" ? "shift" : "default");
    };

    return (
        <Draggable>
            <Box sx={{cursor: "move", position: "absolute", bottom: "0px", left: "24vw", width: "50vw", backgroundColor: "rgb(255,255,255, 0.9)", padding: "1.5rem", borderRadius: "5px" }}>
                <Keyboard
                    layout={layout.layout}
                    layoutName={layoutName}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    theme={"hg-theme-default hg-layout-default myTheme"}
                    buttonTheme={[
                        {
                            class: "hg-red",
                            buttons: "Q W E R T Y q w e r t y"
                        },
                        {
                            class: "hg-highlight",
                            buttons: "Q q"
                        }
                    ]}
                />
            </Box>
        </Draggable>

    );
}