import * as React from 'react';
// material UI
import { createFilterOptions } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
// components
import ComponentAgency from './ComponentAgency';
import ComponentAgent from './ComponentAgent';

// dummy data



const Page = () => {
    const [selectedIndexShowModal, setSelectedIndexShowModal] = React.useState(null) // modal show agent component, index data
    const [open, setOpen] = React.useState(false); // condition show modal video agent
    const [option, setOption] = React.useState('Agent'); // Agent and Agency
    return (
        <>
            {
                option === 'Agent' ?
                    <ComponentAgent selectedIndexShowModal={selectedIndexShowModal} setSelectedIndexShowModal={setSelectedIndexShowModal} open={open} setOpen={setOpen} option={option} setOption={setOption} />
                    :
                    <ComponentAgency selectedIndexShowModal={selectedIndexShowModal} setSelectedIndexShowModal={setSelectedIndexShowModal} open={open} setOpen={setOpen} option={option} setOption={setOption} />
            }

        </>
    )
}

export default Page;

// https://www.realestate.com.au/find-agent/adelaide---greater-region-sa?campaignType=internal&campaignChannel=in_product&campaignSource=rea&campaignName=sell_enq&campaignPlacement=agent_search&campaignKeyword=agency_marketplace
