import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import bath from "../assets/Bathroom Logo.png"
import car from "../assets/Car spaces Logo.png"
import bed from "../assets/Bedroom Logo.png"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function SaveSearch() {
    const navigate = useNavigate()
    const [name, setName] = useState("")

  return (
    <>
    <div className='col-12 d-flex justify-content-center'>
        <div className='shadow box-save-search bg-ff d-flex align-center flex-column'>
            <div className='col-12 text-center title-sv'>
                <h6 className='s-20 w-600'>Save your search</h6>
            </div>
            <div className='col-12 content-sv '>
                <p style={{marginBottom:"0.25rem"}}>Name</p>
                <input type='text' className='col-12 s-16' onChange={(e)=>setName(e.target.value)} />
                {name==="" &&
                <p className='s-16 w-400' style={{color:"#a8420d"}}>Please provide a name</p>}
                <div className='col-12 d-flex align-items-center' style={{marginTop:"1.5rem"}}>
                    <p className='w-400 s-16 m-0' style={{color:"#3b3d40"}}>Buy</p>
                    <p className='w-400 line_'></p>
                    <p className='w-400 s-16 m-0' style={{color:"#3b3d40"}}>Any Price</p>
                </div>
                <div className='d-flex col-12' style={{marginTop:"8px", marginBottom:"4.5rem"}}>
                    <img src={bed} alt='' />
                    <p className='m-0 c-3d s-16 w-400'>&nbsp; - &nbsp;</p>
                    <img src={bath} alt='' />
                    <p className='m-0 c-3d s-16 w-400'>&nbsp; - &nbsp;</p>
                    <img src={car} alt='' />
                </div>
                <div className='col-12'>
                    <FormControlLabel
                        control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small"  sx={{margin:"0px auto auto auto"}}/>}
                        />}
                        label={"Let me know when properties that match this search go for sale or are preparing to."}
                      />
                </div>
            </div>
            <div className='footer-sv col-12 align-items-center d-flex justify-content-between'>
                <button className='bt-cancel w-500' onClick={(e)=>navigate(-1)}>Cancel</button>
                <button className='bt-save w-500' onClick={(e)=>navigate(-1)}>Save</button>
            </div>
        </div>
    </div>
    </>
  )
}
