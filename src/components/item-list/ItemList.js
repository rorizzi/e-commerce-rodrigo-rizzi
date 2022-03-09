import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Item from "../item/Item";

const ItemList = () => {

    const { idCategory } = useParams();
    const { data } = useProducts()
    
    const filterProducts = idCategory ? data.filter(({ category }) => category === idCategory) : data

    return (
            <div>
                <Container className="align-items-center justify-content-center ">
                    <Row>
                        {filterProducts.map(prod =>
                                <div key={prod.id} className="col-md-3 mb-5">
                                    <Item key={prod.id} prod={prod} />
                                </div>
                            )
                        }
                    </Row>
                </Container>
            </div>
        );
    }

export default ItemList;
