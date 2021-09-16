import { Button } from '@material-ui/core';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

import backgoundVideo from 'assets/videos/video_background.mp4';
import './Hero.scss'

const Hero = () => {
    return(
        <div className="hero-container">
            <video className='video' autoPlay loop muted>
                <source src={backgoundVideo} type='video/mp4' />
            </video>
            <div className="hero-content">
                <h2 className="title">探索塔斯马尼亚</h2>
                <h4 className="subtitle">省心，自由，有保障，好的定制，可以不贵。塔斯曼旅游始终专注做好一件事: 为你私人定制一次难忘的塔斯马尼亚之旅。</h4>
                
            </div>

            <div className="hero-buttons">
                <Button
                    variant="contained"
                    color="primary"
                    className="button"
                    startIcon={<PlayCircleOutlineRoundedIcon />}>
                        观看我们的影片《非平凡之地》
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="button">
                        开启旅程
                </Button>
            </div>
        </div>
    );
}

export default Hero;