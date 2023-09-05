import { Card, CardContent } from "@mui/material";
import ItemCardOverview from "./cards/ItemCardOverview";
import DividerHorizontal from "../../../components/DividerHorizontal";

const ItemOverview = () => {
    return (
        <>
            <Card className='bg-white'>
                <CardContent>
                    <h4>MRhys' performance snapshot</h4>
                    <div className='text-muted'>Performance in the last 12 months on realestate.com.au.^</div>
                    <div className='my-2'>
                        <div
                            className='d-flex w-100 justify-content-between bg-light'
                            style={{ overflowX: 'auto' }}
                        >
                        </div>
                        <DividerHorizontal />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ItemOverview;