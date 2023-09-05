import { Card, CardContent } from "@mui/material";
import ItemCardAboutTeam from "./cards/ItemCardAboutTeam";
import Youtube from 'react-youtube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DividerVertical from "../../../components/DividerVertical";
const ItemAboutTeam = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="h4">About Rhys</div>
                    <div className='text-muted'>
                        With a wealth of experience in the Adelaide Real Estate market and a track record of success, Rhys Digance is a highly driven professional and brings unrivalled customer service and exceptional results to his clients throughout Adelaide.

                        Honest, genuine and transparent communication along with strong relationships are the foundation of Rhys’ business and his strict attention to detail, marketing experience and tireless work ethic ensure that your expectations are not only met but exceeded.

                        Rhys is extremely personable and prides himself on his integrity, high level of communication and ability to negotiate the best possible outcome for your greatest asset.

                        Rhys is proud to be the Co-Principal of Belle Property Glenelg and he is backed by a specialised team that has been designed to handle every facet of the selling and buying process with strong strategy and care all of which contribute to making him one of the leading agents in Adelaide.

                    </div>
                    <div className="w-100 my-2">
                        <Youtube
                            videoId={'Vnse_NKYD5k'}
                            id={'property-video'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                            iframeClassName='preview-video'
                        />
                    </div>
                    <div className="my-2 d-flex align-items-center" style={{minHeight : 40}}>
                        <span className="fw-bold">VIEW OTHER PROFILES</span> 
                         <DividerVertical />
                         <FacebookIcon/>
                         <DividerVertical />
                          <LinkedInIcon/>
                    </div>
                    <div className="w-100">
                        <button className="btn btn-danger w-100 py-2"><MailOutlineIcon />  Request a free appraisal</button>
                    </div>

                </CardContent>
            </Card>
        </>
    )
}

export default ItemAboutTeam;