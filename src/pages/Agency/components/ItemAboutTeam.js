import { Card, CardContent } from "@mui/material";
import ItemCardAboutTeam from "./cards/ItemCardAboutTeam";

const ItemAboutTeam = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>About the team</h4>
                    <p className='text-muted'>Showing 2 team members from A & V Real Estate - Kellyville</p>
                    <div className='d-flex flex-wrap'>
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                        <ItemCardAboutTeam />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ItemAboutTeam;