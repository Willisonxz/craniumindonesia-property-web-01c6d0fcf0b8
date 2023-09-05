import "./assets/collections.css";
import * as React from 'react';
import { useState } from 'react';
import { Box, Collapse, Tab, Tabs, Typography } from "@mui/material";
import FooterCollections from "./components/FooterCollections";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import NavbarAfterLogin from "../Profile/components/NavbarAfterLogin";

export default function HiddenProperties() {
    const [checked, setChecked] = useState(false);

    const handleInfoClick = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            <NavbarAfterLogin />
            <Box className="full-height bg-content-detail" sx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}>
                <div className="py-5">
                    <div className="box-content-collections">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="align-items-center w-100">
                                    <Typography fontSize={"34px"} fontWeight={"700"}>Hidden Properties</Typography>
                                </div>
                            </div>
                        </div>

                        {/* Display Properties */}
                        <div className="row mx-0 px-0 my-2 gy-4 gx-4">
                            <div className="center-container">
                                <div className="center-content" style={{ padding: "10rem" }}>
                                    <div>
                                        <Typography fontSize={"20px"} fontWeight={"700"}>No hidden rental properties</Typography>
                                    </div>
                                    <div>
                                        <Typography fontSize={"18px"}>Select the '...' and then 'Hide' on a property for rent to remove it from all search results</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="row mx-0 px-0 my-2 gy-4 gx-4">
                            <div className="center-container">
                                <div className="center-content">
                                    <div className="p-3" onClick={() => handleInfoClick(!checked)}>
                                        <Typography fontWeight={"700"} className="text-muted pointer">
                                            Additional Legal and Disclaimer Information 
                                            <KeyboardArrowDownOutlined 
                                                sx={{'&.arrow-key-rotate': {
                                                    transform: "rotate(-180deg)"
                                                },
                                                transition: '0.3s ease all'}}
                                                className={`arrow-key ${checked ? 'arrow-key-rotate' : ''}`} />
                                        </Typography>
                                    </div>
                                    <Collapse in={checked}>
                                        <div className="text-muted" style={{ textAlign: "start" }}>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    This sold transactions information is based on historical and current data supplied to our affiliate companies by State government agencies or Third Parties. This information constitutes "Third Party Content“ for the purposes of our website terms of use. realestate.com.au Pty Ltd does not make any warranty as to the accuracy, completeness or reliability of the information or accept any liability arising in any way from any omissions or errors. The information should not be regarded as advice or relied upon by you or any other person and we recommend that you seek professional advice before making any property decisions.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>Victorian Data</div>
                                                    The State of Victoria owns the copyright in the Property Sales Data and reproduction of that data in any way without the consent of the State of Victoria will constitute a breach of the Copyright Act 1968 (Cth). The State of Victoria does not warrant the accuracy or completeness of the Property Data and any person using or relying upon such information does so on the basis that the State of Victoria accepts no responsibility or liability whatsoever for any errors, faults, defects or omissions in the information supplied.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>Western Australian Data</div>
                                                    Based on information provided by and with the permission of the Western Australian Land Information Authority (2018) trading as Landgate.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>New South Wales Data</div>
                                                    Property sales information provided by Property NSW from {'<globe.six.nsw.gov.au>'} under a Creative Commons Attribution 4.0 licence.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>Queensland Data</div>
                                                    Based on or contains data provided by the State of Queensland (Department of Natural Resources and Mines) 2018. In consideration of the State permitting use of this data you acknowledge and agree that the State gives no warranty in relation to the data (including accuracy, reliability, completeness, currency or suitability) and accepts no liability (including without limitation, liability in negligence) for any loss, damage or costs (including consequential damage) relating to any use of the data. Data must not be used for direct marketing or be used in breach of the privacy laws.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>Tasmania Data</div>
                                                    This product incorporates data the copyright ownership of which is vested in the Crown in Right of Tasmania. The data has been used in the product with the permission of the Crown in Right of Tasmania. The Crown in Right of Tasmania and its employees and agents:
                                                    <div>(a) give no warranty regarding the data's accuracy, completeness, currency or suitability for any particular purpose; and</div>
                                                    <div>(b) do not accept liability howsoever arising, including but not limited to negligence, for any loss resulting from the use of or reliance upon the data.</div>
                                                    Base data with the LIST © Crown in Right of Tasmania www.thelist.tas.gov.au
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>Australian Capital Territory Data</div>
                                                    The Territory Data is the property of the Australian Capital Territory. No part of it may in any form or by any means (electronic, mechanical, microcopying, photocopying, recording or otherwise) be reproduced, stored in a retrieval system or transmitted without prior written permission. Enquiries should be directed to: Director, Customer Services, ACT Planning and Land Authority, GPO Box 1908, Canberra ACT 2601.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>South Australia Data</div>
                                                    Copyright in this information belongs to the South Australian Government and the South Australian Government does not accept any responsibility for the accuracy or completeness of the information or its suitability for any purpose.
                                                </Typography>
                                            </p>
                                            <p>
                                                <Typography fontSize={"12px"}>
                                                    <div>Northern Territory Data</div>
                                                    Based on information provided under licence by the Department of Lands and Planning, Northern Territory of Australia.
                                                </Typography>
                                            </p>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <FooterCollections />
        </>
    )
}