function MainPageTemplate({title, img, children}) {
    return (
        <div className="mainpage">
            <div className="mainpage-section">
                <h1>{title}</h1>
            </div>
            <div className="mainpage-section">
                <img src={img} />
            </div>
            <div className="mainpage-section">
                {children}
            </div>
        </div>
    );
}

export default MainPageTemplate;