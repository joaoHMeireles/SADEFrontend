import { SetStateAction, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import layout from "simple-keyboard-layouts/build/layouts/brazilian";


export default function TecladoVirtual(props: {
    valorInput: string;
    setValorInput: React.Dispatch<SetStateAction<string>>
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

    // const onChangeInput = (event: any) => {
    //     const input = event.target.value;
    //     props.setValorInput(input);

    //     // keyboard.props.setValorInput(input);
    // };

    return (
        <Keyboard
            // keyboardRef={r => (keyboard = r)}
            layout={layout.layout}
            layoutName={layoutName}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );
    // const onChange = (input: any) => {
    //     console.log("Input changed", input);
    // }

    // const onKeyPress = (button: any) => {
    //     console.log("Button pressed", button);
    // }


    // return (
    //     <>
    //         <Keyboard
    //             onChange={onChange}
    //             onKeyPress={onKeyPress}
    //             layout={layout.layout}
    //         />
    //     </>
    // )
}