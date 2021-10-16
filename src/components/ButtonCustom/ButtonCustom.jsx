import {Button} from 'react-bootstrap'

const ButtonCustom = (props) => {

    const { text, onClick, width, height, disabled, active} = props;

    return (
        <>
            <style type="text/css">
                {`
                .btn-outline-secondary {
                border-color: #112d4e;
                color: #112d4e;
                }
                .btn-outline-secondary:hover {
                background-color: #112d4e;
                color: #ffffff;
                border-color: #112d4e;
                }
                `}
            </style>
            <Button 
                style={{width: width, height: height}} 
                variant="outline-secondary" 
                onClick={onClick}
                disabled={disabled}
                active={active}>
                <div style={{marginTop: "-5px"}}>
                    {text}
                </div>
            </Button>
        </>
    )
}

export default ButtonCustom