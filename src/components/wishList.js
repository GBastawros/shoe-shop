// import dependancies
import React, { Suspense, useContext} from 'react'
import WishItem from './wishItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from './spinner';
import { RetrieveContext } from '../context/retrieveContext'

// import dependancies
const WishList = () => {
    const {data} = useContext(RetrieveContext)

    const loadData = data.wishlist.result.read()

    const display = loadData.map((item,index) => {
        return (
            <Col key={index} style={{display:'flex', justifyContent: 'space-around'}}>
                <WishItem item={item} key={index} />
            </Col>
        )
    })

    return (
        <Suspense fallback={<Spinner />}>
        <div className="wishList">
                <Container fluid style={{padding: '100px', textAlign: 'center'}}>
                    <Row xs={1} md={3} style={{display: 'flex', justifyContent: 'space-around'}}>
                        {display}
                    </Row>
                </Container>
        </div>
        </Suspense>
    )
    
}

export default WishList
