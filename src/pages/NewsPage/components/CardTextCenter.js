import img from '../NewsPage/assets/image_2.png'

const CardTextCenter = () => {
    return (
        <>
            <img src={img} style={{ height: 'auto', width: '100%', }} />
            <div style={{ padding: "0px 0px 0px" }}>
                <h1 className="mt-4 text-center"
                    style={{
                        color: '#6E6E6E',
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 300,
                        lineHeight: 'normal',
                    }}>
                    MELBOURNE
                </h1>
                <h4 className=" mt-3 text-center" style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'bold',
                    fontWeight: 600,
                    lineHeight: 'bold',
                }}>
                    Victoria ‘the worst stateto be a landlord’
                </h4>
            </div>
        </>
    )
}

export default CardTextCenter;