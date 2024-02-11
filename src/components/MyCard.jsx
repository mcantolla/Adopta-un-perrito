import Card from 'react-bootstrap/Card';
import Tags from './Tags';
import "../assets/myCard.css"


function MyCard ({image, dogName, description, colorButton, textButton}) {
    return(
    <div className="cardWrapper">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{dogName}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags colorButton={colorButton} textButton={textButton} />
      </Card.Body>
    </Card>
    </div>
    )
}

export default MyCard