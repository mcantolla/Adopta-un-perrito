import Button from "react-bootstrap/esm/Button"

function Tags ({colorButton, textButton}){
    return(
        <Button variant={colorButton}>{textButton}</Button>
    )
}

export default Tags