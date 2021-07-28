import {Button} from 'react-bootstrap'

const ButtonCustom = (props) => {

    const { text } = props;

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
            <Button style={{width: '60%', height: '10%'}} variant="outline-secondary">
                <div style={{marginTop: "-5px"}}>
                    {text}
                </div>
            </Button>
        </>
    )
}

export default ButtonCustom