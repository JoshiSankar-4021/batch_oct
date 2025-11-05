import chvimage from '../assets/images/CHV youtube Banner[1].png'
import song from '../assets/audios/gentleman.mp3';
function Images(){
    const imagurl='https://imgd.aeplcdn.com/600x337/n/cw/ec/131825/be-6e-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80'
    return(
        <div>
            <h1>Media</h1>
            <h2>Static</h2>
            <img src='https://imgd.aeplcdn.com/600x337/n/cw/ec/131825/be-6e-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80'/>
            <h2>HYBRID</h2>
            <img src={imagurl}/>
            <audio controls>
                <source src='https://res.cloudinary.com/dir0f6ufp/video/upload/v1762329511/media_user/2/post_2_1762329507135_Jawan.mp3.mp3' type="audio/mpeg" />
            </audio>
            <h2>Asstes</h2>
            <img src={chvimage} style={{height:"500px",width:"500px"}}/><br/>
            <audio controls>
                <source src={song} type="audio/mpeg" />
            </audio>
        </div>
    );
}
export default Images;