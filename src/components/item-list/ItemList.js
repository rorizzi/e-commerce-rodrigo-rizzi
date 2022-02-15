import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Item from "../item/Item";

const ItemList = ({ products }) => {
    const {idCategory} = useParams();
    const filterProducts = products.filter(({ category }) => category === idCategory);

    if(idCategory === undefined) {
        return (
            <div>                
                <Container style={{alignItems:'center', justifyContent: 'center'}}>
                    <Row>
                     {products?.map(prod => 
                     <div key={prod.id}className="col-md-3">
                        <Item key={prod.id} prod={prod} />
                    </div>
                    )}
                    </Row>
                </Container>                
            </div>
        );
    }else {
        return (
            <div>
                <Container style={{alignItems:'center', justifyContent: 'center'}}>
                    <Row>
                        {filterProducts.map(prod =>
                            <div key={prod.id} className="col-md-3">
                                <Item key={prod.id} prod={prod} />
                            </div>)}
                    </Row>
                </Container>
            </div>
        );
    }
    
};

export default ItemList;
