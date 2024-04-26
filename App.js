import React, { useState, useEffect } from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-_0qgbF-kqKkfAQw-snzUh1uKzWXn3dk",
  authDomain: "mealstogo-6189e.firebaseapp.com",
  projectId: "mealstogo-6189e",
  storageBucket: "mealstogo-6189e.appspot.com",
  messagingSenderId: "117556577529",
  appId: "1:117556577529:web:e99e2208020b58ada74e28",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "george@test.cc", "test123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
