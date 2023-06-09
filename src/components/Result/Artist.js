import { useElementOnSreen } from '../../hooks/elementOnScreen';
import '../../styles/Artist.css';

export const Artist = ({data, title}) => {
    const [containerRef, visible] = useElementOnSreen();

    return(
        <div className={`artist-box ${visible ? "artist-reveal" : "artist-hidden"}`} ref={containerRef}>
            <h1 className="artist-box-title">
                {title}
            </h1>
            <div className="artist-list">
                {
                    data.map(
                        (item) => {
                            return(
                                <div className="artist-card">
                                    <img src={item.img} alt="artist-avatar" className="artist-avatar"/>
                                     
                                    <h2 className="artist-name">
                                        <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                                    </h2>
                                    <div className="artist-genre-box">
                                        {
                                            item.genres.map(
                                                (g) => {
                                                    return(
                                                        <div className="artist-genre-tag">
                                                            {g}
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};