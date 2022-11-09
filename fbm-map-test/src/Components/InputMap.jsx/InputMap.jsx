import { MapContainer, TileLayer } from 'react-leaflet'

export const InputMap = (props) => {
    const {data} = props;

    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={false} height={500}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((d) => {
            return  <Marker center={d.location}> </Marker>
            })}


      </MapContainer>
}

export default InputMap;