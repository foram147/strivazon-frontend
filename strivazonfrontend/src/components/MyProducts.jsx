import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

const MyProducts = () => {
  const [productArray, setProductArray] = useState([]);
  const fetchTheProducts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=album"
      );
      let data = await response.json();
      if (response.ok) {
        console.log("here", data);
        setProductArray(data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheProducts();
  }, []);

  return (
    <>
      {console.log(productArray)}

      <Container>
        <Row>
          {productArray.map((product) => (
            <Col xs={6} md={3} className="fetched">
              <div className="card pt-2 rp-card">
                {/* <Link to={productArray/${product.id}}> 
              <img
                  className="recent-ply-card-img ml-3 pl-2"
                  src={product.imageUrl}
                  alt="Card image cap"
                />
                         </Link>
*/}
                <p>{product.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default MyProducts;
