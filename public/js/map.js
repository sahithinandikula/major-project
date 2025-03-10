
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

    const marker=new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25}) .setHTML(
            `<h4>${listing.title}</h4>
            <p>Exact location will be provided after your booking</p>`
        )
    )
    .addTo(map);


//     mapboxgl.accessToken = mapToken;

// if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//         zoom: 9 // starting zoom
//     });

//     const marker = new mapboxgl.Marker({ color: "red" })
//         .setLngLat(listing.geometry.coordinates)
//         .setPopup(
//             new mapboxgl.Popup({ offset: 25 }).setHTML(
//                 `<h4>${listing.title}</h4>
//                  <p>Exact location will be provided after your booking</p>`
//             )
//         )
//         .addTo(map);
// } else {
//     console.error('Invalid geometry coordinates for listing');
// }
