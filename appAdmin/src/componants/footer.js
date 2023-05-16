function Footer(props) {
    return (
      <footer className="footer-style fixed-bottom">
        <div className="row d-flex justify-content-center">
          <i className="col-1 bi-facebook text-center pe-5 ps-0 p-md-0" style={{ fontSize: '2rem' }}></i>
          <i className="col-1 bi-twitter text-center pe-5 ps-0 p-md-0" style={{ fontSize: '2rem' }}></i>
          <i className="col-1 bi-instagram text-center ps-0 p-md-0" style={{ fontSize: '2rem' }}></i>
        </div>
        <div>
            <div className="row-fluid">
                <div className="span12 text-center">
                    PlainShirt™
                </div>
            </div>
            <div className="row-fluid">
                <div className="span12 text-center">2023</div>
            </div>
        </div>
      </footer>
    );
  }

  export default Footer;