import React from 'react';
import "./PlayButton.scss";
import {PlayIcono, MuteIcon} from "../../utils/icons";
import useSound from 'use-sound';
import {SuccessMP3} from "../../utils/sounds";
import { toast } from 'react-toastify';
import BackgroundMP3 from "../../assets/sounds/background.mp3";

const PlayButton = ({active}) => {
    const [play, { stop, isPlaying }] = useSound(BackgroundMP3, {volume: 0.1});

    const onClickPlay = () =>{
        play();
    }

    return (
        <div className="play-button">
            <PlayIcono onClick={onClickPlay}/>
        </div>
    );
};

export default PlayButton;