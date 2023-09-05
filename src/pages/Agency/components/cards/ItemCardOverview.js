import { Card, CardContent } from "@mui/material";
import DividerVertical from "../../../../components/DividerVertical";

const ItemCardOverview = () => {
    return (
        <>

            <div style={{
                flex: 'none',
                maxWidth: '150px',
                padding: '5px 0px'
            }}
            >
                <Card className='w-100'>
                    <CardContent className='w-100'>
                        <h3>585pw</h3>
                        <p className='text-muted'>Median leased price</p>
                    </CardContent>
                </Card>
            </div>
            <DividerVertical />
        </>
    )
}

export default ItemCardOverview;
