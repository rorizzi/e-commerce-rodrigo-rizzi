import { Container, Row } from "react-bootstrap";
import Item from "../item/Item";

const ItemList = ({ products }) => {

    return (
    <div>                
            <Container style={{alignItems:'center', justifyContent: 'center'}}>
                <Row>
                 {products?.map(prod => 
                 <div className="col-md-3">
                    <Item key={prod.id} prod={prod} />
                </div>
                )}
                </Row>
            </Container>
        
    </div>
    );
};

export default ItemList;
