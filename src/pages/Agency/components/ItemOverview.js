import { Card, CardContent } from "@mui/material";
import ItemCardOverview from "./cards/ItemCardOverview";
import DividerHorizontal from "../../../components/DividerHorizontal";

const ItemOverview = () => {
    return (
        <>
            <Card className='bg-white'>
                <CardContent>
                    <h4>Market performance snapshot</h4>
                    <p className='text-muted'>In the last 12 months A & V Real Estate - Kellyville has leased 8 properties on realestate.com.au.</p>
                    <div className='my-2'>
                        <p>RENT PERFORMANCE</p>
                        <div
                            className='d-flex w-100 justify-content-between'
                            style={{
                                overflowX: 'auto',
                            }}
                        >
                            <ItemCardOverview />
                            <ItemCardOverview />
                            <ItemCardOverview />
                            <ItemCardOverview />

                        </div>
                        <DividerHorizontal />
                        <p>SALES PERFORMANCE</p>
                        <div
                            className='d-flex w-100 justify-content-between'
                            style={{
                                overflowX: 'auto',
                            }}
                        >
                            <ItemCardOverview />
                            <ItemCardOverview />
                            <ItemCardOverview />
                            <ItemCardOverview />

                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ItemOverview;