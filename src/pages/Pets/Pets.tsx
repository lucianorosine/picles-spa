import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";

import { Skeleton } from "../../components/common/skeleton";

export function Pets(){
    return (
        <Grid>
            <div className={styles.container}>
            <Header />
            <main className={styles.list}>
                <Skeleton count={5} containerClassName={styles.skeleton}/>
                
              


            </main>
            </div>
        </Grid>
    )
}