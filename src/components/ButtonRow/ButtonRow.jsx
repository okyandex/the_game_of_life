import React from 'react';
import Button from './Button/Button';
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import './../../Mainpage.css';

function ButtonRow(props) {
    const { setColors, setNumberRows, setRunning,
        setNumberCols, customSizeGridGenerate, colors, runGame, numberCols, numberRows,
        emptyGridGenerate, setSavedGrid, savedGrid, gameSpeed, setGrid, grid, running, runningRef } = props;
    return (
        <div className="ButtonRow">
            <Button
                variant='contained'
                color='primary'
                title="Clear"
                onClick={() => {
                    props.clearGenerationsNumber();
                    setGrid(emptyGridGenerate())
                }}
            />
            <Button
                variant='contained'
                color='primary'
                title="Random"
                onClick={() => {
                    props.clearGenerationsNumber();
                    const rows = [];
                    for (let i = 0; i < numberRows; i++) {
                        rows.push(Array.from(Array(numberCols), () => Math.random() > 0.7 ? 1 : 0))
                    }
                    setGrid(rows);
                }}
            />
            <Button
                variant='contained'
                color='primary'
                title="Save grid"
                onClick={() => {
                    setSavedGrid(grid);
                }}
            />
            <Button
                variant='contained'
                color='primary'
                title="Load grid"
                onClick={() => {
                    setGrid(savedGrid);
                }}
            />
            <IconButton
                variant='contained'
                color='secondary'
                title='Play/Pause'
                onClick={() => {
                    setRunning(!running)
                    console.log(gameSpeed)
                    if (!running) {
                        runningRef.current = true;
                        runGame();
                    }
                }}>
                {runningRef.current ? <PauseCircleOutlineRoundedIcon fontSize='large' /> : <PlayCircleOutlineRoundedIcon fontSize='large' />}
                {/* <PlayCircleOutlineRoundedIcon color="primary" fontSize='medium'/> */}
            </IconButton>
            {/* <Button
                variant='contained'
                color='primary'
                title={running ? 'Stop' : 'Start'}
                onClick={() => {
                    setRunning(!running)
                    console.log(gameSpeed)
                    if (!running) {
                        runningRef.current = true;
                        runGame();
                    }
                }}
            /> */}
            <Button
                variant='contained'
                color='secondary'
                disabled={runningRef.current ? true : false}
                title={'XL'}
                onClick={() => props.changeGridSize('XL')}
            />
            <Button
                variant='contained'
                disabled={runningRef.current ? true : false}
                color='secondary'
                title={'L'}
                onClick={() => props.changeGridSize('L')}
            />
            <Button
                variant='contained'
                disabled={runningRef.current ? true : false}
                color='secondary'
                title={'M'}
                onClick={() => props.changeGridSize('M')}
            />
            {/* <Button
            variant='contained'
            color='primary' 
            title='50 x 50'
            disabled={runningRef.current ? true : false}
            onClick={() => {
                setGrid(customSizeGridGenerate(50, 50));
                setNumberRows(50);
                setNumberCols(50);
                setSavedGrid(customSizeGridGenerate(50, 50));
            }}
        />
        <Button
            variant='contained'
            color='primary' 
            title='30 x 30'
            disabled={runningRef.current ? true : false}
            onClick={() => {
                setGrid(customSizeGridGenerate(30, 30));
                setNumberRows(30);
                setNumberCols(30);
                setSavedGrid(customSizeGridGenerate(30, 30));
            }}
        /> */}
        </div>
    )
}

export default ButtonRow