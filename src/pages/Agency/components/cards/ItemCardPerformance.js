import { Card, CardContent } from "@mui/material";

const ItemCardPerformance = () => {
    return (
        <>
            <div className='col-xs-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 mx-0 px-0'>
                <Card className='p-0'>
                    <CardContent className='p-0'>
                        <div className='row m-0 p-0'>
                            <div className='col-xs-12 col-xs-12 col-md-4 col-lg-4 col-xl-4 py-3'>
                                <div></div>
                                <div>House</div>
                            </div>
                            <div className='col-xs-6 col-xs-6 col-md-8 col-lg-8 col-xl-8 bg-light h-100 py-3'>
                                <div className='d-flex justify-content-between'>
                                    <div>Leased</div>
                                    <div>4 Leased</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>Median price</div>
                                    <div>$540pw</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>Median days advertised</div>
                                    <div>33.5 days</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default ItemCardPerformance;
