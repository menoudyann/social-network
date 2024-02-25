import "./leftBar.scss";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {/* <img
              src="https://images.pexels.com/photos/17340537/pexels-photo-17340537/free-photo-of-man-standing-on-beach-near-water-in-town.jpeg"
              alt=""
            /> */}
            <span>Yann Menoud</span>
          </div>
          <div className="item">
            <img src="" alt=""></img>
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
