import styles from "./DisplayButton.module.css"

function DisplayButton(){
    let btnList = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
    return <>
            {
                btnList.map( btn =>(
                    <button type="button" className={styles.btnCalc}>{btn}</button>
                ))
            }
    </>
}

export default DisplayButton;