import { Avatar, Card, CardContent } from "@mui/material";
import DividerHorizontal from "../../../../components/DividerHorizontal";

const ItemCardAboutTeam = () => {
    return (
        <div className='my-2' style={{ marginRight: '10px', height : 150, width: 150  }}>
            <Card>
                <CardContent>
                    <div className='d-flex justify-content-center align-items-center flex-column' >
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                        <DividerHorizontal />
                        <div className='text-center'>ssr</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default ItemCardAboutTeam;