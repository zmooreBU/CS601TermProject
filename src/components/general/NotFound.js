import './mainpage.css';
import MainPageTemplate from './MainPageTemplate';

function NotFound() {
    return (
        <MainPageTemplate title="Sorry!" img="/assets/mainpage-img.png">
            <p>Oops, looks like there's nothing here! </p>
        </MainPageTemplate>
    )
}

export default NotFound;