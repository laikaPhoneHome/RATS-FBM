import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export const InputMap = (props) => {
  const { data } = props;
  const testData = [{ location: [50, 50] }];
  // const [clickedPos, setClickedPos] = useState(null);
  // const handleClick = (e) => {
  // //    setClickedPos({ location: e.latlng });
  //    console.log(e.latlng);
  //    console.log(e);
  //   };

  return (
    // <div className="input-map">
    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={false} height={500}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {testData.map((d) => {
        console.log(d);
        return (
          <Marker key={1} position={d.location}>
            {" "}
          </Marker>
        );
      })}
    </MapContainer>
    // </div>
  );
};

export default InputMap;
