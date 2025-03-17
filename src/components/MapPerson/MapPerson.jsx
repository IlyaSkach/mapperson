import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/icons/marker.svg";
import starScoreIcon from "../../assets/icons/star-score.svg";
import { peopleData } from "./peopleData";
import "./MapPerson.css";
import VideoModal from "./VideoModal";

// Создаем кастомную иконку
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [27, 25],
  iconAnchor: [13.5, 12.5],
  popupAnchor: [0, -12.5],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  className: "custom-icon",
});

const MapPerson = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleMarkerClick = (person) => {
    if (selectedPerson?.id === person.id) {
      setSelectedPerson(null);
    } else {
      setSelectedPerson(person);
      setShowDetails(false);
    }
  };

  const handleHeroClick = () => {
    setShowDetails(true);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className={`map-wrapper ${showDetails ? "map-shifted" : ""}`}>
        <MapContainer
          center={[55.751244, 37.618423]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {peopleData.map((person) => (
            <Marker
              key={person.id}
              position={person.coordinates}
              icon={customIcon}
              eventHandlers={{
                mouseover: () => handleMarkerClick(person),
              }}
              className={
                selectedPerson?.id === person.id ? "marker-hovered" : ""
              }
            >
              {selectedPerson?.id === person.id && (
                <div className="person-card">
                  <button
                    className="close-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPerson(null);
                      setShowDetails(false);
                    }}
                  >
                    ✕
                  </button>
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="person-avatar"
                  />
                  <div className="person-info">
                    <h3>{person.name}</h3>
                    <div className="person-details">
                      <div className="detail-item">
                        <span className="label">РЕГИОН</span>
                        <span className="value">{person.region}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">ПРОФЕССИЯ</span>
                        <span className="value">{person.profession}</span>
                      </div>
                    </div>
                    <p className="person-description">{person.description}</p>
                    <button className="hero-button" onClick={handleHeroClick}>
                      УЗНАТЬ ГЕРОЯ
                    </button>
                  </div>
                </div>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>

      {showDetails && selectedPerson && (
        <div className="hero-details">
          <div className="hero-content">
            <button
              className="back-button"
              onClick={() => setShowDetails(false)}
            >
              ← Назад к карте
            </button>
            <div className="hero-header">
              <h1>{selectedPerson.name}</h1>
              <div className="hero-score-container">
                <img src={starScoreIcon} alt="star" className="score-star" />
                <div className="hero-score">56</div>
              </div>
            </div>
            <div className="hero-info">
              <div className="info-block">
                <h3>РЕГИОН</h3>
                <p>{selectedPerson.region}</p>
              </div>
              <div className="info-block">
                <h3>ПРОФЕССИЯ</h3>
                <p>{selectedPerson.profession}</p>
              </div>
            </div>
            <img
              src={selectedPerson.avatar}
              alt={selectedPerson.name}
              className="hero-avatar"
            />
            <p className="hero-description">{selectedPerson.description}</p>

            <div className="videos-section">
              <div className="videos-container">
                {selectedPerson.videos.map((video) => (
                  <div
                    key={video.id}
                    className="video-thumbnail"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img src={video.thumbnail} alt={video.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-navigation">
            <button
              className="nav-button prev"
              onClick={() => {
                const currentIndex = peopleData.findIndex(
                  (p) => p.id === selectedPerson.id
                );
                const prevIndex =
                  currentIndex > 0 ? currentIndex - 1 : peopleData.length - 1;
                setSelectedPerson(peopleData[prevIndex]);
              }}
            >
              <span className="nav-arrow">←</span>
              <span className="nav-text">Предыдущий</span>
            </button>
            <button
              className="nav-button next"
              onClick={() => {
                const currentIndex = peopleData.findIndex(
                  (p) => p.id === selectedPerson.id
                );
                const nextIndex =
                  currentIndex < peopleData.length - 1 ? currentIndex + 1 : 0;
                setSelectedPerson(peopleData[nextIndex]);
              }}
            >
              <span className="nav-text">Следующий</span>
              <span className="nav-arrow">→</span>
            </button>
          </div>
        </div>
      )}

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default MapPerson;
