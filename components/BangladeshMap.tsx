"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

export interface MapTouristPlace {
  id: string;
  name: string;
  division: string;
  category: "Beach" | "Mountain" | "Adventure" | "Nature" | "Heritage";
  slug: string;
  tagline: string;
  lat: number;
  lng: number;
  elevation: string;
  bestTime: string;
  image: string;
}

export const touristPlaces: MapTouristPlace[] = [
  {
    id: "sundarbans",
    name: "The Sundarbans",
    division: "Khulna",
    category: "Adventure",
    slug: "sundarbans-mangrove-forest-guide",
    tagline: "World's largest mangrove forest & Royal Bengal tiger kingdom",
    lat: 21.9497,
    lng: 89.1833,
    elevation: "0 - 3m",
    bestTime: "Nov – Feb",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "sajek",
    name: "Sajek Valley",
    division: "Chattogram",
    category: "Mountain",
    slug: "sajek-valley-travel-guide",
    tagline: "A hill ridge above the clouds in the Lushei mountain range",
    lat: 23.3833,
    lng: 92.2900,
    elevation: "1,800 FT",
    bestTime: "Oct – Feb",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "srimangal",
    name: "Srimangal Tea Capital",
    division: "Sylhet",
    category: "Nature",
    slug: "srimangal-tea-capital-guide",
    tagline: "Rolling tea slopes, seven-layer brews & Lawachara rain canopies",
    lat: 24.3065,
    lng: 91.7296,
    elevation: "65 FT",
    bestTime: "Nov – Feb",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "coxs-bazar",
    name: "Cox's Bazar",
    division: "Chattogram",
    category: "Beach",
    slug: "coxs-bazar-beach-guide",
    tagline: "World's longest unbroken natural sea beach (120 km) along the Bay",
    lat: 21.4272,
    lng: 92.0058,
    elevation: "Sea Level",
    bestTime: "Nov – Mar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "bandarban",
    name: "Bandarban & Keokradong",
    division: "Chattogram",
    category: "Adventure",
    slug: "bandarban-hill-trekking-guide",
    tagline: "Trekking Bangladesh's highest summits, Nilgiri clouds & Boga Lake",
    lat: 22.1953,
    lng: 92.2184,
    elevation: "3,172 FT",
    bestTime: "Nov – Feb",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: "saint-martin",
    name: "Saint Martin's Island",
    division: "Chattogram",
    category: "Beach",
    slug: "saint-martins-island-guide",
    tagline: "Narikel Jinjira: Bangladesh's only coral island & Chhera Dwip reef",
    lat: 20.6237,
    lng: 92.3234,
    elevation: "Sea Level",
    bestTime: "Dec – Feb",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "ratargul",
    name: "Ratargul & Jaflong",
    division: "Sylhet",
    category: "Nature",
    slug: "sylhet-ratargul-jaflong-bisnakandi",
    tagline: "Freshwater swamp canopies, transparent Piyain rivers & stone beds",
    lat: 25.0039,
    lng: 91.9312,
    elevation: "115 FT",
    bestTime: "Jun – Sep",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "kuakata",
    name: "Kuakata Sea Beach",
    division: "Barishal",
    category: "Beach",
    slug: "kuakata-sunrise-sunset-guide",
    tagline: "Daughter of the Sea: rare uninterrupted sunrise & sunset panoramic view",
    lat: 21.8167,
    lng: 90.1167,
    elevation: "Sea Level",
    bestTime: "Nov – Feb",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "paharpur",
    name: "Paharpur & Bagerhat",
    division: "Rajshahi",
    category: "Heritage",
    slug: "paharpur-bagerhat-heritage-guide",
    tagline: "UNESCO 8th-century Somapura Mahavihara & Sixty Dome Mosque city",
    lat: 25.0315,
    lng: 88.9774,
    elevation: "55 FT",
    bestTime: "Nov – Feb",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
  },
  {
    id: "dhaka",
    name: "Historic Dhaka & Lalbagh",
    division: "Dhaka",
    category: "Heritage",
    slug: "blog?region=bangladesh&division=dhaka",
    tagline: "17th-century Mughal fortresses, Ahsan Manzil & Buriganga trade river",
    lat: 23.7196,
    lng: 90.3881,
    elevation: "13 FT",
    bestTime: "Year-Round",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?w=800&q=80",
  },
];

