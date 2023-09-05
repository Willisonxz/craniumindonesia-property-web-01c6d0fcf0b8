import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import MainTabs from './MainTabs';

const Search = ({ }) => {
    return (
        <>
            <div>
                <div style={{
                    width: '250px',
                    height: '25px',
                    marginTop: '5px',
                    padding: 0,
                }}>
                    <div className="row">
                        <div className="col pr-2">
                            <input className="Search p-2" type="text" placeholder="Search by address, region or agent" maxWidth={150}
                                style={{
                                    width: '200px',
                                    height: '25px',
                                    marginTop: '5px',
                                    padding: 0,
                                }} />
                        </div>
                        <div className="col p-0" style={{ marginTop: 1.5 }}>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;