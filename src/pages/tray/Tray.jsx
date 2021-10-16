import { inject, observer } from "mobx-react"
import TimerDisplay from '../../components/TimerDisplay'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useEffect } from 'react';

const Tray = inject('taskList', 'timerStore')(observer((props) => {

    const { taskList, timerStore } = props;

    let firstButton;
    let secondButton;
    let thirdButton

    if (!timerStore.isRunning) {

        firstButton = (
        <>
            <style type="text/css">
            {`
                .btn-outline-secondary {
                border: none;
                color: #112d4e;
                width: 85px;
                }
                .btn-outline-secondary:hover {
                background-color: #112d4e;
                color: #ffffff;
                border: none;
                }
                `}
            </style>
            <Button variant="outline-secondary" onClick={() => timerStore.resetTimer()}>Reset</Button>
        </>
        
        );

        secondButton = (
            <Button variant="outline-secondary" onClick={() => timerStore.startTimer()}>Start</Button>
        );

        thirdButton = (
            <Button variant="outline-secondary" style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} onClick={() => timerStore.lapTimer()}>Finish</Button>
        );
    } else {

        firstButton = (
        <>
            <style type="text/css">
                {`
                .btn-outline-secondary {
                border: none;
                color: #112d4e;
                width: 85px;
                }
                .btn-outline-secondary:hover {
                background-color: #112d4e;
                color: #ffffff;
                border: none;
                }
                `}
            </style>
            <Button variant="outline-secondary" onClick={() => timerStore.resetTimer()}>Reset</Button>      
        </>
        );

        secondButton = (
            <Button variant="outline-secondary" onClick={() => timerStore.stopTimer()}>Pause</Button>
        );

        thirdButton = (
            <Button variant="outline-secondary" style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} onClick={() => timerStore.lapTimer()}>Finish</Button>
        );
        
    }

    useEffect(() => {

		console.log(timerStore.mainDisplay)
		
	}, [timerStore.mainDisplay])

    return (
        <div style={{width: 250, height: 400, overflow: 'hidden'}}>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <div style={{display: 'flex', fontSize: 20, width: '100%', height: '15%', alignItems: 'center', justifyContent: 'center'}}>
                    {taskList.selectedTask != null ? taskList.selectedTask.title : ""}
                </div>
                <div style={{width: '100%', height: '40%', display: 'flex', flexDirection: 'column', overflow: 'scroll'}}>

                {timerStore.lapData.map((el) =>
                            <TimerDisplay
                                key={el.lap.id}
                                leftText={el.text}
                                rightText={el.lap.display}
                            />
                        )}

                </div>
                
                <div style={{width: '100%', height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{fontSize: 30, letterSpacing: 2}}>
                        {localStorage.getItem("mainDisplay")}
                    </div>

                    <div>
                        <div>
                            <ButtonGroup size="md">
                                {firstButton}
                                {secondButton}
                                {thirdButton}
                            </ButtonGroup>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}))

export default Tray