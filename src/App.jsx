import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setLocations } from "./app/features/locations/locationsSlice";
import { setSelectedLocation } from "./app/features/selectedLocation/selectedLocationSlice";

import Image from "./components/Image";

import peopleGroupImage from "./assets/images/people-group.png";
import locationsData from "./data/locations.json";
import {
  calculateSicknessProbability,
  calculateSicknessCount,
} from "./utils/sicknessProbabilityCalculator";

const groupSize = 10;

const App = () => {
  const locations = useSelector((state) => state.locations.value);
  const selectedLocation = useSelector((state) => state.selectedLocation.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocations(locationsData));
    dispatch(setSelectedLocation(locationsData[0]));
  }, [locationsData]);

  const handleLocationChange = (event) => {
    const locationName = event.target.value;
    const location = locations.find(
      (location) => location.name === locationName
    );
    dispatch(setSelectedLocation(location));
  };

  if (!selectedLocation) {
    return <div className="loader">Loading...</div>;
  }

  const sicknessProbability = calculateSicknessProbability(
    selectedLocation.aqi,
    selectedLocation.respiratoryIllnessPercentage
  );

  const sicknessCount = calculateSicknessCount(sicknessProbability, groupSize);

  return (
    <main>
      <section className="radar">
        <div className="container mt-5 mb-5">
          <h1 className="text-center">Bereken de kans op Ademhalingsziekte</h1>
          <div className="row justify-content-center mt-3">
            <div className="col-md-6 card p-4 radar-card">
              <div className="form-group">
                <label htmlFor="locationSelect">Selecteer een locatie:</label>
                <select
                  id="locationSelect"
                  className="form-control"
                  onChange={handleLocationChange}
                  value={selectedLocation.name}
                >
                  {locations.map((location) => (
                    <option key={location.name} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-3">
                <p>
                  <strong>Geselecteerde locatie:</strong>{" "}
                  {selectedLocation.name}
                </p>
                <p>
                  <strong>Luchtkwaliteitsindex (AQI):</strong>{" "}
                  {selectedLocation.aqi}
                </p>
                <p>
                  <strong>% Mensen met ademhalingsziekte:</strong>{" "}
                  {selectedLocation.respiratoryIllnessPercentage}%
                </p>
                <p>
                  <strong>% Kans op ademhalingsziekte:</strong>{" "}
                  {(sicknessProbability * 100).toFixed(2)}%
                </p>
                <div>
                  <Image
                    className="mt-2"
                    src={peopleGroupImage}
                    alt="People group image"
                  />
                  <p>
                    <strong>Geschat aantal getroffen personen:</strong>{" "}
                    {sicknessCount} van {groupSize}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