type TileMode = "dark" | "topo" | "satellite";

const TILE_URLS: Record<TileMode, { url: string; attribution: string; className?: string }> = {
  dark: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: '&copy; Esri, DeLorme, NAVTEQ',
    className: "leaflet-tile-dark",
  },
  topo: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: '&copy; Esri, DeLorme, NAVTEQ',
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: '&copy; Esri, Maxar, Earthstar Geographics',
  },
};

export default function BangladeshMap() {
  const [selectedPlace, setSelectedPlace] = useState<MapTouristPlace>(touristPlaces[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [tileMode, setTileMode] = useState<TileMode>("dark");
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tileLayerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersGroupRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const geojsonLayerRef = useRef<any>(null);

  const categories = ["All", "Beach", "Mountain", "Adventure", "Nature", "Heritage"];

  const filteredPlaces = categoryFilter === "All"
    ? touristPlaces
    : touristPlaces.filter((p) => p.category === categoryFilter);

  // Initialize Leaflet Map safely in client
  useEffect(() => {
    let isMounted = true;

    async function initLeaflet() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;
      if (!isMounted || !mapContainerRef.current) return;

      // Center of Bangladesh
      const centerLat = 23.75;
      const centerLng = 90.35;

      const map = L.map(mapContainerRef.current, {
        center: [centerLat, centerLng],
        zoom: 7,
        minZoom: 6,
        maxZoom: 14,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: false,
      });

      mapInstanceRef.current = map;

      // Base Tile Layer (100% Free - NO API KEY REQUIRED, NO WATERMARK)
      const baseTile = L.tileLayer(TILE_URLS.dark.url, {
        maxZoom: 18,
        className: TILE_URLS.dark.className || "",
      }).addTo(map);
      tileLayerRef.current = baseTile;

      // Fetch & Render Authentic Bangladesh Boundary GeoJSON
      try {
        const res = await fetch("/bangladesh.geojson");
        if (res.ok && isMounted) {
          const bdGeoJson = await res.json();
          const geoLayer = L.geoJSON(bdGeoJson, {
            style: {
              color: "#80d5cb",
              weight: 2.2,
              opacity: 0.85,
              fillColor: "#005c55",
              fillOpacity: 0.08,
              dashArray: "3, 6",
            },
          }).addTo(map);
          geojsonLayerRef.current = geoLayer;
        }
      } catch (e) {
        console.warn("Could not load Bangladesh GeoJSON outline:", e);
      }

      // Layer group for tourist markers
      const markerGroup = L.layerGroup().addTo(map);
      markersGroupRef.current = markerGroup;

      setIsMapReady(true);
    }

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Tile Layer when tileMode changes (100% Free - NO API KEY REQUIRED)
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    import("leaflet").then((L) => {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
      const newTile = L.tileLayer(TILE_URLS[tileMode].url, {
        maxZoom: 18,
        className: TILE_URLS[tileMode].className || "",
      }).addTo(mapInstanceRef.current);
      tileLayerRef.current = newTile;
      if (markersGroupRef.current) {
        markersGroupRef.current.bringToFront();
      }
    });
  }, [tileMode]);

  // Re-draw Markers when filtered places or selectedPlace change
  useEffect(() => {
    if (!mapInstanceRef.current || !markersGroupRef.current || !isMapReady) return;

    import("leaflet").then((L) => {
      markersGroupRef.current.clearLayers();

      filteredPlaces.forEach((place) => {
        const isSelected = selectedPlace.id === place.id;

        const iconHtml = `
          <div class="relative group cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
            ${
              isSelected
                ? '<div class="absolute w-12 h-12 rounded-full bg-[#80d5cb]/30 animate-ping pointer-events-none"></div><div class="absolute w-14 h-14 rounded-full border-2 border-[#80d5cb] opacity-75 pointer-events-none"></div>'
                : ""
            }
            <div class="relative flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-2xl transition-all duration-300 ${
              isSelected
                ? "bg-[#ffb690] border-white scale-125 z-30"
                : "bg-[#005c55] border-[#80d5cb] hover:scale-110 hover:border-white z-10"
            }">
              <div class="w-3 h-3 rounded-full ${isSelected ? "bg-[#783200]" : "bg-[#9cf2e8]"}"></div>
            </div>
            <div class="absolute left-9 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide whitespace-nowrap shadow-xl border backdrop-blur-md transition-all ${
              isSelected
                ? "bg-[#00201d] text-[#9cf2e8] border-[#80d5cb] opacity-100 z-30"
                : "bg-black/80 text-white border-white/20 opacity-85 group-hover:opacity-100 z-20"
            }">
              ${place.name}
            </div>
          </div>
        `;

        const customIcon = L.divIcon({
          className: "bd-custom-marker",
          html: iconHtml,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker([place.lat, place.lng], { icon: customIcon });

        marker.on("click", () => {
          setSelectedPlace(place);
          mapInstanceRef.current.flyTo([place.lat, place.lng], 9, {
            duration: 1.2,
          });
        });

        markersGroupRef.current.addLayer(marker);
      });
    });
  }, [filteredPlaces, selectedPlace, isMapReady]);

  // Fly to selected place when picked from card or chips
  const handleSelectPlace = (place: MapTouristPlace) => {
    setSelectedPlace(place);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([place.lat, place.lng], 9, {
        duration: 1.2,
      });
    }
  };

  // Reset to full view of Bangladesh
  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([23.75, 90.35], 7, {
        duration: 1.2,
      });
    }
  };

  return (
    <div className="w-full bg-[#00201d] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl border border-white/10 overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#005c55]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#80d5cb]/10 blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#80d5cb] border border-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[15px]">explore</span>
            Geographic Expedition Cartography
          </div>
          <h2
            className="text-xl sm:text-3xl md:text-4xl font-serif text-white font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tourist Destinations of Bangladesh
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
            Real GPS geographic map of Bangladesh. Pan, zoom, inspect terrain, and click pins to reveal firsthand field dispatches.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                categoryFilter === cat
                  ? "bg-[#005c55] text-[#9cf2e8] shadow-md border border-[#80d5cb]/40"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map + Detail Split View */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Side: Real Geographic Leaflet Map */}
        <div className="lg:col-span-7 flex flex-col bg-black/40 rounded-2xl p-2.5 sm:p-4 border border-white/10 relative overflow-hidden">
          {/* Custom Dark Tile Styling - 100% Free & No API Key */}
          <style>{`
            .leaflet-tile-dark {
              filter: brightness(0.65) invert(1) contrast(2) hue-rotate(195deg) saturate(0.4) !important;
            }
          `}</style>

          {/* Map Controls Top Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mb-3 px-1 z-20">
            {/* Tile Mode Switchers */}
            <div className="flex flex-wrap items-center gap-1 bg-black/70 p-1 rounded-xl border border-white/15 backdrop-blur-md">
              <button
                onClick={() => setTileMode("dark")}
                className={`flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${
                  tileMode === "dark"
                    ? "bg-[#005c55] text-[#9cf2e8]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Dark Expedition
              </button>
              <button
                onClick={() => setTileMode("topo")}
                className={`flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${
                  tileMode === "topo"
                    ? "bg-[#005c55] text-[#9cf2e8]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Topo Terrain
              </button>
              <button
                onClick={() => setTileMode("satellite")}
                className={`flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${
                  tileMode === "satellite"
                    ? "bg-[#005c55] text-[#9cf2e8]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Real Satellite
              </button>
            </div>

            {/* Reset View Button */}
            <button
              onClick={handleResetView}
              className="flex items-center justify-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-[#80d5cb] hover:text-white rounded-xl text-[10px] sm:text-[11px] font-bold border border-white/15 transition-all backdrop-blur-md shrink-0"
              title="Reset View to whole Bangladesh"
            >
              <span className="material-symbols-outlined text-[15px]">crop_free</span>
              <span>Reset Map</span>
            </button>
          </div>

          {/* Leaflet Map Div */}
          <div
            ref={mapContainerRef}
            className="w-full h-[350px] sm:h-[460px] md:h-[540px] rounded-xl overflow-hidden border border-white/10 relative shadow-inner z-10"
            style={{ background: "#061816" }}
          />

          {/* Map Footer Metadata Bar */}
          <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-[11px] text-white/50 px-1 font-mono">
            <span className="truncate">Coordinates: 20°34&apos;N–26°38&apos;N, 88°01&apos;E–92°41&apos;E</span>
            <span className="text-[#80d5cb] font-bold shrink-0">{filteredPlaces.length} Landmarks Active</span>
          </div>
        </div>

        {/* Right Side: Selected Tourist Place Dossier Card */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          <div className="bg-white/95 dark:bg-stone-900 text-gray-900 dark:text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 shadow-2xl border border-white/20 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              {/* Image Preview with Badges */}
              <div className="relative h-44 sm:h-56 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-md">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${selectedPlace.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider border border-white/20">
                    {selectedPlace.division} Division
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 rounded-full bg-[#005c55] text-[#9cf2e8] text-[10px] sm:text-[11px] font-semibold">
                    {selectedPlace.category}
                  </span>
                </div>
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-mono text-[#80d5cb] font-semibold text-[11px] sm:text-xs">
                    {selectedPlace.lat.toFixed(4)}°N, {selectedPlace.lng.toFixed(4)}°E
                  </span>
                  <span className="bg-black/50 px-2 py-0.5 rounded font-mono text-[10px] sm:text-[11px]">
                    {selectedPlace.elevation}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="flex items-start justify-between gap-3">
                <h3
                  className="text-xl sm:text-2xl font-serif font-bold leading-snug text-gray-900 dark:text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {selectedPlace.name}
                </h3>
                <button
                  onClick={() => handleSelectPlace(selectedPlace)}
                  className="flex-shrink-0 p-2 rounded-xl bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb] hover:bg-[#005c55]/20 transition-colors"
                  title="Center and zoom on map"
                >
                  <span className="material-symbols-outlined text-[18px]">my_location</span>
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {selectedPlace.tagline}
              </p>

              {/* Quick Logistics Specs */}
              <div className="grid grid-cols-2 gap-3 mt-5 p-4 rounded-2xl bg-gray-50 dark:bg-stone-800/60 border border-gray-200 dark:border-stone-700 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
                    Prime Season
                  </span>
                  <span className="font-bold text-[#005c55] dark:text-[#9cf2e8] text-sm">
                    {selectedPlace.bestTime}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
                    Division Realm
                  </span>
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                    {selectedPlace.division}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-stone-800">
              <Link
                href={selectedPlace.slug.startsWith("blog") ? `/${selectedPlace.slug}` : `/blog/${selectedPlace.slug}`}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#005c55] hover:bg-[#0f766e] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group"
              >
                <span>Read Complete Expedition Dossier</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Quick Tourist Places Selector Carousel / Chips */}
          <div className="bg-black/30 rounded-2xl p-4 border border-white/10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-2.5">
              Select Destination ({filteredPlaces.length} Locations):
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
              {filteredPlaces.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPlace(p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedPlace.id === p.id
                      ? "bg-[#80d5cb] text-[#00201d] font-bold shadow-md"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
