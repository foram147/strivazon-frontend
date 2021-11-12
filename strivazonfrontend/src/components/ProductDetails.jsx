import { useEffect, useState } from "react";

import { Row, Container, Col } from "react-bootstrap";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchTheProductDetails();
  }, []);

  const fetchTheProductDetails = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      let data = await response.json();
      if (response.ok) {
        console.log("here is my review", data);
        setReview(data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    {
      /*let urlId = match.params.productId;*/
    }
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzM3MDAwMDEsImV4cCI6MTYzNDkwOTYwMX0.lmfeymvE2iX4Gauji1DolGdIozJ-wNP0sR0DbfXgSlI",
          },
        }
      );
      let productData = await response.json();
      if (response.ok) {
        console.log("here  product data", productData);

        setProduct(productData);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {
        <Container>
          <Row>
            {product && (
              <Col xs={6} md={3} className="fetched">
                <div className="card pt-2 rp-card">
                  <img
                    className="recent-ply-card-img ml-3 pl-2"
                    src={product.image_url}
                    alt="Card image cap"
                    height="100px"
                    width="100px"
                  />
                  <p>{product.name}</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      }

      {review.map((r) => (
        <Row>
          <Col>
            <div className="row-songs" className="fetched">
              <div className="col-1 track-number mx-5">11</div>
              <div className="col-10">
                <div className="row1">{r.comment}</div>
                <div className="row2">{r.rate}</div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};
export default ProductDetails;
