import { Card, CardContent } from "@mui/material";
import ItemCardPerformance from "./cards/ItemCardPerformance";

const ItemPerformance = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>Our Market Performanc</h4>
                    <p className='text-muted'>In the last 12 months agents at A & V Real Estate - Kellyville have leased 8 properties with a median leased price of $585pw on realestate.com.au.</p>
                    <button className='btn btn-light'>Leased</button>
                    <div className='row m-0 p-0 gy-2 '>
                        <ItemCardPerformance />
                        <ItemCardPerformance />
                        <ItemCardPerformance />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ItemPerformance;