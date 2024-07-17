import { useState } from "react";
function Box(props) {
    // const [boxColor, setBoxColor] = useState("white");
    const { boxIndex, boxRefs, boxOrders } = props;

    const changeYellowColorInOrder = () => {

        let timerOrder = 0;
        for (let i = boxOrders.length - 1; i >= 0; i--) {
            let orderIndex = boxOrders[i];
            setTimeout(() => {
                boxRefs.current[orderIndex].style.backgroundColor = "yellow";
            }, 500 * timerOrder);
            timerOrder++;
        }
        // boxOrders.forEach((orderIndex, currIndex) => {
        //     setTimeout(() => {
        //         boxRefs.current[orderIndex].style.backgroundColor = "yellow";
        //     }, 500 * currIndex);
        // });

    }


    const changeBoxColor = () => {
        const index = boxOrders.indexOf(boxIndex);

        if (index === -1) {
            //if orderIndex did not push then push it.This did not push duplicate ele if you click on clicked Box more then 1 times. 
            boxOrders.push(boxIndex);
        }

        boxRefs.current[boxIndex].style.backgroundColor = "green";

        //if ele is last then .....
        if (boxOrders.length === 9) {
            changeYellowColorInOrder();
            return;
        }
    }



    return (
        <div className="Box" onClick={changeBoxColor} ref={el => boxRefs.current[boxIndex] = el}>
        </div>
    );
}
export default Box;
