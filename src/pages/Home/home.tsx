import dog from "../../assets/dog.svg"
import { Button } from "../../components/common/Button/Button";
import { ButtonVariant } from "../../components/common/Button/Button.constants";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className = {styles.container}>
        <img src={dog} width = "278px"/>
        <Link to='/pets'><Button variant={ButtonVariant.Default}>Quero adotar</Button></Link>
        <Link to='/admin'><Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button></Link>        
    </div>
  )
}