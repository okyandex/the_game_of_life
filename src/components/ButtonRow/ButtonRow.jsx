import React, { useState } from 'react';
import Button from './Button/Button';
import Settings from './Settings/Settings'
import Reference from './Reference/Reference'
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import MainpageReferenceText from '../../Text'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switcher from '../Switcher/Switcher'
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import ThemeSelectorMD from '../ThemeSelector/ThemeSelectorMD'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


import './../../Mainpage.css';





function ButtonRow(props) {
    const { setColors, setNumberRows, setRunning,
        setNumberCols, customSizeGridGenerate, colors, runGame, numberCols, numberRows,
        emptyGridGenerate, setSavedGrid, savedGrid, gameSpeed, setGrid, grid, running, runningRef } = props;
    return (
        <div className="ButtonRow">
            <AppBar position="static">
                <Toolbar className='ToolBar'>
                    <Button
                        variant='contained'
                        // color='default'
                        title="Очистить"
                        onClick={() => {
                            props.clearGenerationsNumber();
                            setGrid(emptyGridGenerate())
                        }}
                    />
                    <Button
                        variant='contained'
                        // color='primary'
                        title="Заполнить случайно"
                        onClick={() => {
                            props.clearGenerationsNumber();
                            const rows = [];
                            for (let i = 0; i < numberRows; i++) {
                                rows.push(Array.from(Array(numberCols), () => Math.random() > 0.7 ? 1 : 0))
                            }
                            setGrid(rows);
                        }}
                    />
                    <Settings
                        colors={colors}
                        setColors={setColors}
                        ColorThemes={props.ColorThemes}
                        currentThemeName={props.currentThemeName}
                        ColorThemes={props.ColorThemes}
                        setCurrentThemeName={props.setCurrentThemeName}
                        runningRef={runningRef}
                        changeGridSize={props.changeGridSize}
                        gameSpeed={props.gameSpeed}
                        setGameSpeed={props.setGameSpeed}
                        setGrid={props.setGrid}
                    ></Settings>
                    <IconButton
                        variant='contained'
                        // color='secondary'
                        title='Старт / Стоп'
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
                    <Reference text={MainpageReferenceText}></Reference>
                    <Button
                        variant='contained'
                        // color='primary'
                        title="Сохранить сетку"
                        onClick={() => {
                            setSavedGrid(grid);
                            localStorage.setItem('Grid', JSON.stringify(grid))
                        }}
                    />
                    <Button
                        variant='contained'
                        // color='primary'
                        title="Загрузить сетку"
                        onClick={() => {
                            setGrid(savedGrid);
                        }}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ButtonRow