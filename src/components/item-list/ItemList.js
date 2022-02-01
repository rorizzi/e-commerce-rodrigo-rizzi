import { Container, Row } from "react-bootstrap";
import Item from "../item/Item";

const ItemList = ({ products }) => {

    return (
    <div>
                    
            <Container style={{alignItems:'center', justifyContent: 'center'}}>
                <Row>
                 {products?.map(prod => <Item key={prod.id} prod={prod} />)}
                </Row>
            </Container>
        
    </div>
    );
};

export default ItemList;
