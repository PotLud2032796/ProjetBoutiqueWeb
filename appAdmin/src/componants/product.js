import { useNavigate, redirect } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();

  const clickEdit = () => {
    navigate(`/edit/${props.productId}`);
  };

  const clickDelete = () => {

    const data = {
      id: props.productId
    };

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(`http://localhost:3000/products/${data.id}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        redirect("/main");
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="col-12 p-0 d-flex justify-content-center">
      <div className="mt-3 w-100 shadow card mb-3" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.imageSrc} className="img-fluid img-size rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.nom}</h5>
              <p className="card-text">{props.details}</p>
              <button className="buttonEdit me-2" onClick={clickEdit}>
                <i class="bi bi-pen-fill"></i>
              </button>
              <button className="buttonEdit" onClick={clickDelete}>
                <i class="bi bi-trash-fill"></i>
              </button>
              <p className="card-text price-stock my-3">{props.stock} | {props.prix}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
