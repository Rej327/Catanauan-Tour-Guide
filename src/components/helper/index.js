export const getLocation = (data) => {
    // if (!data) return;

    var lat = '';
    let long = '';
    const success = (val) => {
        console.log('locationssssss', val?.coords?.latitude)
        // console.log(val?.coords?.latitude)
        if (!!val?.coords?.latitude && !!val?.coords?.longitude) {

            lat = val?.coords?.latitude;
            long = val?.coords?.longitude;
        }
    }
    const error = (val) => {
        console.log('location', val)
    }
    navigator.geolocation.getCurrentPosition(success, error);


    return {lat, long}

}

export const getDirection = (destination, startingPoint) => {
    if (!destination) return;
    const direction = destination?.replace('{{value}}', `${startingPoint?.lat}, ${startingPoint?.long}`);
    return direction;
}