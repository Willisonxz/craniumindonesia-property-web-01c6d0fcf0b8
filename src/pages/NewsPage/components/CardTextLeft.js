import { ButtonBase, Grid, Paper } from "@mui/material";
import img from '../NewsPage/assets/image_2.png'

const CardTextLeft = () => {
    return (
        <>
            <div className="col-12 pb-1">
                <Paper
                    sx={{
                        pb: 0,
                        margin: 0,
                        maxWidth: 300,
                        flexGrow: 1,
                        boxShadow: 'none',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item sx={{ width: 140, height: 130 }}>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <img alt="complex" src={img}
                                    style={{
                                        maxWidth: '100%',
                                        height: '100%'
                                    }} />
                            </ButtonBase>
                        </Grid>
                        <Grid item sx={12} sm container>
                            <Grid item sx container direction="column" spacing={2}>
                                <Grid item sx>
                                    <h1 className="mt-1"
                                        style={{
                                            color: '#6E6E6E',
                                            fontFamily: 'Roboto',
                                            fontSize: '12px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: 'normal',
                                        }}>
                                        MELBOURNE
                                    </h1>
                                    <h4 style={{
                                        color: '#000',
                                        fontFamily: 'Roboto',
                                        fontSize: '18px',
                                        fontStyle: 'bold',
                                        fontWeight: 600,
                                        lineHeight: 'bold',
                                    }}>
                                        Victoria ‘the worst stateto be a landlord’
                                    </h4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    )
}

export default CardTextLeft;