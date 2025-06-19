function Profile({nama , tajuk, imageUrl}){
    const profileStyle = {
        border: "1px solid black",
        padding: "10px",
        width: "350px",
        margin: "auto 50px"
    }

    const placeholderUrl = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" 
    return(
        <div style={profileStyle}>
            <img width={300} src= {imageUrl || placeholderUrl} alt="image" />
            <h4>{nama}</h4>
            <p>{tajuk}</p>
        </div>
    )
}

export default Profile